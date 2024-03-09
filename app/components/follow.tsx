import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpenText, faHandHoldingDollar, faRss } from '@fortawesome/free-solid-svg-icons';
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { GITHUB_PROFILE, LINKEDIN_PROFILE, TWITTER_HANDLE } from '../data/constants';
import FancyDivider from './dividers/fancy-divider';
import ExternalLink from './links/external-link';
import ResourceLink from './links/resource-link';

export interface FollowButtonsProps {
  className?: string;
  dividerClassName?: string;
  feed?: 'article' | 'blog';
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
      {makeLink(`https://twitter.com/${TWITTER_HANDLE.replace('@', '')}`, faXTwitter)}
      {!withoutNewsletter && makeLink('/newsletter', faEnvelopeOpenText, false)}
      {feed && makeLink(`/feeds/${feed}-rss.xml`, faRss)}
      {withSupport && makeLink('https://www.buymeacoffee.com/stefanie.molin', faHandHoldingDollar)}
    </div>
  );

  if (withDivider) {
    return <FancyDivider className={dividerClassName}>{buttons}</FancyDivider>;
  }
  return buttons;
};

export default FollowButtons;
