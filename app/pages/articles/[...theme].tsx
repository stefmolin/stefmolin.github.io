import _ from 'lodash';
import Feed from '../../components/feeds/feed';
import FeedType from '../../interfaces/feed';
import { getPostThemePaths, getPostThemeProps } from '../../lib/post-themes';

const DISPLAY_NAMES = {
  'data-science': 'Data Science',
  devx: 'DevX',
  'open-source': 'Open Source',
  'pre-commit': 'Pre-Commit',
};

export default function ArticleTheme(props: FeedType) {
  let { title } = props;
  title = title[title.length - 1];
  return (
    <Feed {...props} title={`${DISPLAY_NAMES[title] ?? title.replaceAll('-', ' ')} Articles`} />
  );
}

export const getStaticProps = getPostThemeProps;
export const getStaticPaths = getPostThemePaths('articles');
