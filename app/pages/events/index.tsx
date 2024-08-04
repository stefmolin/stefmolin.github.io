import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import FancyDivider from '../../components/dividers/fancy-divider';
import anchorLink, { linkClassName } from '../../components/events/event-anchor-link';
import EventPage from '../../components/events/event-page';
import Layout from '../../components/page-layout/layout';
import Container from '../../components/sections/container';
import { MAP_PIN } from '../../data/constants';
import CONTENT_LINKS from '../../data/content-links';
import { LIVE_PRESENTATIONS } from '../../data/events';
import { EVENT_IMAGES } from '../../data/photo-gallery';
import { getImageLink } from '../../lib/images';

const relatedContent = [
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BOOK_SIGNINGS,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.TRAVEL_BLOG,
  CONTENT_LINKS.TIMELINE,
  CONTENT_LINKS.UPCOMING_EVENTS,
];

export default function Index() {
  const seoImage = CONTENT_LINKS.EVENTS.image;
  const pageTitle = 'Events';

  return (
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description={
            'Conferences, book signings, and other events with Stefanie Molin. Event maps, ' +
            'statistics, and photos.'
          }
          openGraph={{
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
        <EventPage
          pageTitle={pageTitle}
          presentations={LIVE_PRESENTATIONS}
          images={EVENT_IMAGES}
          mapIntroText={
            <>
              Click a {MAP_PIN} on the map to see previous and upcoming events around the world. To
              view this chronologically, check out{' '}
              <Link href={CONTENT_LINKS.TIMELINE.link} className="underline hover:text-slate-500">
                my timeline
              </Link>
              .
            </>
          }
          relatedContent={relatedContent}
          showStats
          header={
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
          }
        />
      </Container>
    </Layout>
  );
}
