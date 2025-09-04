import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import range from 'lodash/range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faCaretDown,
  faStar,
  faTrophy,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import FancyDivider from '../dividers/fancy-divider';
import reviewStyles from '../../styles/review-styles.module.css';
import MarkdownSection from '../sections/markdown-section';
import type Review from '../../interfaces/review';
import ExternalLink from '../links/external-link';

export interface ReviewCardProps {
  review: Review;
  cardSize: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ReviewCard({ review, cardSize, className }: ReviewCardProps) {
  const reviewTextRef = useRef<HTMLDivElement | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = (element) => {
    const position = element.target.scrollHeight - element.target.scrollTop;
    setAtBottom(position === element.target.clientHeight);
  };

  useEffect(() => {
    if (reviewTextRef.current === null) setShowMore(false);
    else setShowMore(reviewTextRef.current.offsetHeight < reviewTextRef.current.scrollHeight);
  }, [showMore]);

  const { author, rating, source, text } = review;

  const iconClassName = 'text-lg md:text-xl';

  return (
    <div
      className={classNames(
        'flex flex-col items-start justify-center sm:justify-start',
        'px-6 py-4 sm:p-8',
        'mx-2 sm:mx-5 mt-4 mb-12',
        'shadow-xs',
        {
          'h-40': cardSize === 'xs',
          'h-64': cardSize === 'sm',
          'h-80': cardSize === 'md',
          'h-96': cardSize === 'lg',
        },
      )}
    >
      <div className="w-full flex flex-row">
        <div className="hidden sm:flex">
          <FontAwesomeIcon icon={faQuoteLeft} className={iconClassName} />
        </div>
        <div className={classNames(className, 'sm:pl-4')}>
          <div
            ref={reviewTextRef}
            className={classNames(
              'pr-4',
              'overflow-y-auto overscroll-contain',
              '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
              {
                'max-h-20': cardSize === 'xs',
                'max-h-36': cardSize === 'sm',
                'max-h-52': cardSize === 'md',
                'max-h-64': cardSize === 'lg',
              },
              reviewStyles['review'],
            )}
            onScroll={handleScroll}
          >
            <MarkdownSection className={reviewStyles['review']}>{text}</MarkdownSection>
          </div>
          <FontAwesomeIcon
            className={classNames('float-right relative bottom-2 -right-2 sm:-right-5', {
              visible: showMore,
              invisible: !showMore,
            })}
            icon={atBottom ? faCaretUp : faCaretDown}
            size="sm"
            bounce
          />
        </div>
        <div className="grow hidden sm:flex justify-end">
          <FontAwesomeIcon icon={faQuoteRight} className={iconClassName} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-pretty text-center -mt-2">
        <FancyDivider className="my-2 sm:px-8">
          <div
            className={classNames('flex flex-row items-center justify-center px-5', {
              'text-yellow-400': rating != null,
            })}
          >
            {rating ? (
              range(rating).map((star) => <FontAwesomeIcon key={star} icon={faStar} size="xs" />)
            ) : (
              <FontAwesomeIcon icon={faTrophy} size="xs" />
            )}
          </div>
        </FancyDivider>
        <div className="md:text-lg line-clamp-2">
          {source != null ? (
            <ExternalLink href={source} className="text-slate-600 hover:underline">
              {author}
            </ExternalLink>
          ) : (
            author
          )}
        </div>
      </div>
    </div>
  );
}
