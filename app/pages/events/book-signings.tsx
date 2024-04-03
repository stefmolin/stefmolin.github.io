import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { DateTime } from 'luxon';
import { type MysteryCardsProps } from '../../components/cards/mystery-cards';
import anchorLink, { linkClassName } from '../../components/events/event-anchor-link';
import EventPage from '../../components/events/event-page';
import ExternalLink from '../../components/links/external-link';
import Layout from '../../components/page-layout/layout';
import Container from '../../components/sections/container';
import { MAP_PIN } from '../../data/constants';
import CONTENT_LINKS from '../../data/content-links';
import { LIVE_PRESENTATIONS } from '../../data/events';
import { BOOK_SIGNING_IMAGES } from '../../data/photo-gallery';
import { getImageLink } from '../../lib/images';
import { getSeoImageLink } from '../../lib/seo';

const relatedContent = [
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BLOG,
];

// TODO: revisit the card color(s) once color palette is finalized

export default function BookSignings() {
  const seoImage = CONTENT_LINKS.BOOK_SIGNINGS.image;
  const pageTitle = 'Book Signings';
  const signings = LIVE_PRESENTATIONS.filter((x) => x.presentation.contentClass === 'book signing');
  const pastSignings = signings.filter(({ date }) => date < DateTime.now().toISODate()).length;

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
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description="Stefanie Molin's book signing events with maps, photos, and fun facts."
          openGraph={{
            images: [
              {
                url: getSeoImageLink(
                  getImageLink(seoImage.src),
                  'Boston',
                  'Book Signings',
                  "Stefanie Molin's book signing events.",
                ),
                alt: "Line from Stefanie Molin's first book signing.",
              },
            ],
          }}
        />
        <EventPage
          pageTitle={pageTitle}
          presentations={signings}
          images={BOOK_SIGNING_IMAGES}
          mapIntroText={`To date, I have done ${pastSignings} book signings at conferences around
          the world. Click a ${MAP_PIN} on the map for more information.`}
          relatedContent={relatedContent}
          funFacts={FUN_FACTS}
          header={
            <div className="flex flex-col items-center mt-10 md:mt-0">
              <img
                src="/assets/events/book-signings/first-book-signing.png"
                className="hidden md:block w-48 h-48 rounded-full mx-auto -mb-24 z-10 object-cover"
                alt="Signing a book at my first book signing event."
              />
              <div className="sm:text-lg border-2 border-slate-100 rounded-lg px-4 lg:w-2/3 bg-slate-50 shadow-lg">
                <p className="pt-10 px-2 sm:px-5 md:px-10">Dear reader,</p>
                <p className="mt-5 px-2 sm:px-5 md:px-10 py-5 md:text-justify">
                  Book signings have given me several memories that I will cherish forever. I love
                  hearing about everyone's journeys, providing (solicited) advice, and hearing from
                  readers. On this page you will find {anchorLink('#photos', 'photos')} from past
                  events, a {anchorLink('#event-map', 'map')} showing locations and dates of past
                  events, along with some {anchorLink('#fun-facts', 'fun facts')} about these
                  events. I hope to see <em>you</em> at a future event!
                </p>
                <p className="px-2 sm:px-5 md:px-10 pb-5 text-right">
                  &ndash; <em>Stefanie</em>
                </p>
                <br />
              </div>
            </div>
          }
        />
      </Container>
    </Layout>
  );
}
