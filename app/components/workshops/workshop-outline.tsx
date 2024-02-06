import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Workshop from '../../interfaces/workshop';

interface WorkshopOutlineProps {
  workshop: Workshop;
  className?: string;
}

export default function WorkshopOutline({ workshop, className }: WorkshopOutlineProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl mb-5">Workshop outline</h2>
      <div className="space-y-2">
        {Object.entries(workshop.outline).map(([section, summary], index) => (
          <Collapsible
            key={section}
            open={index === 0}
            trigger={
              <>
                <FontAwesomeIcon icon={faChevronRight} className="pr-1" fixedWidth />
                <span className="text-lg text-bold">{section}</span>
              </>
            }
            triggerWhenOpen={
              <>
                <FontAwesomeIcon icon={faChevronDown} className="pr-1" fixedWidth />
                <span className="text-lg text-bold">{section}</span>
              </>
            }
          >
            <Markdown className="px-6 py-2" remarkPlugins={[remarkGfm]}>
              {summary}
            </Markdown>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
