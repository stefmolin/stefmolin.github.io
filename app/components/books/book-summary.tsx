import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import type Book from '../../interfaces/book';
import ExternalLink from '../links/external-link';
import BookCover from './book-cover';
import MarkdownSection from '../sections/markdown-section';
import { useWindowSize } from '../../lib/hooks/window-size';
import classNames from 'classnames';

type BookSummaryProps = {
  book: Book;
};

const BookSummarySection = ({ book }: BookSummaryProps) => {
  const { width } = useWindowSize();
  const xsScreen = width && width < 375;
  return (
    <div className={classNames({ 'flex flex-col items-center w-full': xsScreen })}>
      <div
        className={classNames(
          { 'float-left mr-5': !xsScreen },
          'flex flex-col justify-center gap-y-2 w-40 sm:w-48 md:w-64',
        )}
      >
        <BookCover book={book} />
        <div className="flex flex-row items-center justify-center">
          <button className="px-2 py-1 bg-orange-400 hover:bg-orange-500 grow">
            <ExternalLink href={book.amazonLink} className="text-sm sm:text-base font-bold">
              <div className="flex flex-row items-center justify-center">
                <FontAwesomeIcon icon={faAmazon} className="pr-1" size="sm" />
                Buy on Amazon*
              </div>
            </ExternalLink>
          </button>
        </div>
        <small className="text-xs sm:text-sm sm:text-pretty -indent-1 pl-2">
          *As an Amazon Associate, I earn from qualifying purchases at no cost to you.
        </small>
      </div>
      <div className="sm:text-justify sm:text-pretty">
        <MarkdownSection>{book.description}</MarkdownSection>
      </div>
    </div>
  );
};

export default BookSummarySection;
