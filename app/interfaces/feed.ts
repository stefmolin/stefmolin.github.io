import type PostType from './post';

interface FeedType {
  allPosts: PostType[];
  description: string;
  title: string;
  kind: string;
}

export default FeedType;
