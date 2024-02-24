import { NextSeo } from 'next-seo';
import Container from '../../components/sections/container';
import Layout from '../../components/page-layout/layout';
import { BOOK_PAGE_MAPPING } from '../../data/books';
import { generateBookCoverAltText, generateBookPageTitle } from '../../lib/books';
import { usePageURL } from '../../lib/hooks/page-url';
import { HOME_URL } from '../../data/constants';
import SectionSeparator from '../../components/dividers/section-separator';
import BookTranslationsSection from '../../components/books/translations';
import ReviewsSection from '../../components/reviews/reviews-section';
import BookSummarySection from '../../components/books/book-summary';
import BookOutline from '../../components/books/book-outline';
import { getImageLink } from '../../lib/images';
import RepoStats from '../../components/repo-stats';
import PageCount from '../../components/books/page-count';
import BookPublicationDate from '../../components/books/book-publication-date';

export default function BookPage({ bookKey }: { bookKey: string }) {
  const { book, reviews, relatedContent, faqs } = BOOK_PAGE_MAPPING[bookKey];

  const bookCoverImage = book.coverImage;
  const bookTitle = generateBookPageTitle(book);
  const imageAltText = generateBookCoverAltText(book);
  return (
    <Layout>
      <Container>
        <NextSeo
          title={bookTitle}
          description="A book by Stefanie Molin."
          openGraph={{
            type: 'book',
            url: usePageURL(),
            book: {
              releaseDate: book.publicationDate,
              isbn: book.isbn,
              authors: [HOME_URL],
              tags: book.tags,
            },
            images: [
              {
                url: getImageLink(bookCoverImage.src),
                width: bookCoverImage.width,
                height: bookCoverImage.height,
                alt: imageAltText,
              },
            ],
          }}
        />
        <BookOutline
          pageTitle={bookTitle}
          pageSubtitle={book.subtitle}
          faqs={faqs}
          relatedContent={relatedContent}
        >
          <div className="mt-4 flex flex-col-reverse lg:flex-row lg:items-center justify-between">
            <RepoStats
              repoName={book.repo}
              className="flex flex-col md:flex-row md:items-center md:space-x-2"
            />

            <div className="flex flex-row items-center space-x-2">
              <PageCount pageCount={book.pageCount} />
              <BookPublicationDate publicationDate={book.publicationDate} />
            </div>
          </div>
          <hr className="border-neutral-200 my-4" />
          <BookSummarySection book={book} />
          <SectionSeparator className="mt-5 lg:mt-24 mb-10" />
          {reviews != null ? (
            <>
              <ReviewsSection reviews={reviews} cardSize="md" />
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          <BookTranslationsSection book={book} />
          {book.translations != null ? <SectionSeparator className="my-10" /> : null}
        </BookOutline>
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
  return { props: { bookKey: params.book } };
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(BOOK_PAGE_MAPPING).map((book) => ({ params: { book } })),
    fallback: false,
  };
}
