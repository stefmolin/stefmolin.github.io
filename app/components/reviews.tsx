import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Review from '../interfaces/review';
import classNames from 'classnames';

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
}: ReviewsSectionProps) => (
  <div className={divClassName}>
    <h2 className={titleClassName ?? 'text-2xl mb-5'}>Reviews</h2>
    {reviews.map(({ author, text }) => (
      <blockquote key={author} className={classNames(reviewsClassName, 'pl-6')}>
        <FontAwesomeIcon icon={faQuoteLeft} className="pr-1" fixedWidth />
        {text}
        <FontAwesomeIcon icon={faQuoteRight} className="pr-1" fixedWidth /> - {author}
      </blockquote>
    ))}
  </div>
);

export default ReviewsSection;
