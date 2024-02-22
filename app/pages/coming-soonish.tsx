import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/sections/container';
import Layout from '../components/layout';
import CONTENT_LINKS from '../data/content-links';
import type RelatedContentLink from '../interfaces/related-content';
import RelatedContentSection from '../components/related-content/related-content';
import ExternalLink from '../components/links/external-link';
import Tooltip from '../components/tooltip';
import { NEWSLETTER_URL } from '../data/constants';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.EVENTS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.WORKSHOPS,
];

export default function ComingSoonish() {
  const preview = false;
  const searchParams = useSearchParams();
  const slides = searchParams.get('slides')?.replaceAll('-', ' ');

  return (
    <Layout
      preview={preview}
      className="bg-contain bg-scroll pb-20"
      styleProps={{
        backgroundImage: 'url(/assets/under-construction.jpg)',
      }}
    >
      <Container>
        <div className="mt-4 max-w-5xl mx-auto p-10 bg-white rounded-lg">
          <h1 className="text-3xl md:text-4xl">Coming Soon(ish)</h1>
          <div className="text-lg md:text-xl py-2">
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
            <ExternalLink
              href={NEWSLETTER_URL}
              className="p-px font-bold underline decoration-yellow-400 hover:text-slate-700"
            >
              sign up for my newsletter
            </ExternalLink>
            .
          </div>
          <RelatedContentSection
            carouselClassName="pt-5"
            divClassName="mt-5"
            inset
            relatedContent={relatedContent.sort((a, b) => (a.title > b.title ? 1 : -1))}
            title={
              <>
                And as Camila Cabello once said, "
                <ExternalLink
                  href="https://www.youtube.com/watch?v=KDFWEPYwDpU"
                  className="underline font-bold decoration-yellow-400 hover:text-slate-700"
                >
                  Don't Go Yet!
                </ExternalLink>
                "
              </>
            }
            titleClassName="text-lg md:text-xl"
          />
        </div>
      </Container>
    </Layout>
  );
}
