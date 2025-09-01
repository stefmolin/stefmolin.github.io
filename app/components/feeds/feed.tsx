import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRef, useState } from 'react';
import type FeedType from '../../interfaces/feed';
import { useWindowSize } from '../../lib/hooks/window-size';
import Layout from '../page-layout/layout';
import Pagination from '../pagination';
import Container from '../sections/container';
import PostListing from './post-listing';

const Feed = ({
  allPosts,
  description,
  title,
  subtitle,
}: Omit<FeedType, 'kind'> & { subtitle?: string }) => {
  const feedRef = useRef<null | HTMLDivElement>(null);
  const { width } = useWindowSize();
  const postsPerPage = width && width < 465 ? 3 : 5;
  const [offset, setOffset] = useState(0);
  const pageTitle = subtitle ?? title;
  return (
    <>
      <Layout>
        <NextSeo title={pageTitle} description={description} />
        <Container>
          <div ref={feedRef} className="max-w-5xl -mx-4 sm:mx-auto mb-32">
            <h1 className="text-6xl md:text-7xl mb-4 text-center">{title}</h1>
            {subtitle ? (
              <div className="text-center py-2">
                <h2 className="text-lg md:text-xl">{subtitle}</h2>
                <Link href="/tags" className="text-slate-700 hover:underline">
                  <small>click here for the tag listing</small>
                </Link>
              </div>
            ) : null}
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
