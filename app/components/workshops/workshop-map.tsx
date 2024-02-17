import { MAP_PIN } from '../../data/constants';
import { type ConferencePresentation } from '../../interfaces/event';
import type Workshop from '../../interfaces/workshop';
import { getLivePresentations, getConferenceEventMapAnnotations } from '../../lib/events';
import InteractiveMap from '../maps/interactive-map';
import PushPinClickPrompt from '../maps/push-pin-click-prompt';

export default function WorkshopMap({ workshop }: { workshop: Workshop }) {
  const pastSessions = getLivePresentations({
    contentClass: 'workshop',
    title: workshop.title,
  });
  const locationToEvents = getConferenceEventMapAnnotations(pastSessions);
  return (
    <div>
      <h2 className="text-3xl mb-5">Past sessions</h2>
      <p>Click a {MAP_PIN} on the map to see the conferences I have presented this workshop at.</p>
      <InteractiveMap
        locations={locationToEvents}
        highlightedCountries={locationToEvents.map(({ country }) => country)}
        containerClassName="grid lg:grid-cols-3 mt-2 md:mx-10 gap-x-10 gap-y-10 items-center"
        pushPinMapClassName="lg:col-span-2"
        pushPinInfoClassName="flex flex-col items-center"
        getDisplayInfo={(pin: ConferencePresentation | undefined) => {
          if (pin == null) return <PushPinClickPrompt />;
          return (
            <ul className="mx-4 text-sm lg:text-lg text-center">
              {pin.annotation.map(({ event, date, presentation }) => (
                <li
                  key={`${date}-${presentation.title}`}
                >{`${event.name} ${date.slice(0, 4)}${event.virtual ? ' (virtual)' : ''}`}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
}
