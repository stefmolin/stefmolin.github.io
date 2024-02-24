import { NextSeo } from 'next-seo';
import Container from '../../components/sections/container';
import Layout from '../../components/page-layout/layout';
import EvenlySpacedSections from '../../components/sections/evenly-spaced-sections';
import SectionSeparator from '../../components/dividers/section-separator';
import RelatedContentSection from '../../components/related-content/related-content';
import ReviewsSection from '../../components/reviews/reviews-section';
import { WORKSHOP_PAGE_MAPPING } from '../../data/workshops';
import { usePageURL } from '../../lib/hooks/page-url';
import { getImageLink } from '../../lib/images';
import WorkshopOutline from '../../components/workshops/workshop-outline';
import WorkshopMap from '../../components/workshops/workshop-map';
import WorkshopHeader from '../../components/workshops/workshop-header';
import WorkshopSummary from '../../components/workshops/workshop-summary';

// TODO: potentially another one to encapsulate everything
// TODO: link to setup instructions and prereqs
// TODO: read descriptions from READMEs in GitHub for consistency? this will hardly be updated so it can wait

export default function WorkshopPage({ workshopKey }: { workshopKey: string }) {
  const { workshop, reviews, relatedContent } = WORKSHOP_PAGE_MAPPING[workshopKey];

  const preview = false;
  const workshopCoverImage = workshop.coverImage;

  return (
    <Layout preview={preview}>
      <Container>
        <NextSeo
          title={workshop.title}
          description={workshop.subtitle}
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(workshopCoverImage.src),
                width: workshopCoverImage.width,
                height: workshopCoverImage.height,
                alt: workshop.title,
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <WorkshopHeader workshop={workshop} />
          <SectionSeparator className="my-3" />
          <WorkshopSummary workshop={workshop} />
          <SectionSeparator className="my-5" />
          <EvenlySpacedSections className="my-10">
            <WorkshopOutline workshop={workshop} />
            <WorkshopMap workshop={workshop} />
            {reviews != null ? (
              <ReviewsSection
                reviews={reviews}
                cardSize={reviews.map(({ text }) => text.length).some((x) => x > 150) ? 'sm' : 'xs'}
              />
            ) : null}
            <RelatedContentSection carouselClassName="pt-2" relatedContent={relatedContent} />
          </EvenlySpacedSections>
        </div>
      </Container>
    </Layout>
  );
}
type Params = {
  params: {
    workshop: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  return { props: { workshopKey: params.workshop } };
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(WORKSHOP_PAGE_MAPPING).map((workshop) => ({ params: { workshop } })),
    fallback: false,
  };
}
