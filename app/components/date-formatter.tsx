import { DateTime } from "luxon";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = DateTime.fromISO(dateString);
  return (
    <time dateTime={dateString}>
      {date > DateTime.now().minus({ days: 2 })
        ? date.toRelative()
        : date.toLocaleString(DateTime.DATETIME_FULL)}
    </time>
  );
};

export default DateFormatter;
