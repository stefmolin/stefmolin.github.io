import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Review from '../interfaces/review';
import classNames from 'classnames';
import { EXTERNAL_LINK_PROPS } from '../data/constants';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <div className="space-y-4">
      {reviews.map(({ author, text, source }) => (
        <blockquote key={author} className={classNames(reviewsClassName, 'px-12 text-pretty')}>
          {/* <div className="flex flex-row items-baseline"> */}
          {/* <FontAwesomeIcon icon={faQuoteLeft} className="pr-1" fixedWidth /> */}
          <Markdown className="py-2 space-y-2" remarkPlugins={[remarkGfm]}>
            {`"${text}"`}
          </Markdown>
          {/* </div> */}
          {/* <FontAwesomeIcon icon={faQuoteRight} className="pr-1" fixedWidth /> */}{' '}
          <p className="text-bold text-right -mt-2 text-nowrap">
            &mdash;{' '}
            {source != null ? (
              <a href={source} {...EXTERNAL_LINK_PROPS} className="text-slate-600 hover:underline">
                {author}
              </a>
            ) : (
              author
            )}
          </p>
        </blockquote>
      ))}
    </div>
  </div>
);

export default ReviewsSection;
