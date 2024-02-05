import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { generateBookPageLink } from '../../lib/books';
import { usePageURL } from '../../lib/hooks';
import SectionSeparator from '../../components/section-separator';
import { BOOK_PAGES, GENERAL_FAQS } from '../../data/books';
import RelatedContentLink from '../../interfaces/related-content';
import BookOutline from '../../components/books/book-outline';
import { getImageLink } from '../../lib/images';
import BookCover from '../../components/books/book-cover';

// TODO: placeholder data for now
const relatedContent: RelatedContentLink[] = [
  {
    link: '/interviews',
    contentClass: 'page',
    image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
    title: 'Interviews',
  },
  {
    link: '/workshops',
    contentClass: 'page',
    image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
    title: 'Workshops',
  },
  {
    link: '/articles',
    contentClass: 'page',
    image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
    title: 'Articles',
  },
  {
    link: '/events',
    contentClass: 'page',
    image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
    title: 'Events',
  },
];

export default function Index() {
  const preview = false;
  const pageTitle = 'Bookshelf';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="A listing of books written by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink('/assets/books/pandas-book-stack.jpg'),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: 'Books written by Stefanie Molin.',
              },
            ],
          }}
        />
        <BookOutline
          pageTitle={pageTitle}
          pageSubtitle="A collection of books I have written."
          faqs={GENERAL_FAQS}
          relatedContent={relatedContent}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 xl:px-4 pt-10">
            {BOOK_PAGES.map(({ book }) => {
              const bookPageLink = generateBookPageLink(book);
              return (
                <div key={bookPageLink} className="flex items-center justify-center">
                  <Link
                    href={{
                      pathname: '/books/[book]',
                      query: { book: bookPageLink },
                    }}
                    className="text-slate-800"
                  >
                    <BookCover
                      book={book}
                      className="h-48 sm:h-64 object-contain hover:scale-110"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <SectionSeparator className="my-10" />
        </BookOutline>
      </Container>
    </Layout>
  );
}
