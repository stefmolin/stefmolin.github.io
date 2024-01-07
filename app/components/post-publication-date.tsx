import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DateFormatter from "./date-formatter";

type Props = {
  date: string;
  relative?: boolean;
  long?: boolean;
};

const PostPublicationDate = ({ date, relative, long }: Props) => {
  return (
    <>
      <FontAwesomeIcon icon={faCalendar} />{" "}
      <DateFormatter dateString={date} relative={relative} long={long} />
    </>
  );
};

export default PostPublicationDate;
