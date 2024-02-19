import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard, { type ReviewCardProps } from './review-card';
import PageSection, { type PageSectionProps } from '../sections/page-section';

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
      items: 2,
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
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={false}
        autoPlay={true}
        autoPlaySpeed={5_000}
        keyBoardControl={true}
        transitionDuration={500}
        arrows={false}
        rewind={true}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.author}
            className={reviewsClassName}
            review={review}
            cardSize={cardSize}
          />
        ))}
      </Carousel>
    </PageSection>
  );
};

export default ReviewsSection;
