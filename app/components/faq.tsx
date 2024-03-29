import type FAQ from '../interfaces/faq';
import CollapsibleSection from './sections/collapsible-section';
import MarkdownSection from './sections/markdown-section';
import PageSection, { type PageSectionProps } from './sections/page-section';

interface FAQSectionProps extends Omit<PageSectionProps, 'children'> {
  faqs: FAQ[];
  questionsClassName?: string;
}

const FAQSection = ({
  faqs,
  titleClassName,
  questionsClassName,
  divClassName,
}: FAQSectionProps) => (
  <PageSection id="faq" divClassName={divClassName} title="FAQ" titleClassName={titleClassName}>
    <div className={questionsClassName ?? 'flex flex-col space-y-2 items-start sm:pl-6'}>
      {faqs.map(({ question, answer }, index) => (
        <CollapsibleSection key={index} prompt={question}>
          <div className="px-2 sm:px-6 -my-2">
            <MarkdownSection>{answer}</MarkdownSection>
          </div>
        </CollapsibleSection>
      ))}
    </div>
  </PageSection>
);

export default FAQSection;
