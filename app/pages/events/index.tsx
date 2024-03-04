import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import FancyDivider from '../../components/dividers/fancy-divider';
import EventMap from '../../components/events/event-map';
import EventStatsSection from '../../components/events/event-stats-section';
import Layout from '../../components/page-layout/layout';
import PhotoGallery from '../../components/photo-gallery';
import RelatedContentSection from '../../components/related-content/related-content';
import Container from '../../components/sections/container';
import EvenlySpacedSections from '../../components/sections/evenly-spaced-sections';
import { MAP_PIN } from '../../data/constants';
import CONTENT_LINKS from '../../data/content-links';
import { LIVE_PRESENTATIONS } from '../../data/events';
import { EVENT_IMAGES } from '../../data/photo-gallery';
import { usePageURL } from '../../lib/hooks/page-url';
import { getImageLink } from '../../lib/images';

const relatedContent = [
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BOOK_SIGNINGS,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.BLOG,
];

// TODO: incorporate the non-conference, non-signing events?

export default function Index() {
  const seoImage = CONTENT_LINKS.EVENTS.image;
  const pageTitle = 'Events';
  const subsectionTitleClassName = 'text-center md:text-left text-3xl mb-5';
  const linkClassName = 'text-slate-700 hover:text-slate-500 underline';
  const anchorLink = (fragment: string, text: string | React.ReactNode) => (
    <Link href={fragment} className={linkClassName}>
      {text}
    </Link>
  );
  return (
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description="Conferences, book signings, and other events with Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: 'Picture of Stefanie Molin presenting a workshop at EuroPython 2022.',
              },
            ],
          }}
        />
        <div className="-mt-4 mb-20 max-w-5xl -mx-4 sm:mx-auto">
          <h1 className="text-6xl md:text-7xl mb-2 text-center">{pageTitle}</h1>
          <EvenlySpacedSections className="my-10">
            <div className="flex flex-col items-center">
              <FancyDivider className="w-1/2 mx-auto pb-5">
                <FontAwesomeIcon icon={faLightbulb} className="px-5" fixedWidth />
              </FancyDivider>
              <p className="md:text-justify text-lg lg:text-xl px-2 md:px-10">
                <b>Knowledge sharing is a passion of mine</b>. On this page you will find{' '}
                {anchorLink('#photos', 'photos')} from past <b>conference presentations</b> and{' '}
                <b>book signings</b>, a {anchorLink('#event-map', 'map')} showing event locations
                and dates, along with some {anchorLink('#stats', 'statistics')} about these events.
                If you would like to <b>invite me to speak</b> at your event, please{' '}
                {
                  <Link href="/contact" className={classNames(linkClassName, 'font-bold')}>
                    get in touch
                  </Link>
                }
                .
              </p>
            </div>
            <PhotoGallery
              photos={EVENT_IMAGES}
              shufflePhotos
              titleClassName={subsectionTitleClassName}
              promptClassName="text-center md:text-left"
            />
            <EventStatsSection
              sessions={LIVE_PRESENTATIONS}
              titleClassName={subsectionTitleClassName}
            />
            <EventMap
              introText={`Click a ${MAP_PIN} on the map to see the events I have participated in
              around the world.`}
              liveEvents={LIVE_PRESENTATIONS}
              titleClassName={subsectionTitleClassName}
            />
            <RelatedContentSection
              relatedContent={relatedContent}
              titleClassName={subsectionTitleClassName}
            />
          </EvenlySpacedSections>
        </div>
      </Container>
    </Layout>
  );
}
