import FAQSection from '../faq';
import type FAQ from '../../interfaces/faq';
import SectionSeparator from '../section-separator';
import RelatedContentSection from '../related-content';
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
}: BookOutlineProps) => (
  <div className="mt-4 mb-20 max-w-5xl mx-auto">
    <h1 className="text-4xl">{pageTitle}</h1>
    {pageSubtitle != null ? <h2 className="text-xl pt-2">{pageSubtitle}</h2> : null}
    {children}
    <FAQSection faqs={faqs} />
    <SectionSeparator className="my-10" />
    <RelatedContentSection relatedContent={relatedContent} />
  </div>
);

export default BookOutline;
