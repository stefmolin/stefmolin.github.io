import type MapLocation from './map-location';
import { type AnnotatedLocation } from './map-location';

export type ConferenceLocation = AnnotatedLocation<string[]>;

export interface Event {
  name: string;
  location: MapLocation;
  virtual: boolean;
  eventClass: 'conference' | 'meetup' | 'podcast';
}
export interface Presentation {
  contentClass: 'book signing' | 'keynote' | 'podcast' | 'sprint' | 'talk' | 'workshop';
  title: string;
  link: string;
}
export interface LivePresentation {
  presentation: Presentation;
  event: Event & { link?: string };
  date: string;
}
export interface LivePodcast {
  presentation: Presentation;
  event: Omit<Event, 'location'> & { location?: MapLocation };
  date: string;
  time: string;
}

export type ConferencePresentation = AnnotatedLocation<LivePresentation[]>;
