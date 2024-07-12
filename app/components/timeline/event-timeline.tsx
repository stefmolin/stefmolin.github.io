import { DateTime } from 'luxon';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../components/page-layout/layout';
import Container from '../../components/sections/container';
import VerticalTimeline, { type VerticalTimelineProps } from './timeline';
import { type TimelineEntryProps } from './timeline-entry';

export interface EventTimelineProps {
  seoTitle: string;
  description: string;
  eventFilter?: (event: TimelineEntryProps, today: DateTime) => boolean;
  openGraph?: NextSeoProps['openGraph'];
  pageHeader?: React.ReactNode;
  timelineProps: VerticalTimelineProps;
}

export default function EventTimeline({
  seoTitle,
  description,
  openGraph,
  timelineProps,
  pageHeader,
  eventFilter = () => true,
}: EventTimelineProps) {
  const { timelineItems } = timelineProps;
  const [today, setToday] = useState<DateTime | null>(null);

  useEffect(() => setToday(DateTime.now()), []);

  return (
    <Layout>
      <Container className="mb-10">
        <NextSeo title={seoTitle} description={description} openGraph={openGraph} />
        <div className="max-w-5xl m-auto">
          {pageHeader}
          {today ? (
            <VerticalTimeline
              {...timelineProps}
              timelineItems={timelineItems.filter((item) => eventFilter(item, today))}
            />
          ) : (
            <div className="text-center text-3xl">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
}
