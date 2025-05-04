import type RelatedContentLink from './related-content';
import type Review from './review';
import type Talk from './talk';

export default interface Workshop
  extends Required<Omit<Talk, 'slidesLink' | 'contentClass' | 'subclass'>> {
  contentClass: 'workshop';
  outline: Record<string, string>;
  repo: string;
}

export interface WorkshopPage {
  workshop: Workshop;
  reviews?: Review[];
  relatedContent: RelatedContentLink[];
}
