import Link from 'next/link';
import classNames from 'classnames';
import { LIVE_PRESENTATIONS } from '../../data/events';
import { ConferencePresentation } from '../../interfaces/event';
import { getConferenceEventMapAnnotations } from '../../lib/events';
import InteractiveMap from '../maps/interactive-map';

export default function EventMap() {
  const locationToEvents = getConferenceEventMapAnnotations(LIVE_PRESENTATIONS);
  const tableClassName = 'border-b border-slate-600 px-2 text-base';
  return (
    <div>
      <p>Click a pin on the map to see the events I have participated in.</p>
      <InteractiveMap
        locations={locationToEvents}
        highlightedCountries={locationToEvents.map(({ country }) => country)}
        containerClassName="grid grid-row-2 gap-y-10 items-center mt-2"
        pushPinMapClassName="mx-auto w-full sm:w-5/6 md:w-2/3 lg:w-1/2"
        pushPinInfoClassName="flex flex-col items-center"
        getDisplayInfo={(pin: ConferencePresentation) => (
          <table className="mx-4 mb-4 text-sm lg:text-lg text-left table-auto w-full border-collapse">
            <caption className="caption-top">
              <small>Click on the titles to read more about them.</small>
            </caption>
            <thead>
              <tr>
                <th className={tableClassName}>Date</th>
                <th className={tableClassName}>Type</th>
                <th className={tableClassName}>Title</th>
                <th className={tableClassName}>Event</th>
              </tr>
            </thead>
            <tbody>
              {pin.annotation.map(({ event, date, presentation }) => (
                <tr
                  key={`${date}-${event.location.city}-${event.location.country}-${presentation.title}`}
                >
                  <td className={classNames(tableClassName, 'text-nowrap')}>{date}</td>
                  <td className={tableClassName}>{presentation.contentClass}</td>
                  <td className={tableClassName}>
                    <Link
                      href={{
                        pathname: presentation.link,
                      }}
                      className="text-slate-900 hover:underline hover:text-slate-600"
                    >
                      {presentation.contentClass === 'book signing' ? (
                        <em>{presentation.title}</em>
                      ) : (
                        <>{presentation.title}</>
                      )}
                    </Link>
                  </td>
                  <td
                    className={tableClassName}
                  >{`${event.name}${event.virtual ? ' (virtual)' : ''}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
    </div>
  );
}
