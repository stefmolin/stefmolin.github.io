import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NEWSLETTER_URL, TWITTER_HANDLE } from "../lib/constants";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const FOLLOW_LINKS: { icon: IconDefinition; url: string }[] = [
  {
    icon: faGithub,
    url: "https://github.com/stefmolin",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/stefanie-molin",
  },
  {
    icon: faXTwitter,
    url: `https://twitter.com/${TWITTER_HANDLE.replace("@", "")}`,
  },
  { icon: faEnvelopeOpenText, url: NEWSLETTER_URL },
];

type Props = {
  className?: string;
  size?: SizeProp;
};

const FollowButtons = ({ className, size = "lg" }: Props) => {
  const linkProps = {
    className: "text-slate-600 hover:text-slate-800",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const makeLink = (url: string, icon: IconDefinition) => (
    <a key={/https:\/\/(.+)\./.exec(url)[1]} href={url} {...linkProps}>
      <FontAwesomeIcon icon={icon} size={size} fixedWidth />
    </a>
  );
  return (
    <div
      className={classNames(
        className,
        "space-x-2 flex items-center justify-center"
      )}>
      {...FOLLOW_LINKS.map(({ url, icon }) => makeLink(url, icon))}
    </div>
  );
};

export default FollowButtons;
