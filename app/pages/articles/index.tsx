import Feed from '../../components/feed';
import FeedType from '../../interfaces/feed';
import { getFeed } from '../../lib/api';

export default function Index(props: FeedType) {
  return <Feed {...props} />;
}

export const getStaticProps = async () =>
  getFeed('articles', 'Articles', 'Articles by Stefanie Molin.');
