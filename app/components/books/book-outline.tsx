import FAQSection from '../faq';
import type FAQ from '../../interfaces/faq';
import SectionSeparator from '../dividers/section-separator';
import RelatedContentSection from '../related-content/related-content';
import type RelatedContentLink from '../../interfaces/related-content';

type BookOutlineProps = {
  pageTitle: string;
  pageSubtitle?: string;
  children: React.ReactNode[];
  faqs: FAQ[];
  relatedContent: RelatedContentLink[];
};

const BookOutline = ({
  pageTitle,
  pageSubtitle,
  children,
  faqs,
  relatedContent,
}: BookOutlineProps) => {
  const sectionHeaderClassName = 'text-2xl sm:text-3xl md:text-4xl mb-5 text-center sm:text-left';
  return (
    <div className="-mt-6 mb-20 max-w-5xl -mx-4 sm:mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left">{pageTitle}</h1>
      {pageSubtitle != null ? (
        <h2 className="text-lg md:text-xl text-center md:text-left pt-2 -mb-4">{pageSubtitle}</h2>
      ) : null}
      {children}
      <FAQSection
        faqs={faqs}
        titleClassName={sectionHeaderClassName}
        divClassName="-mt-5 sm:mt-auto mx-2 sm:mx-auto"
      />
      <SectionSeparator className="my-5 sm:my-10" />
      <RelatedContentSection
        relatedContent={relatedContent}
        titleClassName={sectionHeaderClassName}
      />
    </div>
  );
};

export default BookOutline;
