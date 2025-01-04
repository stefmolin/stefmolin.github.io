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
  const makeLink = (url: string, icon: IconDefinition, isExternal: boolean = true) => (
    <ResourceLink
      key={url}
      resourceLink={url}
      className="text-slate-600 hover:text-slate-800"
      linkClass={isExternal ? 'external' : 'internal'}
    >
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </ResourceLink>
  );
  const buttons = (
    <div
      className={classNames('space-x-1 sm:space-x-2 flex items-center justify-center', className)}
    >
      {makeLink(GITHUB_PROFILE, faGithub)}
      {makeLink(LINKEDIN_PROFILE, faLinkedin)}
      {makeLink(BLUESKY_PROFILE, faBluesky)}
      {makeLink(TWITTER_PROFILE, faXTwitter)}
      {!withoutNewsletter && makeLink('/newsletter', faEnvelopeOpenText, false)}
      {feed && makeLink(`/feeds/${feed}-rss.xml`, faRss)}
      {withSupport && makeLink('/say-thanks', faHandHoldingHeart, false)}
    </div>
  );

  if (withDivider) {
    return <FancyDivider className={dividerClassName}>{buttons}</FancyDivider>;
  }
  return buttons;
};

export default FollowButtons;
