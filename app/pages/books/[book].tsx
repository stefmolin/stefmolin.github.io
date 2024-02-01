import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import BOOK_PAGES from '../../data/books';
import Book, { TranslatedBook, RelatedContentLink, FAQ } from '../../interfaces/book';
import { generateLink, generateTitle } from '../../lib/books';

interface BookProps {
  book: Book;
  reviews?: string[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}

// TODO: set the og image and SEO data
export default function BookPage({ book, reviews, translations }: BookProps) {
  const preview = false;
  console.log(book);
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <h1 className="text-4xl">{generateTitle(book)}</h1>
        <h2 className="text-xl">{book.subtitle}</h2>
      </Container>
    </Layout>
  );
}
type Params = {
  params: {
    book: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  // TODO: change the book listing to a shorthand slug mapping to the info for key-lookup here instead of searching
  return { props: BOOK_PAGES.find((page) => generateLink(page.book) === params.book) };
};

export async function getStaticPaths() {
  return {
    paths: BOOK_PAGES.map((pageInfo) => ({
      params: { book: generateLink(pageInfo.book) },
    })),
    fallback: false,
  };
}
