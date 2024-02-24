import { NextSeo } from 'next-seo';
import CONTENT_LINKS from '../../data/content-links';
import { getLivePresentations } from '../../lib/events';
import { usePageURL } from '../../lib/hooks/page-url';
import { getImageLink } from '../../lib/images';
import Layout from '../page-layout/layout';
import Container from '../sections/container';
import PresentationPreview from './presentation-preview';
import type SEOImage from '../../interfaces/seo-image';
import { type TalkCard } from '../../interfaces/talk';
import { type WorkshopPage } from '../../interfaces/workshop';

interface PresentationListingProps {
  contentClass: 'talk' | 'workshop';
  description: string;
  generatePreview: (presentation: TalkCard | WorkshopPage) => React.ReactNode;
  pages: (TalkCard | WorkshopPage)[];
  pageTitle: string;
  pageSubtitle: string;
  seoImage: SEOImage;
  seoImageAltTextFallback?: string;
}

export default function PresentationListing({
  contentClass,
  description,
  generatePreview,
  pages,
  pageTitle,
  pageSubtitle,
  seoImage,
  seoImageAltTextFallback,
}: PresentationListingProps) {
  const pastSessions = getLivePresentations({ contentClass })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map(({ presentation }) => presentation.title);
  return (
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description={description}
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: seoImage.alt ?? seoImageAltTextFallback ?? pageTitle,
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          <h2 className="text-xl py-2">{pageSubtitle}</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5">
            {pages
              .sort((a, b) => {
                const presentationA = a[contentClass];
                const presentationB = b[contentClass];
                return (
                  pastSessions.indexOf(presentationA.title) -
                  pastSessions.indexOf(presentationB.title)
                );
              })
              .map(generatePreview)}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
