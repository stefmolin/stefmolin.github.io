import type Book from '../interfaces/book';

export const generateBookPageTitle = (book: Book, translationLanguage?: string) => {
  const translationString = translationLanguage ? `${translationLanguage} translation of ` : '';
  return `${translationString}${book.title}${book.edition ? ` (${book.edition} edition)` : ''}`;
};

export const generateBookPageLink = (book: Book) =>
  generateBookPageTitle(book)
    .replaceAll(' ', '-')
    .replaceAll(/[\(\)]/g, '');

export const generateBookCoverAltText = (book: Book, translationLanguage?: string) =>
  `Cover image ${translationLanguage ? 'for the' : 'of'} ${generateBookPageTitle(book, translationLanguage)}`;
