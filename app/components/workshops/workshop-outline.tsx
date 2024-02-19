import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Workshop from '../../interfaces/workshop';
import markdownStyles from '../../styles/markdown-styles.module.css';
import CollapsibleSection from '../sections/collapsible-section';
import PageSection, { type PageSectionProps } from '../sections/page-section';

interface WorkshopOutlineProps extends Omit<PageSectionProps, 'children'> {
  workshop: Workshop;
}

export default function WorkshopOutline({ workshop, divClassName }: WorkshopOutlineProps) {
  return (
    <PageSection divClassName={divClassName} title="Workshop outline">
      <div className="space-y-2">
        {Object.entries(workshop.outline).map(([section, summary], index) => (
          <CollapsibleSection key={section} open={index === 0} prompt={section}>
            <div className="px-6 -my-2">
              <Markdown className={markdownStyles['markdown']} remarkPlugins={[remarkGfm]}>
                {summary}
              </Markdown>
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </PageSection>
  );
}
