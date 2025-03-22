import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HOME_URL } from '../../data/constants';
import DurationIndicator from '../datetime/duration-indicator';
import type Workshop from '../../interfaces/workshop';
import ResourceLink from '../links/resource-link';
import RepoStats from '../repo-stats';

export default function WorkshopHeader({ workshop }: { workshop: Workshop }) {
  const isPreview = workshop.coverImage.src.includes('coming-soon');
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-center sm:text-left">
        {workshop.title}
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center sm:items-start justify-between md:space-x-2">
        {isPreview ? 'Repository and slides coming soon' : <RepoStats repoName={workshop.repo} />}
        <div className="flex flex-row items-center justify-center space-x-2">
          {!isPreview && (
            <span>
              <FontAwesomeIcon icon={faFileAlt} className="pr-1" fixedWidth />
              <ResourceLink
                className="hover:underline text-slate-600"
                linkClass="external"
                resourceLink={`${HOME_URL}/${workshop.repo}/`}
              >
                slides
              </ResourceLink>
            </span>
          )}
          <DurationIndicator duration={workshop.duration} />
        </div>
      </div>
    </>
  );
}
