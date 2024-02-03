import { faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type Book from '../../interfaces/book';
import DateFormatter from '../date-formatter';
import { faAmazon, faGithub } from '@fortawesome/free-brands-svg-icons';
import { EXTERNAL_LINK_PROPS } from '../../lib/constants';
import BookPublicationDate from './book-publication-date';
import PageCount from './page-count';

type BookSummaryProps = {
  book: Book;
  coverImageAltText: string;
  divClassName?: string;
};

const BookSummarySection = ({ book, coverImageAltText, divClassName }: BookSummaryProps) => (
  <div className={divClassName}>
    <div className="float-left mr-5 flex flex-col justify-center space-y-2 w-48 md:w-64">
      <img src={book.coverImage} alt={coverImageAltText} />
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
      <div className="flex flex-row items-center space-x-4">
        <PageCount pageCount={book.pageCount} />

        <div className="flex flex-row items-center">
          <BookPublicationDate publicationDate={book.publicationDate} />
        </div>

        <div className="flex flex-row items-center">
          <a href={book.repoLink} {...EXTERNAL_LINK_PROPS} className="hover:underline">
            <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
            View repository
          </a>
        </div>
      </div>
      <div className="space-y-2 text-justify text-pretty">{book.description}</div>
    </div>
  </div>
);

export default BookSummarySection;
