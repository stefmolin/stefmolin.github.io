import intersection from 'lodash/intersection';
import range from 'lodash/range';
import union from 'lodash/union';
import { DateTime } from 'luxon';
import Feed from '../components/feeds/feed';
import Post, { type PostProps } from '../components/posts/post';
import type FeedType from '../interfaces/feed';
import markdownToHtml from '../lib/markdownToHtml';
import { getAllPosts, getFeed, getPostBySlug } from '../lib/posts';
import { getPostThemeProps } from '../lib/post-themes'; // TODO: maybe this is the only function to keep and it can move to posts?

const DISPLAY_NAMES = {
  'data-science': 'Data Science',
  devx: 'DevX/DevOps',
  'open-source': 'Open Source',
  'pre-commit': 'Pre-Commit',
  travel: 'Travel Blog',
  updates: 'Updates',
};

export default function Content(props: PostProps | FeedType) {
  if ('post' in props) return <Post {...props} />;

  let { title, allPosts } = props;
  if (allPosts[0].type === 'blog') {
    let [theme, year] = title;
    theme = DISPLAY_NAMES[theme] || theme.replaceAll('-', ' ');
    if (year) title = `${theme} (${year})`;
    else title = theme;
  } else if (Array.isArray(title)) {
    title = title[title.length - 1];
    title = `${DISPLAY_NAMES[title] ?? title.replaceAll('-', ' ')} Articles`;
  }

  return <Feed {...props} title={title} />;
}

type Params = {
  params: {
    slug: string[];
  };
};

const feeds = {
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

export async function getStaticProps({ params }: Params) {
  if (params.slug.length === 1) {
    const feedType = params.slug[0];
    const { title, description } = feeds[feedType];
    const { props } = getFeed(feedType, title, description);
    props.allPosts = props.allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return { props };
  }

  // if slug is more than one it could be a post or a theme, so we try to find the post and fallback on the theme
  try {
    const fields = [
      'title',
      'subtitle',
      'date',
      'slug',
      'author',
      'tags',
      'duration',
      'content',
      'ogImage',
      'type',
      'canonical',
      'modified',
      'featured',
      'excerpt',
      'preview',
    ];
    const post = getPostBySlug(params.slug, fields);
    const content = await markdownToHtml(post.content || '');

    let suggestedPosts = getAllPosts([...fields, 'excerpt'], post.type).filter(
      (x) => x.slug.join() != post.slug.join() && !x.preview,
    );

    if (suggestedPosts.length > 0) {
      if (post.type === 'blog') {
        const sortedSuggestions = suggestedPosts.sort((post1, post2) =>
          post1.date > post2.date ? -1 : 1,
        );
        const before = sortedSuggestions.findLast((suggestion) => suggestion.date < post.date);
        const after = sortedSuggestions.find((suggestion) => suggestion.date > post.date);
        if (before && after) {
          // if there is one before and one after show those as the most similar
          before.similarity = Infinity;
          after.similarity = Infinity;
        } else {
          suggestedPosts.forEach((otherPost) => {
            // blog posts closer in time are more similar
            const dateDiff = Math.abs(
              DateTime.fromISO(post.date).diff(DateTime.fromISO(otherPost.date)).as('seconds'),
            );
            otherPost.similarity = 1 / dateDiff;
          });
        }
      } else {
        // use tags for article similarity
        suggestedPosts.forEach((otherPost) => {
          const tags: string[] = otherPost.tags;
          // use the Jaccard index for article similarity
          otherPost.similarity =
            intersection(tags, post.tags).length / union(tags, post.tags).length;
        });
      }

      suggestedPosts = suggestedPosts
        .sort((post1, post2) =>
          post1.similarity > post2.similarity || post1.date > post2.date ? -1 : 1,
        )
        .slice(0, 2); // show top x results (second number)
    }

    return {
      props: {
        post: { ...post, content },
        suggestedPosts,
      },
    };
  } catch {
    return getPostThemeProps({ params: { theme: params.slug.slice(1) } });
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  const slugs = new Set<string>();

  posts.forEach((post) => {
    range(1, post.slug.length + 1).map((level) => slugs.add(post.slug.slice(0, level).join('/')));
  });

  return {
    paths: Array.from(slugs).map((slug) => ({ params: { slug: slug.split('/') } })),
    fallback: false,
  };
}
