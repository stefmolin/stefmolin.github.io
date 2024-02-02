import type Book from '../interfaces/book';

export const generateBookPageTitle = (book: Book) =>
  `${book.title}${book.edition ? ` (${book.edition} edition)` : ''}`;

export const generateBookPageLink = (book: Book) =>
  generateBookPageTitle(book)
    .replaceAll(' ', '-')
    .replaceAll(/[\(\)]/g, '');
