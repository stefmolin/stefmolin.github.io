import classNames from 'classnames';
import { NextSeo } from 'next-seo';
import Container from '../../components/sections/container';
import Layout from '../../components/page-layout/layout';
import EvenlySpacedSections from '../../components/sections/evenly-spaced-sections';
import SectionSeparator from '../../components/dividers/section-separator';
import RelatedContentSection from '../../components/related-content/related-content';
import ReviewsSection from '../../components/reviews/reviews-section';
import { WORKSHOP_PAGE_MAPPING } from '../../data/workshops';
import { getImageLink } from '../../lib/images';
import WorkshopOutline from '../../components/workshops/workshop-outline';
import WorkshopMap from '../../components/workshops/workshop-map';
import WorkshopHeader from '../../components/workshops/workshop-header';
import WorkshopSummary from '../../components/workshops/workshop-summary';

// TODO: link to setup instructions and prereqs
// TODO: read descriptions from READMEs in GitHub for consistency? this will hardly be updated so it can wait

export default function WorkshopPage({ workshopKey }: { workshopKey: string }) {
  const { workshop, reviews, relatedContent } = WORKSHOP_PAGE_MAPPING[workshopKey];
  const workshopCoverImage = workshop.coverImage;

  const sectionHeaderClassName = 'text-2xl sm:text-3xl md:text-4xl mb-5 text-center sm:text-left';
  const separatorClassName = '-mx-2 sm:mx-auto';

  return (
    <Layout>
      <Container>
        <NextSeo
          title={workshop.title}
          description={workshop.subtitle}
          openGraph={{
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
        <div className="mb-20 max-w-5xl mx-auto">
          <WorkshopHeader workshop={workshop} />
          <SectionSeparator className={classNames('my-3', separatorClassName)} />
          <WorkshopSummary workshop={workshop} />
          <SectionSeparator className={classNames('my-5', separatorClassName)} />
          <EvenlySpacedSections className={classNames('my-10', separatorClassName)}>
            <WorkshopOutline workshop={workshop} />
            <WorkshopMap workshop={workshop} />
            {reviews != null ? (
              <ReviewsSection
                reviews={reviews}
                cardSize={reviews.map(({ text }) => text.length).some((x) => x > 150) ? 'sm' : 'xs'}
                titleClassName={sectionHeaderClassName}
              />
            ) : null}
            <RelatedContentSection
              relatedContent={relatedContent}
              titleClassName={sectionHeaderClassName}
            />
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
