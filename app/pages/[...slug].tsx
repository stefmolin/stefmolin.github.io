import range from 'lodash/range';
import startCase from 'lodash/startCase';
import Feed from '../components/feeds/feed';
import Post, { type PostProps } from '../components/posts/post';
import type FeedType from '../interfaces/feed';
import type PostType from '../interfaces/post';
import markdownToHtml from '../lib/markdownToHtml';
import {
  getAllPosts,
  getFeed,
  getPostBySlug,
  getPostsByTheme,
  getSuggestedPosts,
} from '../lib/posts';

const DISPLAY_NAMES = {
  devx: 'DevX/DevOps',
  'pre-commit': 'Pre-Commit',
  travel: 'Travel Blog',
};

export default function Content(props: PostProps | FeedType) {
  if ('post' in props) return <Post {...props} />;

  let { title, allPosts, kind } = props;
  if (kind === 'theme' && allPosts.every((post) => post.type === 'blog')) {
    let [theme, year] = title;
    theme = DISPLAY_NAMES[theme] || startCase(theme);
    title = year ? `${theme} (${year})` : theme;
  } else if (Array.isArray(title)) {
    title = title[title.length - 1];
    title = `${DISPLAY_NAMES[title] ?? startCase(title)} Articles`;
  }

  return <Feed {...props} title={title} />;
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 1) return getFeed(params.slug[0]);

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
    const post = getPostBySlug(params.slug, fields) as PostType;
    const content = await markdownToHtml(post.content || '');

    return {
      props: {
        post: { ...post, content },
        suggestedPosts: getSuggestedPosts(post, fields),
      },
    };
  } catch {
    // there was no post at that slug, so it has to be a theme
    return getPostsByTheme(params.slug.slice(1));
  }
}

export async function getStaticPaths() {
  const slugs = new Set<string>();

  getAllPosts(['slug'], '', true).forEach((post) => {
    range(1, post.slug.length + 1).map((level) => slugs.add(post.slug.slice(0, level).join('/')));
  });

  return {
    paths: Array.from(slugs).map((slug) => ({ params: { slug: slug.split('/') } })),
    fallback: false,
  };
}
