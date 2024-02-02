import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { BOOK_PAGES } from '../../data/books';
import Book, { TranslatedBook, RelatedContentLink, FAQ } from '../../interfaces/book';
import { generateBookPageLink, generateBookPageTitle } from '../../lib/books';
import { usePageURL } from '../../lib/hooks';
import { HOME_URL } from '../../lib/constants';
import SectionSeparator from '../../components/section-separator';

interface BookProps {
  book: Book;
  reviews?: string[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}

export default function Index({ pages }: { pages: BookProps[] }) {
  const preview = false;
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title="Books"
          description="A listing of books written by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: `${HOME_URL}/assets/books/pandas-book-stack.jpg`,
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: "Books I've written.",
              },
            ],
          }}
        />
        <h1 className="text-5xl">Books</h1>

        {pages.map((page, index) => {
          const book = generateBookPageLink(page.book);
          return (
            <>
              <h3 className="text-2xl md:text-3xl mb-3 leading-snug w-full" key={book}>
                <Link
                  href={{
                    pathname: '/books/[book]',
                    query: { book },
                  }}
                  className="hover:underline"
                >
                  {generateBookPageTitle(page.book)}
                </Link>
              </h3>
              {pages.length > 1 && index < pages.length - 1 ? <SectionSeparator /> : null}
            </>
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
