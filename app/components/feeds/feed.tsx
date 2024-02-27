import { NextSeo } from 'next-seo';
import { useRef, useState } from 'react';
import Container from '../sections/container';
import Intro from '../posts/intro';
import Layout from '../page-layout/layout';
import type FeedType from '../../interfaces/feed';
import { usePageURL } from '../../lib/hooks/page-url';
import Pagination from '../pagination';
import PostListing from './post-listing';

// TODO: the div that sets the max-width is needed to stop it from getting too long on large screens
// maybe that means something could go on the side bar in that case?

const Feed = ({ allPosts, description, title }: Omit<FeedType, 'kind'>) => {
  const feedRef = useRef<null | HTMLDivElement>(null);
  const postsPerPage = 5;
  const [offset, setOffset] = useState(0);
  return (
    <>
      <Layout>
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            url: usePageURL(),
          }}
        />
        <Container>
          <div ref={feedRef} className="max-w-5xl mx-auto mb-32">
            <Intro title={title} description={description} />
            <PostListing posts={allPosts.slice(offset, offset + postsPerPage)} />
            <Pagination
              itemsPerPage={postsPerPage}
              scrollRef={feedRef}
              setOffset={setOffset}
              totalItems={allPosts.length}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Feed;
