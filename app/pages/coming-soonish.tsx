import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ExternalLink from '../components/links/external-link';
import Layout from '../components/page-layout/layout';
import RelatedContentSection from '../components/related-content/related-content';
import Container from '../components/sections/container';
import Tooltip from '../components/tooltip';
import CONTENT_LINKS from '../data/content-links';

const relatedContent = [
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.EVENTS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.WORKSHOPS,
];

export default function ComingSoonish() {
  const searchParams = useSearchParams();
  const slides = searchParams.get('slides');
  const pageTitle = 'Coming Soon';
  const linkClassName = 'py-px font-bold underline decoration-yellow-400 hover:text-slate-700';

  return (
    <Layout
      className="bg-contain bg-scroll pb-20"
      styleProps={{
        backgroundImage: 'url(/assets/under-construction.jpg)',
      }}
    >
      <NextSeo title={pageTitle} noindex />
      <Container className="px-4 sm:px-10">
        <div className="-mt-8 sm:mt-4 max-w-5xl mx-auto p-6 sm:p-10 bg-white rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-2">Coming Soon(ish)</h1>
          <div className="sm:text-lg md:text-xl py-2">
            <Tooltip
              message={
                <FontAwesomeIcon
                  icon={faHeart}
                  className="px-5 text-red-500"
                  size="5x"
                  fixedWidth
                  beatFade
                />
              }
              backgroundClassName="bg-red-100 rounded-lg"
              borderClassName="border-red-100 rounded-lg"
              tooltipArrowClassName="bg-red-100"
            >
              <span>Your interest in my content is very much appreciated!</span>
            </Tooltip>
            <br />I spend a lot of time crafting my content, and the{' '}
            {slides ? (
              <>
                <span>"{slides}"</span> slides are
              </>
            ) : (
              'resource you requested is'
            )}{' '}
            not completed yet. Check back soon, or better yet,{' '}
            <Link href="/newsletter" className={linkClassName}>
              sign up for my newsletter
            </Link>
            .
          </div>
          <RelatedContentSection
            carouselClassName="pt-5 -mx-4"
            divClassName="mt-5"
            inset
            relatedContent={relatedContent}
            title={
              <>
                And as Camila Cabello once said, "
                <ExternalLink
                  href="https://www.youtube.com/watch?v=KDFWEPYwDpU"
                  className={linkClassName}
                >
                  Don't Go Yet!
                </ExternalLink>
                "
              </>
            }
            titleClassName="sm:text-lg md:text-xl"
          />
        </div>
      </Container>
    </Layout>
  );
}
