import CarouselSection from '../sections/carousel-section';
import PageSection, { type PageSectionProps } from '../sections/page-section';
import ReviewCard, { type ReviewCardProps } from './review-card';

interface ReviewsSectionProps extends Omit<PageSectionProps, 'children'> {
  reviews: ReviewCardProps['review'][];
  cardSize: ReviewCardProps['cardSize'];
  reviewsClassName?: string;
}

const ReviewsSection = ({
  reviews,
  cardSize,
  titleClassName,
  reviewsClassName,
  divClassName,
}: ReviewsSectionProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: Infinity, min: 1024 },
      items: Math.min(2, reviews.length),
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <PageSection
      id="reviews"
      divClassName={divClassName}
      title="Reviews"
      titleClassName={titleClassName}
    >
      <CarouselSection autoPlaySpeed={5_000} responsive={responsive} carouselClassName="-mx-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.author}
            className={reviewsClassName}
            review={review}
            cardSize={cardSize}
          />
        ))}
      </CarouselSection>
    </PageSection>
  );
};

export default ReviewsSection;
