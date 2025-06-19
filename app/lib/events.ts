import { DateTime } from 'luxon';
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
  return liveSessions.reduce(
    (accum, session) => ({
      ...accum,
      [session.presentation.contentClass]: (accum[session.presentation.contentClass] || 0) + 1,
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

export function getEventsPerCountry(liveSessions: LivePresentation[], asString: true): string;
export function getEventsPerCountry(
  liveSessions: LivePresentation[],
  asString: false,
): Record<string, string[]>;
export function getEventsPerCountry(
  liveSessions: LivePresentation[],
  asString: boolean,
): Record<string, string[]> | string {
  const counts: Record<string, string[]> = liveSessions.reduce((accum, { date, event }) => {
    const eventLocation = event.virtual
      ? 'virtual'
      : event.location?.countryAlias || event.location?.country || 'TBA';
    const info = `${event.name} on ${DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT)}`;
    return {
      ...accum,
      [eventLocation]: accum[eventLocation] ? [...accum[eventLocation], info] : [info],
    };
  }, {});
  return asString
    ? Object.entries(counts)
        .map(([country, dates]) => `${country} (${dates.join(', ')})`)
        .join(', ')
    : counts;
}
