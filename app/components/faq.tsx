import type FAQ from '../interfaces/faq';
import CollapsibleSection from './sections/collapsible-section';

type FAQSectionProps = {
  faqs: FAQ[];
  titleClassName?: string;
  questionsClassName?: string;
  divClassName?: string;
};

const FAQSection = ({
  faqs,
  titleClassName,
  questionsClassName,
  divClassName,
}: FAQSectionProps) => (
  <div className={divClassName}>
    <h2 className={titleClassName ?? 'text-3xl mb-5'}>FAQ</h2>
    <div className={questionsClassName ?? 'flex flex-col space-y-2 items-start pl-6'}>
      {faqs.map(({ question, answer }, index) => (
        <CollapsibleSection key={index} prompt={question} contents={answer} />
      ))}
    </div>
  </div>
);

export default FAQSection;
