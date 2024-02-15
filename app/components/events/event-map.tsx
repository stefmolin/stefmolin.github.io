import Link from 'next/link';
import classNames from 'classnames';
import { type ConferencePresentation, type LivePresentation } from '../../interfaces/event';
import { getConferenceEventMapAnnotations } from '../../lib/events';
import InteractiveMap from '../maps/interactive-map';
import CONTENT_LINKS from '../../data/content-links';
import PushPinClickPrompt from '../maps/push-pin-click-prompt';
import { EXTERNAL_LINK_PROPS } from '../../data/constants';

export default function EventMap({
  liveEvents,
  introText,
  excludeTypeColumn = false,
}: {
  liveEvents: LivePresentation[];
  introText: string;
  excludeTypeColumn?: boolean;
}) {
  const locationToEvents = getConferenceEventMapAnnotations(liveEvents);
  const linkClassName = 'text-slate-900 hover:underline hover:text-slate-600';
  const tableClassName = 'border-b border-slate-600 px-2 text-base';
  const contentClassLinks = {
    workshop: CONTENT_LINKS.WORKSHOPS.link,
    'book signing': CONTENT_LINKS.BOOK_SIGNINGS.link,
    talk: CONTENT_LINKS.TALKS.link,
  };
  return (
    <div>
      <p>{introText}</p>
      <InteractiveMap
        locations={locationToEvents}
        highlightedCountries={locationToEvents.map(({ country }) => country)}
        containerClassName="grid grid-row-2 gap-y-10 items-center mt-2"
        pushPinMapClassName="mx-auto w-full sm:w-5/6 md:w-2/3 lg:w-1/2"
        pushPinInfoClassName="flex flex-col items-center"
        getDisplayInfo={(pin: ConferencePresentation | undefined) => {
          if (pin == null) return <PushPinClickPrompt />;
          return (
            <table className="mx-4 mb-4 text-sm w-full xl:w-5/6 lg:text-lg text-left table-auto border-collapse">
              <caption className="caption-top">
                <small>Click on the titles to read more about them.</small>
              </caption>
              <thead>
                <tr>
                  <th className={tableClassName}>Date</th>
                  {excludeTypeColumn ? null : <th className={tableClassName}>Type</th>}
                  <th className={tableClassName}>Title</th>
                  <th className={tableClassName}>Event</th>
                </tr>
              </thead>
              <tbody>
                {[...pin.annotation].reverse().map(({ event, date, presentation }) => {
                  const eventName = `${event.name}${event.virtual ? ' (virtual)' : ''}`;
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
                            pathname: presentation.link,
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
                          <a href={event.link} className={linkClassName} {...EXTERNAL_LINK_PROPS}>
                            {eventName}
                          </a>
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
  );
}
