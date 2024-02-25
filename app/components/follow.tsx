import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  NEWSLETTER_URL,
  TWITTER_HANDLE,
} from '../data/constants';
import ExternalLink from './links/external-link';
import FancyDivider from './dividers/fancy-divider';

const FOLLOW_LINKS: { icon: IconDefinition; url: string }[] = [
  {
    icon: faGithub,
    url: GITHUB_PROFILE,
  },
  {
    icon: faLinkedin,
    url: LINKEDIN_PROFILE,
  },
  {
    icon: faXTwitter,
    url: `https://twitter.com/${TWITTER_HANDLE.replace('@', '')}`,
  },
  { icon: faEnvelopeOpenText, url: NEWSLETTER_URL },
];

type Props = {
  className?: string;
  dividerClassName?: string;
  size?: SizeProp;
  withDivider?: boolean;
  withoutNewsletter?: boolean;
};

const FollowButtons = ({
  className,
  dividerClassName,
  size = 'lg',
  withDivider = false,
  withoutNewsletter = false,
}: Props) => {
  const makeLink = (url: string, icon: IconDefinition) => (
    <ExternalLink key={url} href={url} className="text-slate-600 hover:text-slate-800">
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </ExternalLink>
  );
  const buttons = (
    <div className={classNames('space-x-2 flex items-center justify-center', className)}>
      {(withoutNewsletter ? FOLLOW_LINKS.slice(0, 3) : FOLLOW_LINKS).map(({ url, icon }) =>
        makeLink(url, icon),
      )}
    </div>
  );
  if (withDivider) {
    return <FancyDivider className={dividerClassName}>{buttons}</FancyDivider>;
  }
  return buttons;
};

export default FollowButtons;
