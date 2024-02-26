import Link from 'next/link';
import classNames from 'classnames';
import { type ConferencePresentation, type LivePresentation } from '../../interfaces/event';
import { getConferenceEventMapAnnotations } from '../../lib/events';
import InteractiveMap from '../maps/interactive-map';
import CONTENT_LINKS from '../../data/content-links';
import PushPinClickPrompt from '../maps/push-pin-click-prompt';
import ExternalLink from '../links/external-link';
import PageSection from '../sections/page-section';

export default function EventMap({
  liveEvents,
  introText,
  titleClassName,
  excludeTypeColumn = false,
}: {
  liveEvents: LivePresentation[];
  introText: string;
  titleClassName?: string;
  excludeTypeColumn?: boolean;
}) {
  const locationToEvents = getConferenceEventMapAnnotations(liveEvents);
  const linkClassName = 'text-slate-900 hover:underline hover:text-slate-600';
  const tableHeaderClassName = 'border-b border-slate-600 px-2 text-base';
  const tableClassName = 'border-b px-2 text-base';
  const contentClassLinks = {
    workshop: CONTENT_LINKS.WORKSHOPS.link,
    'book signing': CONTENT_LINKS.BOOK_SIGNINGS.link,
    talk: CONTENT_LINKS.TALKS.link,
  };
  return (
    <PageSection
      id="event-map"
      divClassName="space-y-5"
      title="Event map 🗺️"
      titleClassName={titleClassName}
    >
      <div>
        <p>{introText}</p>
        <InteractiveMap
          locations={locationToEvents}
          highlightedCountries={locationToEvents.map(({ country }) => country)}
          containerClassName="grid grid-row-2 gap-y-10 items-center mt-2"
          pushPinMapClassName="mx-auto w-full sm:w-5/6 md:w-2/3 lg:w-1/2"
          pushPinInfoClassName="flex flex-col items-center lg:px-6 xl:px-0"
          getDisplayInfo={(pin: ConferencePresentation | undefined) => {
            if (pin == null) return <PushPinClickPrompt />;
            return (
              <table
                className={classNames(
                  'mx-4 mb-4',
                  'w-full xl:w-5/6',
                  'text-sm lg:text-lg text-left',
                  'table-auto border-collapse',
                )}
              >
                <caption className="caption-top">
                  <small>Click on the titles to read more about them.</small>
                </caption>
                <thead>
                  <tr>
                    <th className={tableHeaderClassName}>Date</th>
                    {excludeTypeColumn ? null : <th className={tableHeaderClassName}>Type</th>}
                    <th className={tableHeaderClassName}>Title</th>
                    <th className={tableHeaderClassName}>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {[...pin.annotation].reverse().map(({ event, date, presentation }) => {
                    const eventName = `${event.name}${event.virtual ? ' (virtual)' : ''}`;
                    const [pathname, hash] = presentation.link.split('#');
                    return (
                      <tr
                        key={`${date}-${event.location.city}-${event.location.country}-${presentation.title}`}
                      >
                        <td className={classNames(tableClassName, 'text-nowrap')}>{date}</td>
                        {excludeTypeColumn ? null : (
                          <td className={tableClassName}>
                            <Link
                              href={{
                                pathname: contentClassLinks[presentation.contentClass],
                              }}
                              className={linkClassName}
                            >
                              {presentation.contentClass}
                            </Link>
                          </td>
                        )}
                        <td className={tableClassName}>
                          <Link
                            href={{
                              pathname,
                              hash,
                            }}
                            className={linkClassName}
                          >
                            {presentation.contentClass === 'book signing' ? (
                              <em>{presentation.title}</em>
                            ) : (
                              presentation.title
                            )}
                          </Link>
                        </td>
                        <td className={tableClassName}>
                          {event.link != null ? (
                            <ExternalLink href={event.link} className={linkClassName}>
                              {eventName}
                            </ExternalLink>
                          ) : (
                            eventName
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          }}
        />
      </div>
    </PageSection>
  );
}
