import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import classNames from 'classnames';

const TimelinePoint = (props: { className: string; icon: IconDefinition }) => {
  const { className, icon } = props;
  return (
    <TimelineSeparator>
      <TimelineConnector />
      <FontAwesomeIcon
        icon={icon}
        fixedWidth
        className={classNames('px-1 py-1.5 border-2 rounded-full my-2', className)}
      />
      <TimelineConnector />
    </TimelineSeparator>
  );
};
export default TimelinePoint;
