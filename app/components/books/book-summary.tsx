import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type Book from '../../interfaces/book';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { EXTERNAL_LINK_PROPS } from '../../data/constants';
import BookPublicationDate from './book-publication-date';
import PageCount from './page-count';
import BookCover from './book-cover';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          <a href={book.amazonLink} className="font-bold" {...EXTERNAL_LINK_PROPS}>
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon icon={faAmazon} className="pr-1" size="sm" fixedWidth />
              Buy on Amazon*
            </div>
          </a>
        </button>
      </div>
      <small className="text-pretty -indent-1 pl-2">
        *As an Amazon Associate, I earn from qualifying purchases.
      </small>
    </div>
    <div className="space-y-4 min-h-48 md:min-h-64 lg:min-h-80">
      <div className="space-y-2 text-justify text-pretty">
        <Markdown remarkPlugins={[remarkGfm]}>{book.description}</Markdown>
      </div>
    </div>
  </div>
);

export default BookSummarySection;
