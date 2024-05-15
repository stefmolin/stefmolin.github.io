import { type Presentation } from '../../interfaces/event';
import { type SeeAlso } from '../../interfaces/related-content';
import type Talk from '../../interfaces/talk';
import RepoStats from '../repo-stats';
import PreviewSection from '../sections/preview-section';
import ResourceLink from '../links/resource-link';

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
  return (
    <PreviewSection
      bottomLeft={
        seeAlso ? (
          <p className="text-sm sm:text-base text-center sm:text-left">
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
      coverImage={coverImage ?? null}
      coverImageAltText={title}
      description={description}
      duration={duration}
      id={title}
      linkClass={contentClass === 'talk' ? 'external' : 'internal'}
      resourceLink={{ contentClass, slug }}
      subtitle={subtitle}
      title={<h2 className="text-xl sm:text-2xl hover:underline">{title}</h2>}
    />
  );
}
