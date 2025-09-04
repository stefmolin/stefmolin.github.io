import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export interface DurationIndicatorProps {
  duration: string;
}

const DurationIndicator = ({ duration }: DurationIndicatorProps) => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <FontAwesomeIcon icon={faClock} />
      <span>{duration}</span>
    </div>
  );
};

export default DurationIndicator;
