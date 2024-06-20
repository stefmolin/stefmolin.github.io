import classNames from 'classnames';
import { type LivePresentation } from '../../interfaces/event';
import { useWindowSize } from '../../lib/hooks/window-size';
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
  const { width } = useWindowSize();
  const statCardLinkClassName = 'text-blue-800';
  return (
    <PageSection id="stats" title="Event statistics" titleClassName={titleClassName}>
      <p className="text-center md:text-left mb-5">
        The statistics below are for past events only. Click{' '}
        <span className={statCardLinkClassName}>blue</span> text for more information.
      </p>
      <EventStatsGrid
        className={classNames({ 'pb-4': includeYearsActive })}
        sessions={sessions}
        linkClassName={statCardLinkClassName}
        includeYearsActive={includeYearsActive}
      />
      {includeYearsActive && width && width > 1024 && (
        <CollapsibleSection prompt="Yearly breakdown" className="items-center">
          <EventStatsGrid
            sessions={sessions}
            yearlyCountsOnly
            className="mx-2"
            linkClassName={statCardLinkClassName}
          />
        </CollapsibleSection>
      )}
    </PageSection>
  );
}
