import TimelineContent from '@mui/lab/TimelineContent';
import classNames from 'classnames';

export interface TimelineLabelProps {
  label: string;
  className?: string;
}

const TimelineLabel = (props: TimelineLabelProps) => {
  const { label, className = 'text-3xl' } = props;
  return (
    <TimelineContent sx={{ py: '20px', px: 2, m: 'auto' }}>
      <h2 className={classNames('text-center', className)}>{label}</h2>
    </TimelineContent>
  );
};
export default TimelineLabel;
