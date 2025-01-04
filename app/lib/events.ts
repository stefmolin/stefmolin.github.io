import { LIVE_PRESENTATIONS } from '../data/events';
import LOCATIONS from '../data/locations';
import {
  type ConferencePresentation,
  type Presentation,
  type LivePresentation,
} from '../interfaces/event';

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

export function getContentClassCounts(liveSessions: LivePresentation[]): {
  [key in Presentation['contentClass']]?: number;
} {
  // count keynotes as talks for now
  const keynoteToTalk = (x: Presentation['contentClass']) => (x === 'keynote' ? 'talk' : x);

  return liveSessions.reduce(
    (accum, session) => ({
      ...accum,
      [keynoteToTalk(session.presentation.contentClass)]:
        (accum[keynoteToTalk(session.presentation.contentClass)] || 0) + 1,
    }),
    {},
  );
}

export function getYearCounts(liveSessions: LivePresentation[]): Record<number, number> {
  return liveSessions.reduce((accum, session) => {
    const year = parseInt(session.date.slice(0, 4));
    return {
      ...accum,
      [year]: (accum[year] || 0) + 1,
    };
  }, {});
}

export function getCountryCounts(liveSessions: LivePresentation[]): Record<string, number> {
  return liveSessions.reduce(
    (accum, session) => ({
      ...accum,
      [session.event.location.country]: (accum[session.event.location.country] || 0) + 1,
    }),
    {},
  );
}

export function getCityCounts(liveSessions: LivePresentation[]): Record<string, number> {
  return liveSessions.reduce((accum, session) => {
    const city = `${session.event.location.city}, ${session.event.location.country}`;
    return {
      ...accum,
      [city]: (accum[city] || 0) + 1,
    };
  }, {});
}
export function getConferenceCounts(liveSessions: LivePresentation[]): Record<string, number> {
  return liveSessions.reduce(
    (accum, session) => ({
      ...accum,
      [session.event.name]: (accum[session.event.name] || 0) + 1,
    }),
    {},
  );
}
