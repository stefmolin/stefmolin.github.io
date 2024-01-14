import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon as LinkedInIcon,
  LinkedinShareButton as LinkedInShareButton,
  // PinterestIcon,
  // PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { HOME_URL, TWITTER_HANDLE } from "../../lib/constants";

type Props = {
  iconSize?: number;
  url: string;
  emailSubject: string;
  emailBody: string;
  hashtags: string[];
  postTitle: string;
  postSummary: string;
  roundedIcons?: boolean;
};

const SocialShareButtons = ({
  url,
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
  const cleanedHashtags = hashtags.map((x) => x.replaceAll(/(-| )/g, ""));

  return (
    <>
      <div>
        <EmailShareButton
          url={encodedURL}
          subject={emailSubject}
          body={emailBody}>
          <EmailIcon {...iconProps} />
        </EmailShareButton>
      </div>
      <div>
        <FacebookShareButton
          url={encodedURL}
          hashtag={`#${cleanedHashtags[0]}`}>
          <FacebookIcon {...iconProps} />
        </FacebookShareButton>
      </div>
      <div>
        <LinkedInShareButton
          url={encodedURL}
          title={postTitle}
          summary={postSummary}
          source={HOME_URL}>
          <LinkedInIcon {...iconProps} />
        </LinkedInShareButton>
      </div>
      <div>
        <RedditShareButton url={encodedURL} title={postTitle}>
          <RedditIcon {...iconProps} />
        </RedditShareButton>
      </div>
      <div>
        <TwitterShareButton
          url={encodedURL}
          title={`${postTitle} by ${TWITTER_HANDLE}`}
          hashtags={cleanedHashtags}
          related={[TWITTER_HANDLE]}>
          <TwitterIcon {...iconProps} />
        </TwitterShareButton>
      </div>
      <div>
        <WhatsappShareButton url={encodedURL} title={postTitle}>
          <WhatsappIcon {...iconProps} />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default SocialShareButtons;
