import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpenText, faHandHoldingHeart, faRss } from '@fortawesome/free-solid-svg-icons';
import {
  IconDefinition,
  faBluesky,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  BLUESKY_PROFILE,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
} from '../data/constants';
import FancyDivider from './dividers/fancy-divider';
import ResourceLink from './links/resource-link';

export interface FollowButtonsProps {
  className?: string;
  dividerClassName?: string;
  feed?: 'articles' | 'blog';
  size?: SizeProp;
  withDivider?: boolean;
  withoutNewsletter?: boolean;
  withSupport?: boolean;
}

const FollowButtons = ({
  className,
  dividerClassName,
  feed,
  size = 'lg',
  withDivider = false,
  withoutNewsletter = false,
  withSupport = false,
}: FollowButtonsProps) => {
  const makeLink = (
    url: string,
    icon: IconDefinition,
    ariaLabel: string,
    isExternal: boolean = true,
  ) => (
    <ResourceLink
      key={url}
      resourceLink={url}
      className="text-slate-600 hover:text-slate-800"
      linkClass={isExternal ? 'external' : 'internal'}
      ariaLabel={ariaLabel}
      addTitle
    >
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </ResourceLink>
  );
  const buttons = (
    <div
      className={classNames('space-x-1 sm:space-x-2 flex items-center justify-center', className)}
    >
      {makeLink(GITHUB_PROFILE, faGithub, "Stefanie Molin's GitHub profile")}
      {makeLink(LINKEDIN_PROFILE, faLinkedin, "Stefanie Molin's LinkedIn profile")}
      {makeLink(BLUESKY_PROFILE, faBluesky, "Stefanie Molin's Bluesky profile")}
      {makeLink(
        TWITTER_PROFILE,
        faXTwitter,
        "Stefanie Molin's X (formerly known as Twitter) profile",
      )}
      {!withoutNewsletter &&
        makeLink(
          '/newsletter',
          faEnvelopeOpenText,
          "Sign up for Stefanie Molin's newsletter",
          false,
        )}
      {feed && makeLink(`/feeds/${feed}-rss.xml`, faRss, `Stefanie Molin's ${feed} RSS feed`)}
      {withSupport &&
        makeLink(
          '/say-thanks',
          faHandHoldingHeart,
          "Ways to show appreciation for Stefanie Molin's work",
          false,
        )}
    </div>
  );

  if (withDivider) {
    return <FancyDivider className={dividerClassName}>{buttons}</FancyDivider>;
  }
  return buttons;
};

export default FollowButtons;
