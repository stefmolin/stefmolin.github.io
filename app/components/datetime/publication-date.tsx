import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import DateFormatter from './date-formatter';

type Props = {
  date: string;
  relative?: boolean;
  long?: boolean;
};

const PublicationDate = ({ date, relative, long }: Props) => {
  return (
    <DateFormatter dateString={date} relative={relative} long={long}>
      <FontAwesomeIcon icon={faCalendar} className="pr-1" key={date} />
    </DateFormatter>
  );
};

export default PublicationDate;
