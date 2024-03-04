import classNames from 'classnames';
import { type Photo } from 'react-photo-album';
import MysteryCards, { MysteryCardsProps } from '../cards/mystery-cards';
import { type LivePresentation } from '../../interfaces/event';
import type RelatedContentLink from '../../interfaces/related-content';
import PhotoGallery from '../photo-gallery';
import RelatedContentSection from '../related-content/related-content';
import EvenlySpacedSections from '../sections/evenly-spaced-sections';
import EventMap from './event-map';
import { EventStatsGridProps } from './event-stats-grid';
import EventStatsSection from './event-stats-section';

interface EventPageProps {
  pageTitle: string;
  presentations: LivePresentation[];
  images: Photo[];
  mapIntroText: string;
  relatedContent: RelatedContentLink[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showStats?: boolean;
  statsProps?: Partial<Omit<EventStatsGridProps, 'sessions' | 'titleClassName'>>;
  funFacts?: MysteryCardsProps['cards'];
}

export const sectionTitleClassName = 'text-center md:text-left text-3xl mb-5';

export default function EventPage({
  pageTitle,
  presentations,
  images,
  mapIntroText,
  relatedContent,
  header = null,
  footer = null,
  showStats = false,
  statsProps,
  funFacts,
}: EventPageProps) {
  const subsectionTitleClassName = 'text-center md:text-left';

  return (
    <div className="-mt-4 mb-20 max-w-5xl -mx-4 sm:mx-auto">
      <h1 className="text-6xl md:text-7xl mb-2 text-center">{pageTitle}</h1>
      <EvenlySpacedSections className="my-10">
        {header}
        <PhotoGallery
          photos={images}
          shufflePhotos
          titleClassName={sectionTitleClassName}
          promptClassName={subsectionTitleClassName}
        />
        {showStats ? (
          <EventStatsSection
            {...statsProps}
            sessions={presentations}
            titleClassName={sectionTitleClassName}
          />
        ) : null}
        <EventMap
          introText={mapIntroText}
          liveEvents={presentations}
          titleClassName={sectionTitleClassName}
        />
        {funFacts ? (
          <div id="fun-facts">
            <h2 className={sectionTitleClassName}>Fun facts</h2>
            <p className={classNames('mb-5', subsectionTitleClassName)}>
              Hover over each of the cards to reveal a fun fact about my book signing events.
            </p>
            <MysteryCards cards={funFacts} color={'bg-orange-100'} />
          </div>
        ) : null}
        {footer}
        <RelatedContentSection
          relatedContent={relatedContent}
          titleClassName={sectionTitleClassName}
        />
      </EvenlySpacedSections>
    </div>
  );
}
