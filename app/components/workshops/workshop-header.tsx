import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GITHUB_PROFILE, EXTERNAL_LINK_PROPS } from '../../data/constants';
import type Workshop from '../../interfaces/workshop';
import DurationIndicator from '../datetime/duration-indicator';

export default function WorkshopHeader({ workshop }: { workshop: Workshop }) {
  return (
    <>
      <h1 className="text-5xl mb-2">{workshop.title}</h1>
      <div className="flex flex-row items-center justify-between space-x-2">
        <div className="flex flex-row items-center space-x-2">
          <span>
            <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
            <a
              href={`${GITHUB_PROFILE}/${workshop.repo}`}
              {...EXTERNAL_LINK_PROPS}
              className="hover:underline text-slate-600"
            >
              View repository
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faFileAlt} className="pr-1" fixedWidth />
            <a href={workshop.slidesLink} className="hover:underline text-slate-600">
              View slides
            </a>
          </span>
        </div>
        <DurationIndicator duration={workshop.duration} />
      </div>
    </>
  );
}
