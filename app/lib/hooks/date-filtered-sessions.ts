import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { type LivePresentation, type LivePodcast } from '../../interfaces/event';

export const useFilteredSessions = (
  liveSessions: (LivePresentation | LivePodcast)[],
  past: boolean,
) => {
  const [filteredSessions, setFilteredSessions] = useState(liveSessions);

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

export const useCompletedSessions = (liveSessions: (LivePresentation | LivePodcast)[]) => {
  return useFilteredSessions(liveSessions, true);
};

export const useLatestSession = (liveSessions: (LivePresentation | LivePodcast)[]) => {
  return useCompletedSessions(liveSessions).slice(-1)[0];
};

export const useNextSessions = (liveSessions: (LivePresentation | LivePodcast)[]) => {
  return useFilteredSessions(liveSessions, false);
};
