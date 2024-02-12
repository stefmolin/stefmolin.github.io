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
import type RelatedContentLink from '../../interfaces/related-content';
import RelatedContentSection from '../../components/related-content';
import { BOOK_SIGNING_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.CONFERENCES,
  CONTENT_LINKS.BLOG,
];

export default function BookSignings() {
  const preview = false;
  const pageTitle = 'Book Signings';
  const signings = LIVE_PRESENTATIONS.filter((x) => x.presentation.contentClass === 'book signing');
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="A list of Stefanie Molin's book signing events."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(CONTENT_LINKS.BOOK_SIGNINGS.image),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: "Line from Stefanie Molin's first book signing.",
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <PhotoGallery photos={BOOK_SIGNING_IMAGES} title={null} shufflePhotos />
          <SectionSeparator className="my-10" />
          <div className="space-y-5">
            <h2 className="text-3xl">Event map</h2>
            <EventMap
              introText={`To date, I have done ${signings.length} book signings at conferences around
              the world. Click a pin on the map for more information.`}
              liveEvents={signings}
              excludeTypeColumn
            />
          </div>
          <SectionSeparator className="my-10" />
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
