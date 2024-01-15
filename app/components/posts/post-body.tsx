import markdownStyles from "../markdown-styles.module.css";
import { ReactElement } from "react";
import { Tweet } from "react-tweet";

type Props = {
  content: string;
  children?: ReactElement[];
};

const PostBody = ({ content, children }: Props) => {
  const tweetEmbedPlaceholder = /(\{TWEET_ID="(?:\d+)"\})/g;
  const contents = content.split(tweetEmbedPlaceholder).map((content) => {
    let tweet = tweetEmbedPlaceholder.exec(content);
    if (tweet)
      return (
        <div className="flex justify-center">
          <Tweet id={/\d+/.exec(tweet[1])[0]} />
        </div>
      );
    return (
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }} // TODO: can this be done differently?
        suppressHydrationWarning
      />
    );
  });

  return (
    <div className="max-w-2xl mx-auto">
      {/* The first value here determines the width of the text in the article
      https://tailwindcss.com/docs/max-width */}
      {...contents}
      {...children}
    </div>
  );
};

export default PostBody;
