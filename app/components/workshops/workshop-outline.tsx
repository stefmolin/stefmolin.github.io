import type Workshop from '../../interfaces/workshop';
import CollapsibleSection from '../sections/collapsible-section';
import MarkdownSection from '../sections/markdown-section';
import PageSection, { type PageSectionProps } from '../sections/page-section';

interface WorkshopOutlineProps extends Omit<PageSectionProps, 'children'> {
  workshop: Workshop;
}

export default function WorkshopOutline({ workshop, divClassName }: WorkshopOutlineProps) {
  return (
    <PageSection
      divClassName={divClassName}
      title="Workshop outline"
      titleClassName="text-xl sm:text-2xl md:text-3xl mb-5 text-center sm:text-left"
    >
      <div className="space-y-2">
        {Object.entries(workshop.outline).map(([section, summary], index) => (
          <CollapsibleSection key={section} open={index === 0} prompt={section}>
            <div className="sm:px-6 -my-2">
              <MarkdownSection>{summary}</MarkdownSection>
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </PageSection>
  );
}
