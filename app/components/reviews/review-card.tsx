import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
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

  return (
    <div
      className={classNames(
        'flex flex-row items-start justify-between p-8 shadow-sm mx-5 mt-4 mb-12',
        {
          'h-40': cardSize === 'xs',
          'h-64': cardSize === 'sm',
          'h-80': cardSize === 'md',
          'h-96': cardSize === 'lg',
        },
      )}
    >
      <FontAwesomeIcon icon={faQuoteLeft} size="xl" fixedWidth />
      <div className={classNames(className, 'pl-4 mb-3')}>
        <div
          ref={reviewTextRef}
          className={classNames(
            'pr-4',
            'overflow-y-auto overscroll-contain',
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
            {
              'max-h-24': cardSize === 'xs',
              'max-h-40': cardSize === 'sm',
              'max-h-56': cardSize === 'md',
              'max-h-72': cardSize === 'lg',
            },
            reviewStyles['review'],
          )}
          onScroll={handleScroll}
        >
          <MarkdownSection className={reviewStyles['review']}>{text}</MarkdownSection>
        </div>
        <FontAwesomeIcon
          className={classNames('float-right relative bottom-2 -right-5', {
            visible: showMore,
            invisible: !showMore,
          })}
          icon={atBottom ? faCaretUp : faCaretDown}
          size="sm"
          bounce
          fixedWidth
        />
        <div className="flex flex-col items-center justify-center text-pretty text-center">
          <FancyDivider className="my-2">
            <div
              className={classNames('flex flex-row items-center justify-center px-5', {
                'text-yellow-400': rating != null,
              })}
            >
              {rating ? (
                _.range(rating).map(() => <FontAwesomeIcon icon={faStar} size="xs" fixedWidth />)
              ) : (
                <FontAwesomeIcon icon={faTrophy} size="xs" fixedWidth />
              )}
            </div>
          </FancyDivider>
          <div>
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
      <FontAwesomeIcon icon={faQuoteRight} size="xl" fixedWidth />
    </div>
  );
}
