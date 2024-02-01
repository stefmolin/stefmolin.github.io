import type Book from '../interfaces/book';

export const generateTitle = (book: Book) =>
  `${book.title}${book.edition ? ` (${book.edition} edition)` : ''}`;

export const generateLink = (book: Book) =>
  generateTitle(book)
    .replaceAll(' ', '-')
    .replaceAll(/[\(\)]/g, '');
