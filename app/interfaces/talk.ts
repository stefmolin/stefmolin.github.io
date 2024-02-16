import { type SeeAlso } from './related-content';
import type SEOImage from './seo-image';

export default interface Talk {
  title: string;
  subtitle?: string;
  coverImage: SEOImage;
  duration: string;
  description: string[];
  repo?: string;
  slidesLink: string;
}

export interface TalkCard {
  talk: Talk;
  seeAlso: SeeAlso;
}
