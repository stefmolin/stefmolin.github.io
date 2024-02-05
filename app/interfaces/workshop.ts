import ConferencePresentation from './conference-presentation';
import RelatedContentLink from './related-content';
import type Review from './review';

export default interface Workshop {
  title: string;
  subtitle: string;
  coverImage: string;
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
  pastSessions: ConferencePresentation[];
}
