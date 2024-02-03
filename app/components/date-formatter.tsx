import { ReactNode } from 'react';
import { DateTime } from 'luxon';

type Props = {
  dateString: string;
  relative?: boolean;
  format?: string | typeof DateTime.DATETIME_FULL;
  long?: boolean;
  children?: ReactNode[];
};

const DateFormatter = ({ dateString, relative, format, long, children }: Props) => {
  const date = DateTime.fromISO(dateString);
  return (
    <time dateTime={dateString}>
      {children}
      {date > DateTime.now().minus({ days: 2 }) && relative
        ? date.toRelative()
        : typeof format === 'string'
          ? date.toFormat(format)
          : date.toLocaleString(format ?? long ? DateTime.DATETIME_FULL : DateTime.DATE_FULL)}
    </time>
  );
};

export default DateFormatter;
