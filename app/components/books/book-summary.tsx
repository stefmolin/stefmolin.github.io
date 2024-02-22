import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import type Book from '../../interfaces/book';
import ExternalLink from '../links/external-link';
import BookCover from './book-cover';
import MarkdownSection from '../sections/markdown-section';

type BookSummaryProps = {
  book: Book;
  divClassName?: string;
};

const BookSummarySection = ({ book, divClassName }: BookSummaryProps) => (
  <div className={divClassName}>
    <div className="float-left mr-5 flex flex-col justify-center space-y-2 w-48 md:w-64">
      <BookCover book={book} />
      <div className="flex flex-row items-center justify-center">
        <button className="px-2 py-1 bg-orange-400 hover:bg-orange-500 grow">
          <ExternalLink href={book.amazonLink} className="font-bold">
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon icon={faAmazon} className="pr-1" size="sm" fixedWidth />
              Buy on Amazon*
            </div>
          </ExternalLink>
        </button>
      </div>
      <small className="text-pretty -indent-1 pl-2">
        *As an Amazon Associate, I earn from qualifying purchases at no cost to you.
      </small>
    </div>
    <div className="space-y-4 min-h-48 md:min-h-64 lg:min-h-80">
      <div className="space-y-2 text-justify text-pretty">
        <MarkdownSection>{book.description}</MarkdownSection>
      </div>
    </div>
  </div>
);

export default BookSummarySection;
