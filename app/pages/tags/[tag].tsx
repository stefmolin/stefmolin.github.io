import Feed from '../../components/feeds/feed';
import type FeedType from '../../interfaces/feed';
import { getAllPosts, getPostsByTag } from '../../lib/posts';

type Params = {
  params: {
    tag: string;
  };
};

export default function TagSearch(props: FeedType) {
  const { title } = props;
  return <Feed {...props} title="Search Results" subtitle={`Posts tagged "${title}"`} />;
}

export const getStaticProps = async ({ params }: Params) => {
  const fields = [
    'tags',
    'title',
    'subtitle',
    'date',
    'slug',
    'duration',
    'ogImage',
    'type',
    'excerpt',
  ];
  const { props } = getPostsByTag(params.tag, fields);
  props.allPosts = props.allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { props };
};

export async function getStaticPaths() {
  const posts = getAllPosts(['tags']);
  const tags = new Set<string>();

  posts.forEach((post) => post.tags.map((tag) => tags.add(tag)));

  return {
    paths: Array.from(tags).map((tag) => ({ params: { tag } })),
    fallback: false,
  };
}
