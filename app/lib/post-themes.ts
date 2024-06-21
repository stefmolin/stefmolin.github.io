import _ from 'lodash';
import { getAllPosts, getPostsByTheme } from './posts';

interface Params {
  params: {
    theme: string[];
  };
}

export const getPostThemeProps = async ({ params }: Params) => {
  const fields = [
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
    'preview',
  ];
  const { props } = getPostsByTheme(params.theme, fields);
  props.allPosts = props.allPosts
    .filter((post) => !post.preview)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { props };
};

export const getPostThemePaths = (category: 'articles' | 'blog') => async () => {
  const posts = getAllPosts(['theme', 'type', 'preview']).filter(
    (x) => x.theme && x.theme.length && x.type === category && !x.preview,
  );
  const themes = new Set<string>();

  posts.forEach((post) => {
    if (post.theme) {
      const levels = post.theme.split('/');
      _.range(1, levels.length + 1).map((level) => themes.add(levels.slice(0, level).join('/')));
    }
  });

  return {
    paths: Array.from(themes).map((theme) => ({ params: { theme: theme.split('/') } })),
    fallback: false,
  };
};
