import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import SectionSeparator from '../../components/section-separator';
import ReviewsSection from '../../components/reviews/reviews-section';
import { getImageLink } from '../../lib/images';
import { WORKSHOP_PAGE_MAPPING } from '../../data/workshops';
import RelatedContentSection from '../../components/related-content';
import WorkshopOutline from '../../components/workshops/workshop-outline';
import WorkshopMap from '../../components/workshops/workshop-map';
import WorkshopHeader from '../../components/workshops/workshop-header';
import WorkshopSummary from '../../components/workshops/workshop-summary';

// TODO: potentially another one to encapsulate everything
// TODO: link to setup instructions and prereqs
// TODO: decide on whether to include event images or save for the other page
// TODO: read descriptions from READMEs in GitHub for consistency? this will hardly be updated so it can wait

export default function WorkshopPage({ workshopKey }: { workshopKey: string }) {
  const { workshop, reviews, relatedContent } = WORKSHOP_PAGE_MAPPING[workshopKey];

  const preview = false;
  const workshopCoverImage = workshop.coverImage;

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
          <WorkshopOutline workshop={workshop} />
          <SectionSeparator className="my-10" />
          <WorkshopMap workshop={workshop} />
          <SectionSeparator className="my-10" />
          {reviews != null ? (
            <>
              <ReviewsSection
                reviews={reviews}
                cardSize={reviews.map(({ text }) => text.length).some((x) => x > 150) ? 'sm' : 'xs'}
              />
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          <RelatedContentSection relatedContent={relatedContent} />
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
