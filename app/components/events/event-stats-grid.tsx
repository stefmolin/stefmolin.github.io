import classNames from 'classnames';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { type LivePresentation } from '../../interfaces/event';
import {
  getYearCounts,
  getCityCounts,
  getCountryCounts,
  getContentClassCounts,
  getConferenceCounts,
} from '../../lib/events';
import StatsGrid, { type StatsGridProps } from '../stats-grid';
import { FLAGS } from '../../data/constants';

export default function EventStatsGrid({
  sessions,
  className,
  linkClassName = 'text-blue-800',
  includeYearsActive = false,
  yearlyCountsOnly = false,
}: {
  sessions: LivePresentation[];
  className?: string;
  linkClassName?: string;
  includeYearsActive?: boolean;
  yearlyCountsOnly?: boolean;
}) {
  const linkMapping = {
    workshop: '/workshops/',
    talk: '/talks/',
    'book signing': '/events/book-signings/',
    conferences: '/events/conferences/',
    events: '/events/',
  };

  const completedSessions = sessions.filter(({ date }) => date < DateTime.now().toISODate());
  const latestSession = completedSessions.slice(-1)[0];
  const nextSession = sessions.find((event) => DateTime.fromISO(event.date) > DateTime.now());

  const yearCounts = getYearCounts(completedSessions);
  const yearsActive = { title: 'years active', value: Object.keys(yearCounts).length };

  const stats: StatsGridProps['stats'] = [];
  if (yearlyCountsOnly) {
    if (includeYearsActive) stats.push(yearsActive);
    stats.push(
      ..._.range(DateTime.now().year, 2020).map((year) => ({
        title: `presentations in ${year}`,
        value: yearCounts[year],
      })),
      { title: 'yearly average', value: _.round(_.mean(Object.values(yearCounts)), 1) },
    );
  } else {
    stats.push(
      { title: 'total events', value: completedSessions.length, link: linkMapping.events },
      ...Object.entries(getContentClassCounts(completedSessions))
        .sort(([, a], [, b]) => b - a)
        .map(([key, value]) => ({ title: `${key}s`, value, link: linkMapping[key] })),
      {
        title: `${nextSession == null ? 'last event' : 'up next'}: ${(nextSession ?? latestSession).event.name}`,
        value: FLAGS[(nextSession ?? latestSession).event.location.country],
      },
      {
        title: 'countries visited',
        value: Object.keys(getCountryCounts(completedSessions)).length,
      },
      { title: 'cities visited', value: Object.keys(getCityCounts(completedSessions)).length },
      {
        title: 'conferences',
        value: Object.keys(getConferenceCounts(completedSessions)).length,
        link: linkMapping.conferences,
      },
    );
    if (includeYearsActive) stats.splice(stats.length - 3, 0, yearsActive);
  }

  return (
    <StatsGrid
      className={classNames('mx-6 my-2', className)}
      linkClassName={linkClassName}
      stats={stats}
    />
  );
}
