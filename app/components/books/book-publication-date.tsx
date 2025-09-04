import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateFormatter from '../datetime/date-formatter';

type BookPublicationDateProps = {
  publicationDate: string;
  format?: string;
};

const BookPublicationDate = ({ publicationDate, format }: BookPublicationDateProps) => (
  <DateFormatter
    dateString={publicationDate}
    format={format}
    children={[<FontAwesomeIcon icon={faCalendar} className="pr-1" key={publicationDate} />]}
  />
);
export default BookPublicationDate;
