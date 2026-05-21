import type { JSX } from 'react';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faBook,
  faCalendarDay,
  faCode,
  faExternalLink,
  faGraduationCap,
  faHandHoldingHeart,
  faHourglassEnd,
  faLocationDot,
  faMicrophoneLines,
  faPersonChalkboard,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import ResourceLink, { type ResourceLinkProps } from '../links/resource-link';
import TimelinePoint from './timeline-point';

const TIMELINE_EVENT_ICONS: Record<string, [IconDefinition, string]> = {
  award: [faStar, 'bg-yellow-400 border-yellow-400 text-slate-600'],
  book: [faBook, 'bg-violet-300 border-violet-300 text-gray-700'],
  code: [faCode, 'bg-slate-700 border-slate-700 text-white'],
  education: [faGraduationCap, 'bg-emerald-300 border-emerald-300 text-gray-700'],
  interview: [faMicrophoneLines, 'bg-orange-200 border-orange-200 text-gray-700'],
  presentation: [faPersonChalkboard, 'bg-blue-400 border-blue-400 text-white'],
  volunteer: [faHandHoldingHeart, 'bg-red-400 border-red-400 text-white'],
};

export interface TimelineEntryProps {
  /* Date (ISO) of the entry (start if it lasts more than a day) */
  date: string;

  /* The type of event (used to determine the icon) */
  eventType: keyof typeof TIMELINE_EVENT_ICONS;

  /* Number of hours dedicated to this item */
  duration?: number;

  /* The title for the timeline entry */
  title: string | JSX.Element; // TODO: rather than JSX option here, use Markdown? (depends on input data)

  /* Optional description for the entry */
  description?: string | JSX.Element; // TODO: rather than JSX option here, use Markdown? (depends on input data)

  /* Whether to flip the entry to the other side of the timeline */
  flip?: boolean;

  /* Optional link to include in the timeline entry */
  link?: Omit<ResourceLinkProps, 'children'> & { text: string };

  /* The time of the entry (if applicable) */
  time?: string; // TODO: can this be a datetime string in ISO format (will need to refactor other uses of the datetime of the event to ignore the time parts)

  /* Where the timeline entry took place (if applicable) */
  where?: string;
}

const TimelineEntry = (props: TimelineEntryProps) => {
  const { date, time, where, eventType, title, description, link, flip, duration } = props;

  const iconSpanClassName = 'hidden md:inline';

  const [icon, pointClassName] = TIMELINE_EVENT_ICONS[eventType];

  const flipIndexFirst = flip ? 1 : 0;
  const flipIndexSecond = Math.abs(flipIndexFirst - 1);

  const assembleLine = (lineInfo: (string | JSX.Element)[]) => (
    <p className="text-xs sm:text-sm md:text-base">
      {lineInfo[flipIndexFirst]} {lineInfo[flipIndexSecond]}
    </p>
  );

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" className="text-gray-500">
        <div>
          {assembleLine([
            <span className={iconSpanClassName}>
              <FontAwesomeIcon icon={faCalendarDay} />
            </span>,
            DateTime.fromISO(date).toFormat('LLL d (EEE)'),
          ])}
          {time &&
            assembleLine([
              <span className={iconSpanClassName}>
                <FontAwesomeIcon icon={faClock} />
              </span>,
              DateTime.fromISO(`${date}T${time}`).toFormat('h:mm a ZZZZ'),
            ])}
          {where &&
            assembleLine([
              <span className={iconSpanClassName}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>,
              where,
            ])}
          {eventType === 'volunteer' &&
            duration != null &&
            duration > 0 &&
            assembleLine([
              <span className={iconSpanClassName}>
                <FontAwesomeIcon icon={faHourglassEnd} />
              </span>,
              `${duration} hours`,
            ])}
          {link &&
            assembleLine([
              <span className={iconSpanClassName}>
                <FontAwesomeIcon
                  icon={
                    typeof link.resourceLink === 'string' &&
                    link.resourceLink.includes('github.com')
                      ? faGithub
                      : faExternalLink
                  }
                />
              </span>,
              <ResourceLink
                className="underline md:no-underline md:hover:underline hover:text-slate-500"
                {...link}
              >
                {link.text}
              </ResourceLink>,
            ])}
        </div>
      </TimelineOppositeContent>
      <TimelinePoint icon={icon} className={pointClassName} />
      <TimelineContent sx={{ py: '30px', m: 'auto' }}>
        <p>
          <span className="text-base sm:text-lg md:text-xl">{title}</span>
          {description ? (
            <>
              <br />
              <span className="italic text-sm md:text-base">{description}</span>
            </>
          ) : null}
        </p>
      </TimelineContent>
    </TimelineItem>
  );
};
export default TimelineEntry;
