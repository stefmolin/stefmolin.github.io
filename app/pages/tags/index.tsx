import Link from 'next/link';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getAllPosts } from '../../lib/api';

type TagCount = {
  text: string;
  value: number;
};

type TagListingProps = {
  tagCounts: TagCount[];
};

export default function TagListing({ tagCounts }: TagListingProps) {
  const preview = false;
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <h1 className="text-3xl">Post Tags</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left pt-10 px-12 mb-10 md:mb-0">
          {...tagCounts
            .sort((tag1, tag2) => (tag1.value > tag2.value ? -1 : 1))
            .map(({ text, value }) => (
              <Link
                key={text}
                href={`/tags/${text}`}
                className="font-bold text-slate-500 hover:text-slate-800 hover:underline"
              >
                {text} ({value})
              </Link>
            ))}
        </div>
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
