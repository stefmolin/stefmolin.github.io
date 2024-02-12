import type RelatedContentLink from './related-content';
import type Review from './review';
import type SEOImage from './seoImage';

export default interface Workshop {
  title: string;
  subtitle: string;
  coverImage: SEOImage;
  duration: string;
  description: string[];
  outline: Record<string, string>;
  repo: string;
  slidesLink: string;
}
// TODO: probably want to add an outline? reviews? images?

export interface WorkshopPage {
  workshop: Workshop;
  reviews?: Review[];
  relatedContent: RelatedContentLink[];
}
