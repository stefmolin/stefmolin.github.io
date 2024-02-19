import type Book from '../../interfaces/book';
import PageSection, { type PageSectionProps } from '../sections/page-section';
import BookCover from './book-cover';
import BookPublicationDate from './book-publication-date';

interface BookTranslationsProps extends Omit<PageSectionProps, 'children'> {
  book: Book;
  translationsClassName?: string;
}

const BookTranslationsSection = ({
  book,
  titleClassName,
  translationsClassName,
  divClassName,
}: BookTranslationsProps) => {
  if (book.translations == null) return null;
  return (
    <PageSection divClassName={divClassName} title="Translations" titleClassName={titleClassName}>
      <div className={translationsClassName ?? 'flex flex-row space-x-10 items-center pl-6'}>
        {book.translations.map((translation) => (
          <div key={translation.language} className="flex flex-col items-center space-y-1">
            <h3 className="text-lg text-left">{translation.language}</h3>
            <BookCover book={book} translation={translation} className="w-40" />
            <BookPublicationDate publicationDate={translation.publicationDate} format="LLLL yyyy" />
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default BookTranslationsSection;
