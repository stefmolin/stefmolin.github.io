import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type Props = {
  duration: string;
};

const DurationIndicator = ({ duration }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-1">
      <FontAwesomeIcon icon={faClock} fixedWidth />
      <span>{duration}</span>
    </div>
  );
};

export default DurationIndicator;
