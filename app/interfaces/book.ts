export default interface Book {
  title: string;
  subtitle?: string;
  edition?: string;
  coverImage: string;
  publicationDate: string;
  pageCount: number;
  description: string;
  amazonLink: string;
  repoLink: string;
  isbn: string;
  tags: string[];
  translations?: TranslatedBook[];
}
export interface TranslatedBook extends Pick<Book, 'publicationDate' | 'coverImage'> {
  language: string;
}