import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { type Presentation } from '../../interfaces/event';
import { type SeeAlso } from '../../interfaces/related-content';
import type Talk from '../../interfaces/talk';
import { getLivePresentations } from '../../lib/events';
import RepoStats from '../repo-stats';
import PreviewSection from '../sections/preview-section';
import ResourceLink from '../links/resource-link';

// TODO: this card is also very similar to the ones I use for /interviews --> try to make a component

export default function PresentationPreview({
  slug,
  title,
  subtitle,
  coverImage,
  description,
  duration,
  contentClass,
  seeAlso,
  repo,
}: Omit<Talk, 'slidesLink'> & {
  slug: string;
  contentClass: Presentation['contentClass'];
  seeAlso?: SeeAlso;
  repo?: string;
}) {
  const pastSessions = getLivePresentations({
    contentClass: contentClass,
    title: title,
  });

  return (
    <PreviewSection
      bottomLeft={
        seeAlso ? (
          <p>
            See also:{' '}
            <ResourceLink
              className="text-slate-500 hover:underline"
              linkClass="internal"
              resourceLink={{ contentClass: seeAlso.contentClass, slug: seeAlso.slug }}
            >
              {seeAlso.title}
            </ResourceLink>
          </p>
        ) : repo ? (
          <RepoStats repoName={repo} statsOnly />
        ) : null
      }
      coverImage={coverImage}
      coverImageAltText={title}
      description={description}
      duration={duration}
      id={title}
      linkClass="internal"
      resourceLink={{ contentClass, slug }}
      subtitle={
        subtitle ?? (
          <h3 className="text-slate-600">
            <FontAwesomeIcon icon={faMicrophoneLines} fixedWidth className="pr-1" />
            {pastSessions
              .sort((a, b) => (a.date > b.date ? -1 : 1))
              .map(({ date, event }) => `${event.name} ${date.slice(0, 4)}`)
              .join(', ')}
          </h3>
        )
      }
      title={<h2 className="text-2xl hover:underline">{title}</h2>}
    />
  );
}
