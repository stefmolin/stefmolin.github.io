import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

type Props = {
  dateString: string;
  relative?: boolean;
  format?: string | typeof DateTime.DATETIME_FULL;
  long?: boolean;
  children?: React.ReactNode | React.ReactNode[];
};

const DateFormatter = ({ dateString, relative, format, long, children }: Props) => {
  const date = DateTime.fromISO(dateString);
  const [displayDate, setDisplayDate] = useState(dateString);
  useEffect(() => {
    if (date > DateTime.now().minus({ days: 2 }) && relative)
      setDisplayDate(date.toRelative() ?? dateString);
    else if (typeof format === 'string') setDisplayDate(date.toFormat(format));
    else
      setDisplayDate(
        date.toLocaleString(format ?? long ? DateTime.DATETIME_FULL : DateTime.DATE_FULL),
      );
  });
  return (
    <time dateTime={dateString}>
      {children}
      {displayDate}
    </time>
  );
};

export default DateFormatter;
