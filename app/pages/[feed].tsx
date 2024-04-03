import Feed from '../components/feeds/feed';
import type FeedType from '../interfaces/feed';
import { getFeed } from '../lib/posts';

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
