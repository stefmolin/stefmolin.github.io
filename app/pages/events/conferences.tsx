import { NextSeo } from 'next-seo';
import _ from 'lodash';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import SectionSeparator from '../../components/section-separator';
import EventMap from '../../components/events/event-map';
import CONTENT_LINKS from '../../data/content-links';
import { getImageLink } from '../../lib/images';
import { LIVE_PRESENTATIONS } from '../../data/events';
import type RelatedContentLink from '../../interfaces/related-content';
import RelatedContentSection from '../../components/related-content';
import EventStatsGrid from '../../components/events/event-stats-grid';
import CollapsibleSection from '../../components/collapsible-section';
import { CONFERENCE_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.BOOK_SIGNINGS,
  CONTENT_LINKS.TALKS,
];

// TODO: add CTA to invite me to speak (could link to /contact)

export default function Conferences() {
  const preview = false;
  const seoImage = CONTENT_LINKS.CONFERENCES.image;
  const pageTitle = 'Conferences';
  const presentations = LIVE_PRESENTATIONS.filter(
    (x) => x.presentation.contentClass !== 'book signing',
  );
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <PhotoGallery photos={CONFERENCE_IMAGES} title={null} shufflePhotos />
          <SectionSeparator className="my-10" />
          <div className="space-y-5">
            <h2 className="text-3xl">Event statistics</h2>
            <p>Click blue text for more information.</p>
            <EventStatsGrid sessions={presentations} includeYearsActive />
            <CollapsibleSection prompt="Yearly breakdown">
              <EventStatsGrid sessions={presentations} yearlyCountsOnly />
            </CollapsibleSection>
          </div>
          <SectionSeparator className="my-10" />
          <div className="space-y-5">
            <h2 className="text-3xl">Event map</h2>
            <EventMap
              introText={`To date, I have presented ${presentations.length} times at conferences around
              the world. Click a pin on the map for more information.`}
              liveEvents={presentations}
            />
          </div>
          <SectionSeparator className="my-10" />
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
