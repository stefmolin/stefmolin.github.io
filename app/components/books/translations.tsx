import type Book from '../../interfaces/book';
import { useWindowSize } from '../../lib/hooks/window-size';
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
  const { width } = useWindowSize();
  return (
    <PageSection divClassName={divClassName} title="Translations" titleClassName={titleClassName}>
      <div
        className={
          translationsClassName ??
          'flex flex-row w-full items-center justify-evenly sm:justify-start sm:space-x-10 sm:pl-6 text-sm sm:text-base'
        }
      >
        {book.translations.map((translation) => (
          <div key={translation.language} className="flex flex-col items-center space-y-1">
            <h3 className="text-lg text-left">{translation.language}</h3>
            <BookCover book={book} translation={translation} className="w-28 sm:w-40" />
            <BookPublicationDate
              publicationDate={translation.publicationDate}
              format={`LLL${width && width > 350 ? 'L' : ''} yyyy`}
            />
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default BookTranslationsSection;
