import classNames from 'classnames';
import _ from 'lodash';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
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
import { CONFERENCE_IMAGES } from '../../data/photo-gallery';
import { usePageURL } from '../../lib/hooks/page-url';
import { getImageLink } from '../../lib/images';

const relatedContent = [
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.BOOK_SIGNINGS,
  CONTENT_LINKS.TALKS,
];

export default function Conferences() {
  const seoImage = CONTENT_LINKS.CONFERENCES.image;
  const pageTitle = 'Conferences';
  const subsectionTitleClassName = 'text-center md:text-left text-3xl mb-5';
  const presentations = LIVE_PRESENTATIONS.filter(
    (x) => x.presentation.contentClass !== 'book signing',
  );
  const presentationsGivenAlready = presentations.filter(
    ({ date }) => date < DateTime.now().toISODate(),
  ).length;
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
          description="Conferences Stefanie Molin has presented at."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: 'Assorted badges from conferences Stefanie Molin has spoken at.',
              },
            ],
          }}
        />
        <div className="-mt-4 mb-20 max-w-5xl -mx-4 sm:mx-auto">
          <h1 className="text-5xl md:text-7xl mb-2 text-center">{pageTitle}</h1>

          <EvenlySpacedSections className="my-10">
            <div className="flex flex-col items-center">
              <FancyDivider className="w-1/2 mx-auto pb-5">
                <FontAwesomeIcon icon={faLightbulb} className="px-5" fixedWidth />
              </FancyDivider>
              <p className="md:text-justify text-lg lg:text-xl px-2 md:px-10">
                <b>Knowledge sharing is a passion of mine</b>. To date, I have delivered{' '}
                {presentationsGivenAlready} presentations at conferences around the world. On this
                page you will find {anchorLink('#photos', 'photos')} from past presentations, a{' '}
                {anchorLink('#event-map', 'map')} showing locations and dates of past events, some{' '}
                {anchorLink('#stats', 'statistics')} about these events, along with a note about{' '}
                {anchorLink('#origin-story', 'how I got started')} with these events. If you would
                like to <b>invite me to speak</b> at your event, please{' '}
                {
                  <Link href="/contact" className={classNames(linkClassName, 'font-bold')}>
                    get in touch
                  </Link>
                }
                .
              </p>
            </div>
            <PhotoGallery
              photos={CONFERENCE_IMAGES}
              shufflePhotos
              titleClassName={subsectionTitleClassName}
              promptClassName="text-center md:text-left"
            />
            <EventStatsSection
              sessions={presentations}
              includeYearsActive
              titleClassName={subsectionTitleClassName}
            />
            <EventMap
              introText={`To date, I have presented ${presentationsGivenAlready} times at conferences around
              the world. Click a ${MAP_PIN} on the map for more information.`}
              liveEvents={presentations}
              titleClassName={subsectionTitleClassName}
            />
            <div
              id="origin-story"
              className="sm:text-lg border-2 border-slate-100 rounded-lg px-4 bg-slate-50 shadow-lg xl:w-5/6 -mx-2 sm:mx-auto"
            >
              <p className={classNames('pt-10 px-2 sm:px-10', subsectionTitleClassName)}>
                My origin story
              </p>
              <div className="mt-5 px-2 sm:px-10 py-5 sm:text-justify space-y-4">
                <p>
                  I used to be TERRIFIED of public speaking. After writing my{' '}
                  <Link href={CONTENT_LINKS.PANDAS_BOOK_1.link} className={linkClassName}>
                    first book
                  </Link>
                  , I was approached with an opportunity to speak at a virtual conference in 2021. I
                  did want to conquer this fear, and the idea of it being virtual was a huge plus at
                  the time. That first event proved to be a pivotal moment that helped me gain
                  enough confidence to attempt an in-person event. It took several more
                  presentations before I truly got comfortable, though.
                </p>

                <img
                  src="/assets/events/conferences/conference-badges.jpg"
                  className="hidden sm:block sm:w-48 sm:h-48 rounded-full mx-auto z-10 object-cover"
                  alt="Signing a book at my first book signing event."
                />
                <p>
                  Now, I absolutely love it! I get to meet and help people from all over the world
                  by sharing my knowledge. I save each and every one of my conference speaker badges
                  &ndash; they are my trophies, and conquering this fear is one of the things I am
                  most proud of.
                </p>
                <p className="pb-5 text-right">
                  &ndash; <em>Stefanie</em>
                </p>
              </div>

              <br />
            </div>
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
