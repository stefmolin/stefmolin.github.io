import Link from 'next/link';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import BOOK_PAGES from '../../data/books';
import Book, { TranslatedBook, RelatedContentLink, FAQ } from '../../interfaces/book';
import { generateLink } from '../../lib/books';

interface BookProps {
  book: Book;
  reviews?: string[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}
// TODO: set the og image (stack of books) and SEO data
export default function Index({ pages }: { pages: BookProps[] }) {
  const preview = false;
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <h1 className="text-5xl">Books</h1>

        {pages.map((page) => {
          const book = generateLink(page.book);
          return (
            <h3 className="text-2xl md:text-3xl mb-3 leading-snug w-full" key={book}>
              <Link
                href={{
                  pathname: '/books/[book]',
                  query: { book },
                }}
                className="hover:underline"
              >
                {page.book.title}
                {page.book.edition ? ` (${page.book.edition} edition)` : ''}
              </Link>
            </h3>
          );
        })}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: { pages: BOOK_PAGES },
  };
};
