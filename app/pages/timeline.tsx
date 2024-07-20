import { DateTime } from 'luxon';
import Link from 'next/link';
import EventTimeline from '../components/timeline/event-timeline';
import CONTENT_LINKS from '../data/content-links';
import TIMELINE_ITEMS from '../data/timeline';

export default function MyTimeline() {
  return (
    <EventTimeline
      seoTitle="Timeline"
      description={
        "Events, pivotal moments, and achievements that have shaped Stefanie Molin's journey as a " +
        'technologist and content creator, displayed chronologically in a timeline.'
      }
      pageHeader={
        <div className="text-center mb-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5">My Timeline</h1>
          <div className="max-w-3xl m-auto">
            <p className="text-lg md:text-xl p-2 mb-5">
              A chronological listing of events, pivotal moments, and achievements that have shaped
              my journey as a technologist and content creator.
            </p>
            <hr />
          </div>
          <p className="pt-5">
            <em>
              Click{' '}
              <Link
                className="underline hover:text-slate-500"
                href={CONTENT_LINKS.UPCOMING_EVENTS.link}
              >
                here
              </Link>{' '}
              to see upcoming events.
            </em>
          </p>
        </div>
      }
      eventFilter={(item, today) => DateTime.fromISO(item.date) < today}
      timelineProps={{
        timelineItems: TIMELINE_ITEMS,
        footerLabels: [{ label: '...' }, { label: 'A star is born ✨' }],
        showTimeSections: 'year',
      }}
    />
  );
}
