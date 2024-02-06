import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { BOOK_PAGE_MAPPING } from '../../data/books';
import { generateBookCoverAltText, generateBookPageTitle } from '../../lib/books';
import { usePageURL } from '../../lib/hooks';
import { HOME_URL } from '../../data/constants';
import SectionSeparator from '../../components/section-separator';
import BookTranslationsSection from '../../components/books/translations';
import ReviewsSection from '../../components/reviews';
import BookSummarySection from '../../components/books/book-summary';
import BookOutline from '../../components/books/book-outline';
import { getImageLink } from '../../lib/images';

export default function BookPage({ bookKey }: { bookKey: string }) {
  const { book, reviews, relatedContent, faqs } = BOOK_PAGE_MAPPING[bookKey];

  const preview = false;
  const bookCoverImage = getImageLink(book.coverImage);
  const bookTitle = generateBookPageTitle(book);
  const imageAltText = generateBookCoverAltText(book);
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
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
                url: bookCoverImage,
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
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
          <hr className="border-neutral-200 my-4" />
          <BookSummarySection book={book} coverImageAltText={imageAltText} />
          <SectionSeparator className="mt-5 lg:mt-20 mb-10" />
          {reviews != null ? (
            <>
              <ReviewsSection reviews={reviews} />
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
