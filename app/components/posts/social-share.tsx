import {
  BlueskyIcon,
  BlueskyShareButton,
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon as LinkedInIcon,
  LinkedinShareButton as LinkedInShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';
import { BLUESKY_HANDLE, HOME_URL, TWITTER_HANDLE } from '../../data/constants';

type Props = {
  iconSize?: number;
  url: string;
  image: string;
  emailSubject: string;
  emailBody: string;
  hashtags: string[];
  postTitle: string;
  postSummary: string;
  roundedIcons?: boolean;
};

const SocialShareButtons = ({
  url,
  image,
  emailSubject,
  emailBody,
  hashtags,
  postTitle,
  postSummary,
  iconSize = 35,
  roundedIcons,
}: Props) => {
  const iconProps = { round: roundedIcons, size: iconSize };
  const encodedURL = encodeURI(url);
  const cleanedHashtags = hashtags.map((x) => x.replaceAll(/(-| )/g, ''));

  const buttonStyle = 'hover:opacity-50';

  return (
    <>
      <div className={buttonStyle}>
        <EmailShareButton url={encodedURL} subject={emailSubject} body={emailBody}>
          <EmailIcon {...iconProps} bgStyle={{ fill: 'teal' }} />
        </EmailShareButton>
      </div>
      <div className={buttonStyle}>
        <FacebookShareButton url={encodedURL} hashtag={`#${cleanedHashtags[0]}`}>
          <FacebookIcon {...iconProps} />
        </FacebookShareButton>
      </div>
      <div className={buttonStyle}>
        <LinkedInShareButton
          url={encodedURL}
          title={postTitle}
          summary={postSummary}
          source={HOME_URL}
        >
          <LinkedInIcon {...iconProps} />
        </LinkedInShareButton>
      </div>
      <div className={buttonStyle}>
        <PinterestShareButton url={encodedURL} description={postSummary} media={image}>
          <PinterestIcon {...iconProps} />
        </PinterestShareButton>
      </div>
      <div className={buttonStyle}>
        <RedditShareButton url={encodedURL} title={postTitle}>
          <RedditIcon {...iconProps} />
        </RedditShareButton>
      </div>
      <div className={buttonStyle}>
        <BlueskyShareButton
          url={encodedURL}
          title={`${postTitle} by ${BLUESKY_HANDLE} #${cleanedHashtags.join(' #')}`}
        >
          <BlueskyIcon {...iconProps} />
        </BlueskyShareButton>
      </div>
      <div className={buttonStyle}>
        <TwitterShareButton
          url={encodedURL}
          title={`${postTitle} by ${TWITTER_HANDLE}`}
          hashtags={cleanedHashtags}
          related={[TWITTER_HANDLE]}
        >
          <XIcon {...iconProps} />
        </TwitterShareButton>
      </div>
      <div className={buttonStyle}>
        <WhatsappShareButton url={encodedURL} title={postTitle}>
          <WhatsappIcon {...iconProps} />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default SocialShareButtons;
