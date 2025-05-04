import { type SeeAlso } from './related-content';
import type SEOImage from './seo-image';

export default interface Talk {
  contentClass: 'talk';
  subclass?: 'keynote' | 'lightning talk' | 'panel';
  title: string;
  subtitle?: string;
  coverImage?: SEOImage;
  duration: string;
  description: string[];
  slidesLink: string;
  link: string;
}

export interface TalkCard {
  talk: Talk;
  seeAlso: SeeAlso;
}
