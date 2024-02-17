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
import { EVENT_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';
import EventStatsSection from '../../components/events/event-stats-section';
import { MAP_PIN } from '../../data/constants';

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
  const seoImage = CONTENT_LINKS.EVENTS.image;
  const pageTitle = 'Events';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <SectionSeparator className="my-10" />
          <PhotoGallery photos={EVENT_IMAGES} title="Photo gallery 📷" shufflePhotos />
          <SectionSeparator className="my-10" />
          <EventStatsSection sessions={LIVE_PRESENTATIONS} />
          <SectionSeparator className="my-10" />
          <EventMap
            introText={`Click a ${MAP_PIN} on the map to see the events I have participated in around the world.`}
            liveEvents={LIVE_PRESENTATIONS}
          />
          <SectionSeparator className="my-10" />
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
