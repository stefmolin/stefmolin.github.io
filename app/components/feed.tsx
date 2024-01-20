import { NextSeo } from "next-seo";
import Container from "./container";
import MoreStories from "./posts/more-stories";
import HeroPost from "./posts/hero-post";
import Intro from "./posts/intro";
import Layout from "./layout";
import FeedType from "../interfaces/feed";
import { usePageURL } from "../lib/hooks";

const Feed = ({ allPosts, description, title, kind }: FeedType) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview>
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            url: usePageURL(),
          }}
        />
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
