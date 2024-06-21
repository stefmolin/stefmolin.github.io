import { NextSeo } from 'next-seo';
import Container from '../../components/sections/container';
import Layout from '../../components/page-layout/layout';
import TagListing, { type TagListingProps } from '../../components/feeds/tag-listing';
import { getAllPosts } from '../../lib/posts';

export default function Index({ tagCounts }: Pick<TagListingProps, 'tagCounts'>) {
  return (
    <Layout seoPageTitle="Search posts by Stefanie Molin">
      <NextSeo
        title="Post Search"
        description="Search all articles and blog posts written by Stefanie Molin using clickable tags."
      />
      <Container>
        <h1 className="text-2xl sm:text-3xl">Search posts by tag</h1>
        <TagListing
          tagCounts={tagCounts}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left pt-10 gap-1"
        />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts(['tags', 'preview']);
  const counts = posts
    .filter((post) => !post.preview)
    .reduce((count, post) => {
      post.tags.map((tag) => (count[tag] = 1 + (count[tag] || 0)));
      return count;
    }, {});
  return {
    props: { tagCounts: Object.entries(counts).map(([tag, value]) => ({ text: tag, value })) },
  };
};
