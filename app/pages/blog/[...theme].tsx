import _ from 'lodash';
import Feed from '../../components/feeds/feed';
import FeedType from '../../interfaces/feed';
import { getPostThemePaths, getPostThemeProps } from '../../lib/post-themes';

const DISPLAY_NAMES = {
  travel: 'Travel Blog',
  updates: 'Updates',
};

export default function BlogTheme(props: FeedType) {
  let { title } = props;
  let [theme, year] = title;
  theme = DISPLAY_NAMES[theme] || theme.replaceAll('-', ' ');
  if (year) title = `${theme} (${year})`;
  else title = theme;
  return <Feed {...props} title={title} />;
}

export const getStaticProps = getPostThemeProps;
export const getStaticPaths = getPostThemePaths('blog');
