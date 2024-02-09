import type MapLocation from './map-location';
import { type AnnotatedLocation } from './map-location';

export type ConferenceLocation = AnnotatedLocation<string[]>;

export interface Event {
  // TODO: add a type (conference, meetup, etc.)
  name: string;
  location: MapLocation;
  virtual: boolean;
}
export interface Presentation {
  contentClass: 'book signing' | 'lightning talk' | 'talk' | 'workshop';
  title: string;
  link: string;
}
export interface LivePresentation {
  presentation: Presentation;
  event: Event;
  date: string;
}
export type ConferencePresentation = AnnotatedLocation<LivePresentation[]>;
