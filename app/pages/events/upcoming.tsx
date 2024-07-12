import { DateTime } from 'luxon';
import Link from 'next/link';
import EventTimeline from '../../components/timeline/event-timeline';
import CONTENT_LINKS from '../../data/content-links';
import TIMELINE_ITEMS from '../../data/timeline';

export default function UpcomingEventsTimeline() {
  const pageTitle = 'Upcoming Events';
  return (
    <EventTimeline
      seoTitle={pageTitle}
      description={
        'This page provides a complete listing of all upcoming events Stefanie Molin will be ' +
        'participating in, such as conference talks, podcasts, and book signings, presented in ' +
        'chronological order.'
      }
      pageHeader={
        <div className="text-center mb-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">{pageTitle}</h1>
          <p className="pt-5">
            <em>
              Click{' '}
              <Link className="underline hover:text-slate-500" href={CONTENT_LINKS.TIMELINE.link}>
                here
              </Link>{' '}
              to see past events.
            </em>
          </p>
        </div>
      }
      eventFilter={(item, today) => DateTime.fromISO(item.date) >= today}
      timelineProps={{
        timelineItems: TIMELINE_ITEMS,
        ascending: true,
        footerLabels: [{ label: 'More to come ✨' }],
      }}
    />
  );
}
