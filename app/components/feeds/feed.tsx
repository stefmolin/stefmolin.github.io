import { NextSeo } from 'next-seo';
import Container from '../container';
import PostListing from './post-listing';
import Intro from '../posts/intro';
import Layout from '../layout';
import FeedType from '../../interfaces/feed';
import { usePageURL } from '../../lib/hooks';

// TODO: the div that sets the max-width is needed to stop it from getting too long on large screens
// maybe that means something could go on the side bar in that case?

const Feed = ({ allPosts, description, title }: Omit<FeedType, 'kind'>) => {
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
          <div className="max-w-5xl mx-auto">
            <PostListing posts={allPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Feed;
