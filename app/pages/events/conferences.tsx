import { NextSeo } from 'next-seo';
import _ from 'lodash';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks/page-url';
import SectionSeparator from '../../components/dividers/section-separator';
import EventMap from '../../components/events/event-map';
import CONTENT_LINKS from '../../data/content-links';
import { getImageLink } from '../../lib/images';
import { LIVE_PRESENTATIONS } from '../../data/events';
import type RelatedContentLink from '../../interfaces/related-content';
import RelatedContentSection from '../../components/related-content/related-content';
import { CONFERENCE_IMAGES } from '../../data/photo-gallery';
import PhotoGallery from '../../components/photo-gallery';
import EventStatsSection from '../../components/events/event-stats-section';
import { MAP_PIN } from '../../data/constants';

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
    <Layout preview={preview}>
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
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <PhotoGallery photos={CONFERENCE_IMAGES} title={null} shufflePhotos />
          <SectionSeparator className="my-10" />
          <EventStatsSection sessions={presentations} includeYearsActive />
          <SectionSeparator className="my-10" />
          <EventMap
            introText={`To date, I have presented ${presentations.length} times at conferences around
              the world. Click a ${MAP_PIN} on the map for more information.`}
            liveEvents={presentations}
          />
          <SectionSeparator className="my-10" />
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
