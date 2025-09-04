import { Feed as RssFeed } from 'feed';
import fs from 'fs';
import matter from 'gray-matter';
import intersection from 'lodash/intersection';
import isEqual from 'lodash/isEqual';
import union from 'lodash/union';
import { DateTime } from 'luxon';
import { join } from 'path';
import readingDuration from 'reading-duration';
import { COPYRIGHT_STATEMENT, HOME_OG_IMAGE, HOME_URL } from '../data/constants';
import PostType from '../interfaces/post';

type Items = {
  [key: string]: any;
};

const postsDirectory = join(process.cwd(), '_posts');

const FEEDS = {
  articles: {
    title: 'Articles',
    description:
      'Read articles written by Stefanie Molin on computer science, data science, and more for ' +
      'learners of all levels. Also available as an RSS feed.',
  },
  blog: {
    title: 'Blog',
    description:
      "Read Stefanie Molin's personal blog for updates on new projects, travel stories, and more. " +
      'Also available as an RSS feed.',
  },
};

export function getPostSlugs(category: string = '') {
  return fs
    .readdirSync(join(postsDirectory, category), { recursive: true })
    .map((x) => x.toString())
    .filter((file: string) => file.endsWith('.md'))
    .map((x: string) => x.split('/'));
}

export function getPostBySlug(slug: string[], fields: string[] = [], category: string = '') {
  const realSlug = (category ? [category, ...slug] : slug).join('/').replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  let { data, content } = matter(fileContents);

  // allow shorthand for referencing images by using /posts-assets and the assets value in front matter
  if (data.assets) {
    content = content.replaceAll(/\(\/post-assets(\/[\w\.-]+)\)/g, `(${data.assets}$1)`);
    data.ogImage.url = data.ogImage.url.replace(/^\/post-assets/, data.assets);
  }

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug.split('/');
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'duration') {
      items[field] = readingDuration(content, {
        wordsPerMinute: 250,
        emoji: false,
      });
    }
    if (field == 'type') {
      items[field] = realSlug.split('/')[0];
    }
    if (field == 'theme') {
      const [, theme, ...slug] = realSlug.split('/');
      if (slug.length === 0) items[field] = null;
      else {
        const parts = [theme];
        if (slug.length > 1) parts.push(...slug.slice(0, slug.length - 1));
        items[field] = parts.join('/');
      }
    }
    if (field === 'modified') {
      items[field] = fs.statSync(fullPath).mtime.toISOString();
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });
  return items;
}

export function getPostsByTag(tag: string, fields: string[] = []) {
  const posts = getAllPosts(fields).filter((post) => post.tags.includes(tag));

  if (tag === 'Python') {
    // create feed for Python posts (for aggregators)
    generateRssFeed(tag, `${tag} articles`, posts, true);
  }

  return {
    props: {
      allPosts: posts,
      kind: 'tag',
      title: tag,
      description: `Search results for posts tagged '${tag}' across stefaniemolin.com.`,
    },
  };
}

export function getPostsByTheme(theme: string[]) {
  const posts = getAllPosts([
    'tags',
    'title',
    'subtitle',
    'date',
    'slug',
    'duration',
    'ogImage',
    'type',
    'excerpt',
    'theme',
  ]);
  return {
    props: {
      allPosts: posts.filter((post) =>
        isEqual(post.theme?.split('/').slice(0, theme.length), theme),
      ),
      kind: 'theme',
      title: theme,
      description: `Feed of all posts written by Stefanie Molin that have been categorized as '${theme.join("' and '")}'.`,
    },
  };
}

export function getAllPosts(
  fields: string[] = [],
  type: string = '',
  includePreview: boolean = false,
) {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, [...fields, 'preview', 'type'], type))
    .filter((post) => includePreview || !post.preview)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getFeed = (postType: string) => {
  const allPosts = getAllPosts(
    [
      'title',
      'subtitle',
      'date',
      'modified',
      'slug',
      'author',
      'ogImage',
      'excerpt',
      'tags',
      'duration',
    ],
    postType,
  );

  const { title: feedTitle, description: feedDescription } = FEEDS[postType];
  generateRssFeed(postType, feedTitle, allPosts);

  return {
    props: {
      allPosts,
      kind: postType,
      title: feedTitle,
      description: feedDescription,
    },
  };
};

export const generateRssFeed = async (
  feedType: string,
  feedTitle: string,
  posts: Items[],
  isTag: boolean = false,
) => {
  if (feedType.includes('/')) return;

  const link = `${HOME_URL}/${isTag ? 'tags/' : ''}${feedType}`;

  const rssFeed = new RssFeed({
    title: `Stefanie Molin's ${feedTitle}`,
    description: 'Stay up to date with my latest posts.',
    id: link,
    link: link,
    copyright: COPYRIGHT_STATEMENT.replace('YEAR', DateTime.now().year.toString()),
    language: 'en',
    image: HOME_OG_IMAGE.src,
    favicon: `${HOME_URL}/favicon/favicon.ico`,
    author: {
      name: 'Stefanie Molin',
      link: HOME_URL,
      avatar: HOME_OG_IMAGE.src,
    },
    feedLinks: {
      atom: `${HOME_URL}/feeds/${feedType}-atom.xml`,
      json: `${HOME_URL}/feeds/${feedType}.json`,
    },
  });

  rssFeed.addCategory(feedType);
  if (feedType === 'articles') {
    ['technology', 'data science', 'computer science', 'public speaking'].forEach((category) =>
      rssFeed.addCategory(category),
    );
  }

  const localImageRegex = /^\/assets/;

  posts.forEach((post) => {
    const url = `${HOME_URL}/${post.slug.join('/')}`;
    const imageUrl = localImageRegex.exec(post.ogImage.url)
      ? post.ogImage.url.replace(localImageRegex, HOME_URL)
      : post.ogImage.url.replace(/[<>&'"]/g, function (character) {
          switch (character) {
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '&':
              return '&amp;';
            case "'":
              return '&apos;';
            case '"':
              return '&quot;';
          }
        });
    rssFeed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      date: DateTime.fromISO(post.date).toJSDate(),
      category: post.slug.length > 1 ? post.slug[1] : null,
      image: localImageRegex.exec(post.ogImage.url)
        ? post.ogImage.url.replace(localImageRegex, HOME_URL)
        : imageUrl,
    });
  });

  const dir = './public/feeds';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(`${dir}/${feedType}-rss.xml`, rssFeed.rss2());
  fs.writeFileSync(`${dir}/${feedType}-atom.xml`, rssFeed.atom1());
  fs.writeFileSync(`${dir}/${feedType}.json`, rssFeed.json1());
};

export const getSuggestedPosts = (post: PostType, fields: string[]) => {
  let suggestedPosts = getAllPosts(fields, post.type).filter((x) => !isEqual(x.slug, post.slug));

  if (suggestedPosts.length > 0) {
    if (post.type === 'blog') {
      const before = suggestedPosts.find((suggestion) => suggestion.date < post.date);
      const after = suggestedPosts.findLast((suggestion) => suggestion.date > post.date);
      if (before && after) {
        // if there is one before and one after show those as the most similar
        return [after, before];
      } else if (before && !after) {
        // this is the latest post; show the ones just before it
        return suggestedPosts.slice(0, 2);
      }
      // this is the first post; show the ones just after it
      return suggestedPosts.slice(-2);
    }

    // use tags for article similarity
    suggestedPosts.forEach((otherPost) => {
      const tags: string[] = otherPost.tags;
      // use the Jaccard index for article similarity
      otherPost.similarity = intersection(tags, post.tags).length / union(tags, post.tags).length;
    });

    return suggestedPosts
      .sort((post1, post2) =>
        post1.similarity > post2.similarity || post1.date > post2.date ? -1 : 1,
      )
      .slice(0, 2); // show top x results (second number)
  }
};
