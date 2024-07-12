import Timeline, { type TimelineProps } from '@mui/lab/Timeline';
import TimelineEntry, { type TimelineEntryProps } from './timeline-entry';
import TimelineLabel, { type TimelineLabelProps } from './timeline-label';

type OuterLabel = TimelineLabelProps | TimelineLabelProps[];

export interface VerticalTimelineProps {
  timelineItems: TimelineEntryProps[];
  ascending?: boolean;
  footerLabels?: OuterLabel;
  headerLabels?: OuterLabel;
  position?: TimelineProps['position'];
}

const VerticalTimeline = ({
  timelineItems,
  footerLabels,
  headerLabels,
  ascending = false,
  position = 'alternate',
}: VerticalTimelineProps) => {
  const shouldFlip = ['alternate', 'alternate-reverse'].includes(position);

  const flipCheck = (index: number) => {
    if (!shouldFlip) return false;
    const isEven = index % 2 === 0;
    return position === 'alternate' ? isEven : !isEven;
  };

  const processedItems: React.ReactNode[] = [];
  let currentYear;
  timelineItems
    .sort((a, b) => {
      const sign = ascending ? -1 : 1;
      return (a.date > b.date ? -1 : 1) * sign;
    })
    .forEach((item, index) => {
      const year = parseInt(item.date.slice(0, 4));
      if (!currentYear || year !== currentYear) {
        if (currentYear && Math.abs(year - currentYear) > 1)
          processedItems.push(<TimelineLabel key={`gap-${currentYear}`} label="..." />);
        processedItems.push(<TimelineLabel key={year} label={year.toString()} />);
        currentYear = year;
      }
      processedItems.push(
        <TimelineEntry
          key={`entry-${item.title}-${item.description}`}
          {...item}
          flip={flipCheck(index)}
        />,
      );
    });

  const processLabels = (labels: OuterLabel) =>
    (Array.isArray(labels) ? labels : [labels]).map((labelProps) => (
      <TimelineLabel key={labelProps.label} {...labelProps} />
    ));

  return (
    <>
      <Timeline position={position}>
        {headerLabels && processLabels(headerLabels)}
        {processedItems}
        {footerLabels && processLabels(footerLabels)}
      </Timeline>
    </>
  );
};
export default VerticalTimeline;
