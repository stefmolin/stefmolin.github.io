import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { type LivePresentation, type LivePodcast } from '../../interfaces/event';

export const useFilteredSessions = (
  liveSessions: (LivePresentation | LivePodcast)[],
  past: boolean,
  startEmpty: boolean = false,
) => {
  const [filteredSessions, setFilteredSessions] = useState(startEmpty ? [] : liveSessions);

  useEffect(() => {
    setFilteredSessions(
      liveSessions.filter(({ date }) => {
        const inPast = date < DateTime.now().toISODate();
        return past ? inPast : !inPast;
      }),
    );
  }, []);

  return [...filteredSessions];
};

export const useCompletedSessions = (
  liveSessions: (LivePresentation | LivePodcast)[],
  startEmpty: boolean = false,
) => {
  return useFilteredSessions(liveSessions, true, startEmpty);
};

export const useLatestSession = (
  liveSessions: (LivePresentation | LivePodcast)[],
  startEmpty: boolean = false,
) => {
  return useCompletedSessions(liveSessions, startEmpty).slice(-1)[0];
};

export const useNextSessions = (
  liveSessions: (LivePresentation | LivePodcast)[],
  startEmpty: boolean = false,
) => {
  return useFilteredSessions(liveSessions, false, startEmpty);
};
