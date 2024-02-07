import type Book from './book';
import { type TranslatedBook } from './book';
import type FAQ from './faq';
import type RelatedContentLink from './related-content';
import type Review from './review';

export default interface BookPage {
  book: Book;
  reviews?: Review[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}
