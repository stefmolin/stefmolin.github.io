import Container from '../../components/container';
import Layout from '../../components/layout';
import TagListing, { type TagListingProps } from '../../components/feeds/tag-listing';
import { getAllPosts } from '../../lib/posts';

export default function Index({ tagCounts }: Pick<TagListingProps, 'tagCounts'>) {
  const preview = false;
  return (
    <Layout preview={preview}>
      <Container>
        <h1 className="text-3xl">Search posts by tag</h1>
        <TagListing
          tagCounts={tagCounts}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left pt-10 px-12 mb-10 md:mb-0"
        />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts(['tags']);
  const counts = posts.reduce((count, post) => {
    post.tags.map((tag) => (count[tag] = 1 + (count[tag] || 0)));
    return count;
  }, {});
  return {
    props: { tagCounts: Object.entries(counts).map(([tag, value]) => ({ text: tag, value })) },
  };
};
