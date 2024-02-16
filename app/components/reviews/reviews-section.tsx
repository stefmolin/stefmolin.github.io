import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import type Review from '../../interfaces/review';
import ReviewCard from './review-card';

// TODO: add pagination here (~4 per page as default?)
// TODO: apply the markdown styles here too???

type ReviewsSectionProps = {
  reviews: Review[];
  titleClassName?: string;
  reviewsClassName?: string;
  divClassName?: string;
};

const ReviewsSection = ({
  reviews,
  titleClassName,
  reviewsClassName,
  divClassName,
}: ReviewsSectionProps) => {
  const responsive = {
    xl: {
      breakpoint: { max: Infinity, min: 1024 },
      items: 2,
    },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 1,
    // },
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
    <div className={divClassName}>
      <h2 className={titleClassName ?? 'text-3xl mb-5'}>Reviews</h2>
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
          <ReviewCard key={review.author} className={reviewsClassName} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsSection;
