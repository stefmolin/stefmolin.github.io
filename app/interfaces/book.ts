export default interface Book {
  title: string;
  subtitle?: string;
  edition?: string;
  coverImage: string;
  publicationDate: string;
  pageCount: number;
  description: React.ReactNode[];
  amazonLink: string;
  repoLink: string;
  isbn: string;
  tags: string[];
}

export interface TranslatedBook extends Pick<Book, 'publicationDate' | 'coverImage'> {
  language: string;
}

// TODO: this is probably general enough to be moved to another file (applies to workshops for example)
export interface Review {
  text: string;
  author: string;
}

export interface RelatedContentLink {
  link: string;
  contentClass: 'post' | 'book' | 'workshop'; // TODO: might not be necessary
  image: string;
  title: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
