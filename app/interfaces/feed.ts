import PostType from "./post";

type FeedType = {
  allPosts: PostType[];
  description: string;
  title: string;
  kind: string;
};

export default FeedType;
