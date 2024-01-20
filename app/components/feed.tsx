import Container from "./container";
import MoreStories from "./posts/more-stories";
import HeroPost from "./posts/hero-post";
import Intro from "./posts/intro";
import Layout from "./layout";
import Head from "next/head";
import FeedType from "../interfaces/feed";

const Feed = ({ allPosts, description, title, kind }: FeedType) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout pageDescription={description} preview>
        <Head>
          <title>{`${title} | Stefanie Molin`}</title>
        </Head>
        <Container>
          <Intro title={title} description={description} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              subtitle={heroPost.subtitle}
              coverImage={heroPost.ogImage.url}
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
};

export default Feed;
