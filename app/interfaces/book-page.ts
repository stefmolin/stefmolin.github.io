import Book, { type TranslatedBook } from './book';
import FAQ from './faq';
import RelatedContentLink from './related-content';
import type Review from './review';

export default interface BookPage {
  book: Book;
  reviews?: Review[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}
