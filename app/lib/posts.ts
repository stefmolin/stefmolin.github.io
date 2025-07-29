import { Feed as RssFeed } from 'feed';
import fs from 'fs';
import matter from 'gray-matter';
import isEqual from 'lodash/isEqual';
import { DateTime } from 'luxon';
import { join } from 'path';
import readingDuration from 'reading-duration';
import { COPYRIGHT_STATEMENT, HOME_OG_IMAGE, HOME_URL } from '../data/constants';

type Items = {
  [key: string]: any;
};

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(category: string = '') {
  return fs
    .readdirSync(join(postsDirectory, category), { recursive: true })
    .map((x) => x.toString())
    .filter((file) => file.endsWith('.md'))
    .map((x) => x.split('/'));
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
  const posts = getAllPosts([...fields, 'preview']).filter(
    (post) => post.tags.includes(tag) && !post.preview,
  );

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

export function getPostsByTheme(theme: string[], fields: string[] = []) {
  const posts = getAllPosts(fields);
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

export function getAllPosts(fields: string[] = [], type: string = '') {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, type))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getFeed = (postType: string, feedTitle: string, feedDescription: string) => {
  const allPosts = getAllPosts(
    [
      'title',
      'subtitle',
      'date',
      'slug',
      'author',
      'ogImage',
      'excerpt',
      'tags',
      'duration',
      'preview',
    ],
    postType,
  ).filter((post) => !post.preview);

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
