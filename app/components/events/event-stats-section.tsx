import { type LivePresentation } from '../../interfaces/event';
import CollapsibleSection from '../collapsible-section';
import EventStatsGrid from './event-stats-grid';

export default function EventStatsSection({
  sessions,
  includeYearsActive = false,
}: {
  sessions: LivePresentation[];
  includeYearsActive?: boolean;
}) {
  const statCardLinkClassName = 'text-blue-800';
  return (
    <div>
      <h2 className="text-3xl mb-5">Event statistics</h2>
      <p className="mb-5">
        Click <span className={statCardLinkClassName}>blue</span> text for more information.
      </p>
      {includeYearsActive ? (
        <>
          <EventStatsGrid className="pb-4" sessions={sessions} includeYearsActive />
          <CollapsibleSection prompt="Yearly breakdown">
            <EventStatsGrid sessions={sessions} yearlyCountsOnly />
          </CollapsibleSection>
        </>
      ) : (
        <EventStatsGrid sessions={sessions} linkClassName={statCardLinkClassName} />
      )}
    </div>
  );
}
