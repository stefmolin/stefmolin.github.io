import { DateTime } from "luxon";

type Props = {
  dateString: string;
  relative?: boolean;
  long?: boolean;
};

const DateFormatter = ({ dateString, relative, long }: Props) => {
  const date = DateTime.fromISO(dateString);
  return (
    <time dateTime={dateString}>
      {date > DateTime.now().minus({ days: 2 }) && relative
        ? date.toRelative()
        : date.toLocaleString(
            long ? DateTime.DATETIME_FULL : DateTime.DATE_FULL
          )}
    </time>
  );
};

export default DateFormatter;
