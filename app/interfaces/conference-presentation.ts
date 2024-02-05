import type Location from './location';

export default interface ConferencePresentation extends Location {
  coordinates: number[];
  city: string;
  country: string;
  conferences: string[];
}
