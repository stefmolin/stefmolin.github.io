import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';
import FAQ from '../interfaces/faq';

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
    <h2 className={titleClassName ?? 'text-2xl mb-5'}>FAQ</h2>
    <div className={questionsClassName ?? 'flex flex-col space-y-2 items-start pl-6'}>
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
);

export default FAQSection;
