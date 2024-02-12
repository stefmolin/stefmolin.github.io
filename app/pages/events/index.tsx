import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import SectionSeparator from '../../components/section-separator';
import EventMap from '../../components/events/event-map';
import CONTENT_LINKS from '../../data/content-links';
import { getImageLink } from '../../lib/images';
import { LIVE_PRESENTATIONS } from '../../data/events';
import RelatedContentLink from '../../interfaces/related-content';
import RelatedContentSection from '../../components/related-content';
import EventStatsGrid from '../../components/events/event-stats-grid';
import { EVENT_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BOOK_SIGNINGS,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.BLOG,
];

// TODO: add CTA to invite me to speak (could link to /contact)
// TODO: incorporate the non-conference, non-signing events?

export default function Index() {
  const preview = false;
  const pageTitle = 'Events';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="" // TODO
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(CONTENT_LINKS.EVENTS.image),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: '', // TODO
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <PhotoGallery photos={EVENT_IMAGES} title={null} shufflePhotos />
          <SectionSeparator className="my-10" />
          <div>
            <h2 className="text-3xl mb-5">Event statistics</h2>
            <p className="mb-5">Click blue text for more information.</p>
            <EventStatsGrid sessions={LIVE_PRESENTATIONS} />
          </div>
          <SectionSeparator className="my-10" />
          <div className="space-y-5">
            <h2 className="text-3xl">Event map</h2>
            <EventMap
              introText="Click a pin on the map to see the events I have participated in."
              liveEvents={LIVE_PRESENTATIONS}
            />
          </div>
          <SectionSeparator className="my-10" />
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
