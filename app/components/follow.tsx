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
import { NEWSLETTER_URL, TWITTER_HANDLE } from '../data/constants';
import ExternalLink from './links/external-link';

const FOLLOW_LINKS: { icon: IconDefinition; url: string }[] = [
  {
    icon: faGithub,
    url: 'https://github.com/stefmolin',
  },
  {
    icon: faLinkedin,
    url: 'https://linkedin.com/in/stefanie-molin',
  },
  {
    icon: faXTwitter,
    url: `https://twitter.com/${TWITTER_HANDLE.replace('@', '')}`,
  },
  { icon: faEnvelopeOpenText, url: NEWSLETTER_URL },
];

type Props = {
  className?: string;
  size?: SizeProp;
};

const FollowButtons = ({ className, size = 'lg' }: Props) => {
  const makeLink = (url: string, icon: IconDefinition) => (
    <ExternalLink key={url} href={url} className="text-slate-600 hover:text-slate-800">
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </ExternalLink>
  );
  return (
    <div className={classNames('space-x-2 flex items-center justify-center', className)}>
      {FOLLOW_LINKS.map(({ url, icon }) => makeLink(url, icon))}
    </div>
  );
};

export default FollowButtons;
