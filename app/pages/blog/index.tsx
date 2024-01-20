import Feed from "../../components/feed";
import { getFeed } from "../../lib/api";
import FeedType from "../../interfaces/feed";

export default function Index(props: FeedType) {
  return <Feed {...props} />;
}

export const getStaticProps = async () =>
  getFeed("blog", "Blog", "Stefanie Molin's blog.");
