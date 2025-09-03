import type PostType from './post';

interface FeedType {
  allPosts: PostType[];
  description: string;
  title: string;
  subtitle?: string;
  kind: string;
}

export default FeedType;
