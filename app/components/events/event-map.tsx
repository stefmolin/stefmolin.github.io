import classNames from 'classnames';
import Link from 'next/link';
import CONTENT_LINKS from '../../data/content-links';
import { type ConferencePresentation, type LivePresentation } from '../../interfaces/event';
import { getConferenceEventMapAnnotations } from '../../lib/events';
import { useWindowSize } from '../../lib/hooks/window-size';
import ExternalLink from '../links/external-link';
import InteractiveMap from '../maps/interactive-map';
import PushPinClickPrompt from '../maps/push-pin-click-prompt';
import PageSection from '../sections/page-section';

export default function EventMap({
  liveEvents,
  introText,
  titleClassName,
  excludeTypeColumn = false,
}: {
  liveEvents: LivePresentation[];
  introText: string | React.ReactNode;
  titleClassName?: string;
  excludeTypeColumn?: boolean;
}) {
  const { width } = useWindowSize();
  const xsScreen = width && width < 464;
  const noDateColumn = width && width < 350;
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
      divClassName="space-y-5 -mx-2 sm:mx-auto"
      title="Event map 🗺️"
      titleClassName={titleClassName}
    >
      <div>
        <p className="text-center md:text-left">{introText}</p>
        <InteractiveMap
          locations={locationToEvents}
          highlightedCountries={locationToEvents.map(({ country }) => country)}
          containerClassName="grid grid-row-2 gap-y-10 items-center mt-2"
          pushPinMapClassName="mx-auto w-full md:w-5/6 lg:w-2/3"
          pushPinInfoClassName="flex flex-col items-center px-2 sm:px-0 lg:px-6 xl:px-0"
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
                    {noDateColumn ? null : <th className={tableHeaderClassName}>Date</th>}
                    {excludeTypeColumn || xsScreen ? null : (
                      <th className={tableHeaderClassName}>Type</th>
                    )}
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
                        {noDateColumn ? null : (
                          <td className={classNames(tableClassName, 'text-nowrap')}>{date}</td>
                        )}
                        {excludeTypeColumn || xsScreen ? null : (
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
                          {noDateColumn && <> {date.slice(0, 4)}</>}
                          {xsScreen && !excludeTypeColumn ? (
                            <>
                              {' '}
                              <Link
                                href={{
                                  pathname: contentClassLinks[presentation.contentClass],
                                }}
                                className={linkClassName}
                              >
                                {presentation.contentClass}
                              </Link>
                            </>
                          ) : null}
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
