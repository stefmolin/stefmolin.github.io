import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { EXTERNAL_LINK_PROPS } from '../../data/constants';
import type Review from '../../interfaces/review';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export default function ReviewCard({ review, className }: ReviewCardProps) {
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

  const { author, source, text } = review;
  const showArrow = showMore && !atBottom;

  return (
    <div className="flex flex-row items-start justify-between p-8 shadow mx-5 mb-12 h-80">
      <FontAwesomeIcon icon={faQuoteLeft} size="xl" fixedWidth />
      <div className={classNames(className, 'pl-4 mb-3')}>
        <div
          ref={reviewTextRef}
          className={classNames(
            'space-y-3 text-pretty pr-4',
            'h-56 overflow-y-auto',
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
          )}
          onScroll={handleScroll}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </div>
        <FontAwesomeIcon
          className={classNames('float-right relative bottom-2 -right-5', {
            visible: showArrow,
            invisible: !showArrow,
          })}
          icon={faCaretDown}
          size="sm"
          bounce
          fixedWidth
        />
        <div className="text-bold text-right py-2 text-pretty">
          &mdash;{' '}
          {source != null ? (
            <a href={source} {...EXTERNAL_LINK_PROPS} className="text-slate-600 hover:underline">
              {author}
            </a>
          ) : (
            author
          )}
        </div>
      </div>
      <FontAwesomeIcon icon={faQuoteRight} size="xl" fixedWidth />
    </div>
  );
}
