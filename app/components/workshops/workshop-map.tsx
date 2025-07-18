import { DateTime } from 'luxon';
import { type ConferencePresentation } from '../../interfaces/event';
import type Workshop from '../../interfaces/workshop';
import { getLivePresentations, getConferenceEventMapAnnotations } from '../../lib/events';
import { useCompletedSessions, useNextSessions } from '../../lib/hooks/date-filtered-sessions';
import InteractiveMap from '../maps/interactive-map';
import PushPinClickPrompt from '../maps/push-pin-click-prompt';
import PageSection from '../sections/page-section';

export default function WorkshopMap({ workshop }: { workshop: Workshop }) {
  const allSessions = getLivePresentations({
    contentClass: 'workshop',
    title: workshop.title,
  });
  const locationToEvents = getConferenceEventMapAnnotations(allSessions);
  const pastSessions = useCompletedSessions(allSessions).length;
  const futureSessions = useNextSessions(allSessions, true);
  const countText = pastSessions
    ? `I have presented this workshop ${pastSessions === 1 ? 'once' : `${pastSessions} times at conferences around the world`}.`
    : 'This is a new workshop, and I have yet to present it.';
  const upcomingEventText = futureSessions
    .map(({ date, event }) => {
      const eventCountry = event.location?.countryAlias || event.location?.country || 'TBA';
      const eventCity = event.virtual ? 'virtual' : event.location?.city || 'TBA';
      const fullEventLocation = event.virtual ? 'virtual' : `${eventCity}, ${eventCountry}`;
      const eventDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT);
      return (
        `${event.name} ` +
        `(${event.name.includes(eventCountry) ? eventCity : fullEventLocation} on ${eventDate})`
      );
    })
    .join(', ');
  const upcomingText = futureSessions.length
    ? ` There ${futureSessions.length === 1 ? 'is' : 'are'} ${futureSessions.length} upcoming ` +
      `session${futureSessions.length === 1 ? '' : 's'} currently scheduled: ${upcomingEventText}.`
    : '';
  return (
    <PageSection
      id="workshop-map"
      title="Live sessions"
      titleClassName="text-2xl sm:text-3xl md:text-4xl mb-5 text-center sm:text-left"
    >
      <p className="md:text-lg">
        {countText}
        {upcomingText} Click a location on the map to see the conference(s) I have presented{' '}
        {upcomingText ? 'or will present ' : ''}this workshop at.
      </p>
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
    </PageSection>
  );
}
