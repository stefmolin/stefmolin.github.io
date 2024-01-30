import Feed from '../components/feed';
import FeedType from '../interfaces/feed';
import { getFeed } from '../lib/api';

const feeds = {
  articles: { title: 'Articles', description: 'Articles by Stefanie Molin.' },
  blog: { title: 'Blog', description: "Stefanie Molin's blog." },
};

type Params = {
  params: {
    tag: string;
    feed: string;
  };
};

export default function PostFeed(props: FeedType) {
  return <Feed {...props} />;
}

export const getStaticProps = async ({ params }: Params) => {
  const feedType = params.feed;
  const { title, description } = feeds[feedType];
  const { props } = getFeed(feedType, title, description);
  props.allPosts = props.allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { props };
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(feeds).map((feed) => ({ params: { feed } })),
    fallback: false,
  };
}
