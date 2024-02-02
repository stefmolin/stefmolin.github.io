import { NextSeo } from 'next-seo';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCalendar,
  faChevronDown,
  faChevronRight,
  faFileLines,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { BOOK_MAPPING } from '../../data/books';
import Book, { TranslatedBook, RelatedContentLink, FAQ, Review } from '../../interfaces/book';
import { generateBookPageTitle } from '../../lib/books';
import { usePageURL } from '../../lib/hooks';
import { HOME_URL } from '../../lib/constants';
import SectionSeparator from '../../components/section-separator';
import DateFormatter from '../../components/date-formatter';
import { faAmazon, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface BookProps {
  book: Book;
  reviews?: Review[];
  translations?: TranslatedBook[];
  relatedContent: RelatedContentLink[];
  faqs: FAQ[];
}

const getImageLink = (imageLink: string) =>
  imageLink.startsWith('/') ? `${HOME_URL}${imageLink}` : imageLink;

// export default function BookPage({ book, reviews, translations, relatedContent, faqs }: BookProps) {
export default function BookPage({ bookKey }: { bookKey: string }) {
  const { book, reviews, translations, relatedContent, faqs } = BOOK_MAPPING[bookKey]; // allows React nodes in description
  const preview = false;
  const bookCoverImage = getImageLink(book.coverImage);
  const bookTitle = generateBookPageTitle(book);
  const imageAltText = `Cover image of ${bookTitle}`;
  const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' }; // TODO: put this in a central place and refactor
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={bookTitle}
          description="A listing of books I've written."
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
        <div className="my-4 max-w-5xl mx-auto">
          <h1 className="text-4xl">{bookTitle}</h1>
          <h2 className="text-xl pt-2">{book.subtitle}</h2>
          <hr className="border-neutral-200 my-4" />
          <div>
            <div className="float-left mr-5 flex flex-col justify-center space-y-2 w-48 md:w-64">
              <img src={book.coverImage} alt={imageAltText} />
              <div className="flex flex-row items-center justify-center">
                <button className="px-2 py-1 bg-orange-400 hover:bg-orange-500 grow">
                  <a href={book.amazonLink} className="font-bold" {...externalLinkProps}>
                    <div className="flex flex-row items-center justify-center">
                      <FontAwesomeIcon icon={faAmazon} className="pr-1" size="sm" fixedWidth />
                      Buy on Amazon*
                    </div>
                  </a>
                </button>
              </div>
              <small className="text-pretty">
                *As an Amazon Associate, I earn from qualifying purchases.
              </small>
            </div>
            <div className="space-y-4 min-h-48 md:min-h-64 lg:min-h-80">
              <div className="flex flex-row items-center space-x-4">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faBook} className="pr-1 -ml-1" fixedWidth />
                  <span>{book.pageCount} pages</span>
                </div>

                <div className="flex flex-row items-center">
                  <DateFormatter
                    dateString={book.publicationDate}
                    // format={'LLLL yyyy'}
                    children={[
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="pr-1"
                        fixedWidth
                        key={book.publicationDate}
                      />,
                      <span key="label">Published </span>,
                    ]}
                  />
                </div>

                <div className="flex flex-row items-center">
                  <a href={book.repoLink} {...externalLinkProps} className="hover:underline">
                    <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
                    View repository
                  </a>
                </div>
              </div>
              <div className="space-y-2 text-justify text-pretty">
                {/* TODO: use text-pretty in posts */}
                {/* {book.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))} */}
                {book.description}
              </div>
            </div>
          </div>
          <SectionSeparator className="mt-5 lg:mt-20 mb-10" />
          {reviews != null ? (
            <>
              <div>
                {/* TODO: styling */}
                <h2 className="text-2xl mb-2">Reviews</h2>
                {reviews.map(({ author, text }) => (
                  <blockquote key={author} className="pl-6">
                    <FontAwesomeIcon icon={faQuoteLeft} className="pr-1" fixedWidth />
                    {text}
                    <FontAwesomeIcon icon={faQuoteRight} className="pr-1" fixedWidth /> - {author}
                  </blockquote>
                ))}
              </div>
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          {translations != null ? (
            <>
              <div>
                <h2 className="text-2xl mb-5">Translations</h2>
                <div className="flex flex-row space-x-10 items-center pl-6">
                  {translations.map(({ publicationDate, coverImage, language }) => (
                    <div key={language} className="flex flex-col items-center space-y-1">
                      <h3 className="text-lg text-left">{language}</h3>
                      <img src={coverImage} alt={`${language} edition`} className="w-40" />
                      <DateFormatter
                        dateString={publicationDate}
                        format={'LLLL yyyy'}
                        children={[
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="pr-1"
                            fixedWidth
                            key={publicationDate}
                          />,
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          <div>
            <h2 className="text-2xl mb-5">FAQ</h2>
            <div className="flex flex-row space-x-10 items-center pl-6">
              {faqs.map(({ question, answer }, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                  <Collapsible
                    trigger={
                      <>
                        <FontAwesomeIcon icon={faChevronRight} className="pr-1" fixedWidth />
                        <span className="text-lg text-bold">{question}</span>
                      </>
                    }
                    triggerWhenOpen={
                      <>
                        <FontAwesomeIcon icon={faChevronDown} className="pr-1" fixedWidth />
                        <span className="text-lg text-bold">{question}</span>
                      </>
                    }
                  >
                    <p className="px-6 py-2">{answer}</p>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
          <SectionSeparator className="my-10" />
          <div className="mb-20">
            <h2 className="text-2xl mb-5">Related content</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
              {relatedContent.map(({ link, contentClass, image, title }, index) => (
                <div className="flex items-center justify-center">
                  <Link href={link} className="text-slate-500 hover:text-slate-800">
                    <div
                      key={index}
                      className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200 w-48 h-40 items-center"
                    >
                      <img
                        src={image}
                        alt={`suggested ${contentClass}`}
                        className="w-48 h-20 object-cover"
                      />
                      <div className="flex flex-col h-full justify-center">
                        <h3 className="text-center px-2">{title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
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
  // return { props: BOOK_MAPPING[params.book] };
  return { props: { bookKey: params.book } };
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(BOOK_MAPPING).map((book) => ({ params: { book } })),
    fallback: false,
  };
}
