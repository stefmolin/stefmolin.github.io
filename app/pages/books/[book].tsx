import classNames from 'classnames';
import { NextSeo } from 'next-seo';
import BookOutline from '../../components/books/book-outline';
import BookPublicationDate from '../../components/books/book-publication-date';
import BookSummarySection from '../../components/books/book-summary';
import PageCount from '../../components/books/page-count';
import BookTranslationsSection from '../../components/books/translations';
import RepoStats from '../../components/repo-stats';
import SectionSeparator from '../../components/dividers/section-separator';
import Layout from '../../components/page-layout/layout';
import ReviewsSection from '../../components/reviews/reviews-section';
import Container from '../../components/sections/container';
import { BOOK_PAGE_MAPPING } from '../../data/books';
import { HOME_URL } from '../../data/constants';
import { generateBookCoverAltText, generateBookPageTitle } from '../../lib/books';
import { useWindowSize } from '../../lib/hooks/window-size';
import { getImageLink } from '../../lib/images';

export default function BookPage({ bookKey }: { bookKey: string }) {
  const { book, reviews, relatedContent, faqs } = BOOK_PAGE_MAPPING[bookKey];

  const bookCoverImage = book.coverImage;
  const bookTitle = generateBookPageTitle(book);
  const imageAltText = generateBookCoverAltText(book);

  const { width } = useWindowSize();
  const subsectionHeaderClassName =
    'text-2xl sm:text-3xl md:text-4xl mb-5 text-center sm:text-left';
  return (
    <Layout>
      <Container>
        <NextSeo
          title={bookTitle}
          description={book.description.split('\n\n')[0].replaceAll('\n', ' ')}
          openGraph={{
            type: 'book',
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
          <div className="mt-7 flex flex-col-reverse lg:flex-row lg:items-center justify-between">
            <RepoStats
              repoName={book.repo}
              className="flex flex-col md:flex-row items-center md:space-x-2 text-center"
            />

            <div
              className={classNames(
                'flex',
                'items-center justify-center md:justify-start',
                'space-x-2',
                { 'flex-col space-x-0': width && width < 375 },
              )}
            >
              <PageCount pageCount={book.pageCount} />
              <BookPublicationDate publicationDate={book.publicationDate} />
            </div>
          </div>
          <SectionSeparator className="my-4" />
          <BookSummarySection book={book} />
          <SectionSeparator className="mt-5 lg:mt-24 mb-10" />
          {reviews != null ? (
            <>
              <ReviewsSection
                reviews={reviews}
                cardSize="md"
                titleClassName={subsectionHeaderClassName}
              />
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          <BookTranslationsSection
            book={book}
            divClassName="-mx-2 sm:mx-auto"
            titleClassName={subsectionHeaderClassName}
          />
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
