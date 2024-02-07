import type Book from '../../interfaces/book';
import { type TranslatedBook } from '../../interfaces/book';
import { generateBookCoverAltText, generateBookPageTitle } from '../../lib/books';

type BookCoverProps = {
  book: Book;
  translation?: TranslatedBook;
  className?: string;
};

const BookCover = ({ book, translation, className }: BookCoverProps) => {
  return (
    <img
      key={generateBookPageTitle(book, translation?.language)}
      src={translation?.coverImage || book.coverImage}
      alt={generateBookCoverAltText(book, translation?.language)}
      className={className}
    />
  );
};

export default BookCover;
