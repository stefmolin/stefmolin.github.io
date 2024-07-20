import classNames from 'classnames';
import { DateTime } from 'luxon';
import Link from 'next/link';
import FollowButtons from '../../components/follow';
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
        useIfEmpty: (
          <div
            className={classNames(
              'text-center text-slate-500',
              'sm:w-5/6 md:w-3/4 lg:w-1/2',
              'border-2 rounded-lg',
              'mx-2 sm:m-auto',
              'p-5',
            )}
          >
            <h2 className="text-2xl my-5">Nothing scheduled at the moment.</h2>
            <h3 className="text-lg mb-2">
              I'm taking some time to recharge my batteries. Check back soon or{' '}
              <Link
                href="/contact"
                className="font-bold underline decoration-yellow-400 text-slate-700 hover:text-black"
              >
                invite me to your event or podcast
              </Link>
              .
            </h3>
            <FollowButtons
              className="text-xl md:text-2xl px-1 sm:px-5"
              withDivider
              dividerClassName="pt-5 py-0 sm:py-5"
            />
          </div>
        ),
      }}
    />
  );
}
