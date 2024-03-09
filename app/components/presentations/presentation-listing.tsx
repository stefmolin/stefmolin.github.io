import { NextSeo } from 'next-seo';
import { getLivePresentations } from '../../lib/events';
import { getImageLink } from '../../lib/images';
import Layout from '../page-layout/layout';
import Container from '../sections/container';
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
        <div className="-mt-6 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center">{pageTitle}</h1>
          <h2 className="text-lg md:text-xl py-2 text-center">{pageSubtitle}</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5 -mx-10 sm:-mx-5 lg:mx-auto">
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
