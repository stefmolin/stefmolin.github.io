import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { DateTime } from 'luxon';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks/page-url';
import EventMap from '../../components/events/event-map';
import CONTENT_LINKS from '../../data/content-links';
import { getImageLink } from '../../lib/images';
import { LIVE_PRESENTATIONS } from '../../data/events';
import type RelatedContentLink from '../../interfaces/related-content';
import RelatedContentSection from '../../components/related-content/related-content';
import { BOOK_SIGNING_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';
import { MAP_PIN } from '../../data/constants';
import MysteryCards, { type MysteryCardsProps } from '../../components/cards/mystery-cards';
import EvenlySpacedSections from '../../components/sections/evenly-spaced-sections';
import ExternalLink from '../../components/links/external-link';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BLOG,
];

// TODO: revisit the card color(s) once color palette is finalized

export default function BookSignings() {
  const preview = false;
  const seoImage = CONTENT_LINKS.BOOK_SIGNINGS.image;
  const pageTitle = 'Book Signings';
  const signings = LIVE_PRESENTATIONS.filter((x) => x.presentation.contentClass === 'book signing');
  const pastSignings = signings.filter(({ date }) => date < DateTime.now().toISODate()).length;
  const linkClassName = 'text-slate-700 hover:text-slate-500 underline';
  const anchorLink = (fragment: string, text: string | React.ReactNode) => (
    <Link href={fragment} className={linkClassName}>
      {text}
    </Link>
  );
  const FUN_FACTS: MysteryCardsProps['cards'] = [
    <>
      At my first signing,{' '}
      <ExternalLink href="https://www.kennethjee.com/" className={linkClassName}>
        Ken Jee
      </ExternalLink>
      , who wrote the foreword for my book,{' '}
      <Link href={CONTENT_LINKS.PANDAS_BOOK_2.link} className={linkClassName}>
        <em>Hands-On Data Analysis with Pandas (2nd edition)</em>
      </Link>
      , signed a single copy along with me.
    </>,
    'I personalize each book that I sign based on what the recipient talks to me about.',
    <>
      I find Sharpies hard to sign with. My pen of choice is the{' '}
      <ExternalLink href="https://amzn.to/3ONUrE7" className={linkClassName}>
        0.8mm uni-ball Vision Elite
      </ExternalLink>{' '}
      (any color).
    </>,
  ];
  return (
    <Layout preview={preview}>
      <Container>
        <NextSeo
          title={pageTitle}
          description="Stefanie Molin's book signing events."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: "Line from Stefanie Molin's first book signing.",
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-2 text-center">{pageTitle}</h1>
          <EvenlySpacedSections className="my-10">
            <div className="flex flex-col items-center mt-10 md:mt-0">
              <img
                src="/assets/events/book-signings/first-book-signing.png"
                className="w-20 h-20 md:w-48 md:h-48 rounded-full ml-auto mr-5 md:mx-auto -mb-24 z-10 object-cover"
                alt="Signing a book at my first book signing event."
              />
              <div className="text-lg border-2 border-slate-100 rounded-lg px-4 lg:w-2/3 bg-slate-50 shadow-lg">
                <p className="pt-10 px-5 md:px-10">Dear reader,</p>
                <p className="mt-5 px-5 md:px-10 py-5 md:text-justify">
                  Book signings have given me several memories that I will cherish forever. I love
                  hearing about everyone's journeys, providing (solicited) advice, and hearing from
                  readers. On this page you will find {anchorLink('#photos', 'photos')} from past
                  events, a {anchorLink('#event-map', 'map')} showing locations and dates of past
                  events, along with some {anchorLink('#fun-facts', 'fun facts')} about these
                  events. I hope to see <em>you</em> at a future event!
                </p>
                <p className="px-5 md:px-10 pb-5 text-right">
                  &ndash; <em>Stefanie</em>
                </p>
                <br />
              </div>
            </div>
            <PhotoGallery photos={BOOK_SIGNING_IMAGES} shufflePhotos />
            <EventMap
              introText={`To date, I have done ${pastSignings} book signings at conferences around
              the world. Click a ${MAP_PIN} on the map for more information.`}
              liveEvents={signings}
              excludeTypeColumn
            />
            <div id="fun-facts">
              <h2 className="text-3xl mb-5">Fun facts</h2>
              <p className="mb-5">
                Hover over each of the cards to reveal a fun fact about my book signing events.
              </p>
              <MysteryCards cards={FUN_FACTS} color={'bg-orange-100'} />
            </div>
            <RelatedContentSection carouselClassName="pt-2" relatedContent={relatedContent} />
          </EvenlySpacedSections>
        </div>
      </Container>
    </Layout>
  );
}
