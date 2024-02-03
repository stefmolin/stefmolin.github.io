import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type TranslatedBook } from '../../interfaces/book';
import DateFormatter from '../date-formatter';
import BookPublicationDate from './book-publication-date';

type BookTranslationsProps = {
  translations: TranslatedBook[];
  titleClassName?: string;
  translationsClassName?: string;
  divClassName?: string;
};

const BookTranslationsSection = ({
  translations,
  titleClassName,
  translationsClassName,
  divClassName,
}: BookTranslationsProps) => (
  <div className={divClassName}>
    <h2 className={titleClassName ?? 'text-2xl mb-5'}>Translations</h2>
    <div className={translationsClassName ?? 'flex flex-row space-x-10 items-center pl-6'}>
      {translations.map(({ publicationDate, coverImage, language }) => (
        <div key={language} className="flex flex-col items-center space-y-1">
          <h3 className="text-lg text-left">{language}</h3>
          <img src={coverImage} alt={`${language} edition`} className="w-40" />
          <BookPublicationDate publicationDate={publicationDate} format="LLLL yyyy" />
        </div>
      ))}
    </div>
  </div>
);

export default BookTranslationsSection;
