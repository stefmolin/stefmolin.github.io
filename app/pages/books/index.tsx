import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../../components/sections/container';
import Layout from '../../components/page-layout/layout';
import { generateBookPageLink } from '../../lib/books';
import { usePageURL } from '../../lib/hooks/page-url';
import SectionSeparator from '../../components/dividers/section-separator';
import { BOOK_PAGES, GENERAL_FAQS } from '../../data/books';
import type RelatedContentLink from '../../interfaces/related-content';
import BookOutline from '../../components/books/book-outline';
import { getImageLink } from '../../lib/images';
import BookCover from '../../components/books/book-cover';
import CONTENT_LINKS from '../../data/content-links';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.WORKSHOPS,
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.EVENTS,
];

export default function Index() {
  const pageTitle = 'Bookshelf';
  const seoImage = CONTENT_LINKS.BOOKS.image;
  return (
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description="A listing of books written by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
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
