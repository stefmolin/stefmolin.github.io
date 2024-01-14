import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

type Props = {
  duration: number;
};

const TimeToRead = ({ duration }: Props) => {
  return (
    <>
      <FontAwesomeIcon icon={faClock} /> {duration}
    </>
  );
};

export default TimeToRead;
