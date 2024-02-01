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
}

export interface TranslatedBook extends Pick<Book, 'publicationDate' | 'coverImage'> {
  language: string;
}

export interface RelatedContentLink {
  link: string;
  contentClass: 'post' | 'book' | 'workshop';
}

export interface FAQ {
  question: string;
  answer: string;
}
