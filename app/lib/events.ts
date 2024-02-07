import { LIVE_PRESENTATIONS } from '../data/events';
import LOCATIONS from '../data/locations';
import { type ConferencePresentation, Presentation, LivePresentation } from '../interfaces/event';

export function getLivePresentations(target?: Partial<Presentation>) {
  if (target == null) return LIVE_PRESENTATIONS;
  return LIVE_PRESENTATIONS.filter(
    ({ presentation }) =>
      (target.contentClass != null ? presentation.contentClass === target.contentClass : true) &&
      (target.title != null ? presentation.title === target.title : true),
  );
}

export function getConferenceEventMapAnnotations(liveSessions: LivePresentation[]) {
  const locationToEvents: ConferencePresentation[] = [];
  Object.values(LOCATIONS).forEach((location) => {
    let entry;
    liveSessions.forEach((session) => {
      if (session.event.location === location) {
        if (!entry) {
          entry = { ...location, annotation: [session] };
          locationToEvents.push(entry);
        } else entry.annotation.push(session);
      }
    });
  });
  return locationToEvents;
}
