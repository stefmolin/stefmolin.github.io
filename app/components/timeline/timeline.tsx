import Timeline, { type TimelineProps } from '@mui/lab/Timeline';
import { Info } from 'luxon';
import TimelineEntry, { type TimelineEntryProps } from './timeline-entry';
import TimelineLabel, { type TimelineLabelProps } from './timeline-label';

type OuterLabel = TimelineLabelProps | TimelineLabelProps[];

export interface VerticalTimelineProps {
  timelineItems: TimelineEntryProps[];
  ascending?: boolean;
  footerLabels?: OuterLabel;
  headerLabels?: OuterLabel;
  position?: TimelineProps['position'];
  showTimeSections?: 'year' | 'month';
  useIfEmpty?: React.ReactNode;
}

const VerticalTimeline = ({
  timelineItems,
  footerLabels,
  headerLabels,
  showTimeSections,
  useIfEmpty,
  ascending = false,
  position = 'alternate-reverse',
}: VerticalTimelineProps) => {
  const shouldFlip = ['alternate', 'alternate-reverse'].includes(position);

  const flipCheck = (index: number) => {
    if (position === 'right') return true;
    if (!shouldFlip) return false;
    const isEven = index % 2 === 0;
    return position === 'alternate' ? isEven : !isEven;
  };

  const gapLabel = (key: string) => <TimelineLabel key={`gap-${key}`} label="..." />;

  const processedItems: React.ReactNode[] = [];
  let currentYear;
  let currentMonth;
  timelineItems
    .sort((a, b) => {
      const sign = ascending ? -1 : 1;
      return (a.date > b.date ? -1 : 1) * sign;
    })
    .forEach((item, index) => {
      if (showTimeSections) {
        const year = parseInt(item.date.slice(0, 4));
        if (showTimeSections === 'year') {
          if (!currentYear || year !== currentYear) {
            if (currentYear && Math.abs(year - currentYear) > 1)
              processedItems.push(gapLabel(currentYear));

            processedItems.push(<TimelineLabel key={year} label={year.toString()} />);
          }
        } else {
          const month = parseInt(item.date.slice(5, 7));
          if (!currentMonth || month !== currentMonth || year !== currentYear) {
            if (
              (currentMonth && Math.abs(month - currentMonth) > 1) ||
              (month === currentMonth && year !== currentYear)
            )
              processedItems.push(gapLabel(currentMonth));

            const label = `${Info.months('long')[month - 1]} ${year}`;
            processedItems.push(<TimelineLabel key={label} label={label} />);
            currentMonth = month;
          }
        }
        currentYear = year;
      }
      processedItems.push(
        <TimelineEntry
          key={`entry-${item.date}-${item.title}-${item.description}`}
          {...item}
          flip={flipCheck(index)}
        />,
      );
    });

  const processLabels = (labels: OuterLabel) =>
    (Array.isArray(labels) ? labels : [labels]).map((labelProps) => (
      <TimelineLabel key={labelProps.label} {...labelProps} />
    ));

  return processedItems.length === 0 && useIfEmpty != null ? (
    <>{useIfEmpty}</>
  ) : (
    <Timeline position={position}>
      {headerLabels && processLabels(headerLabels)}
      {processedItems}
      {footerLabels && processLabels(footerLabels)}
    </Timeline>
  );
};
export default VerticalTimeline;
