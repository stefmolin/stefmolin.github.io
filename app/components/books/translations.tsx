import type Book from '../../interfaces/book';
import BookCover from './book-cover';
import BookPublicationDate from './book-publication-date';

type BookTranslationsProps = {
  book: Book;
  titleClassName?: string;
  translationsClassName?: string;
  divClassName?: string;
};

const BookTranslationsSection = ({
  book,
  titleClassName,
  translationsClassName,
  divClassName,
}: BookTranslationsProps) => {
  if (book.translations == null) return null;
  return (
    <div className={divClassName}>
      <h2 className={titleClassName ?? 'text-3xl mb-5'}>Translations</h2>
      <div className={translationsClassName ?? 'flex flex-row space-x-10 items-center pl-6'}>
        {book.translations.map((translation) => (
          <div key={translation.language} className="flex flex-col items-center space-y-1">
            <h3 className="text-lg text-left">{translation.language}</h3>
            <BookCover book={book} translation={translation} className="w-40" />
            <BookPublicationDate publicationDate={translation.publicationDate} format="LLLL yyyy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTranslationsSection;
