import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview>
        <Head>
          <title>Blog | Stefanie Molin</title>
        </Head>
        <Container>
          <Intro title="Blog" description="Stefanie's blog." />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              subtitle={heroPost.subtitle}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
              duration={heroPost.duration}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
    "duration",
  ]);

  return {
    props: { allPosts },
  };
};
