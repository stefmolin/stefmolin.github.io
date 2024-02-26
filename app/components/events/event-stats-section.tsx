import { type LivePresentation } from '../../interfaces/event';
import CollapsibleSection from '../sections/collapsible-section';
import PageSection from '../sections/page-section';
import EventStatsGrid from './event-stats-grid';

export default function EventStatsSection({
  sessions,
  titleClassName,
  includeYearsActive = false,
}: {
  sessions: LivePresentation[];
  titleClassName?: string;
  includeYearsActive?: boolean;
}) {
  const statCardLinkClassName = 'text-blue-800';
  return (
    <PageSection id="stats" title="Event statistics" titleClassName={titleClassName}>
      <p className="mb-5">
        Click <span className={statCardLinkClassName}>blue</span> text for more information.
      </p>
      {includeYearsActive ? (
        <>
          <EventStatsGrid className="pb-4" sessions={sessions} includeYearsActive />
          <CollapsibleSection prompt="Yearly breakdown">
            <EventStatsGrid sessions={sessions} yearlyCountsOnly className="mx-2" />
          </CollapsibleSection>
        </>
      ) : (
        <EventStatsGrid sessions={sessions} linkClassName={statCardLinkClassName} />
      )}
    </PageSection>
  );
}
