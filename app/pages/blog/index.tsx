import Feed from "../../components/feed";
import { getAllPosts } from "../../lib/api";
import PostType from "../../interfaces/post";

type Props = {
  allPosts: PostType[];
  title: string;
  description: string;
};

export default function Index(props: Props) {
  return <Feed {...props} />;
}

export const getStaticProps = async () => {
  const category = "blog";
  const allPosts = getAllPosts(
    [
      "title",
      "subtitle",
      "date",
      "slug",
      "author",
      "coverImage",
      "excerpt",
      "tags",
      "duration",
    ],
    category
  );

  return {
    props: {
      allPosts,
      category,
      title: "Blog",
      description: "Stefanie's blog.",
    },
  };
};
