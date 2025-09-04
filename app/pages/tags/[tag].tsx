import Feed from '../../components/feeds/feed';
import type FeedType from '../../interfaces/feed';
import { getAllPosts, getPostsByTag } from '../../lib/posts';

export default function TagSearch(props: FeedType) {
  const { title } = props;
  return <Feed {...props} title="Search Results" subtitle={`Posts tagged "${title}"`} />;
}

export const getStaticProps = async ({
  params,
}: {
  params: {
    tag: string;
  };
}) =>
  getPostsByTag(params.tag, [
    'tags',
    'title',
    'subtitle',
    'date',
    'modified',
    'slug',
    'duration',
    'ogImage',
    'type',
    'excerpt',
  ]);

export async function getStaticPaths() {
  const posts = getAllPosts(['tags']);
  const tags = new Set<string>();

  posts.forEach((post) => post.tags.map((tag) => tags.add(tag)));

  return {
    paths: Array.from(tags).map((tag) => ({ params: { tag } })),
    fallback: false,
  };
}
