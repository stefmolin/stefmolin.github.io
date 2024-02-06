import markdownStyles from './markdown-styles.module.css';
import { ReactNode } from 'react';
import { Tweet } from 'react-tweet';

type Props = {
  content: string;
  children?: ReactNode[];
};

const PostBody = ({ content, children }: Props) => {
  const tweetEmbedPlaceholder = /(\{TWEET_ID="(?:\d+)"\})/g;
  const contents = content.split(tweetEmbedPlaceholder).map((content, index) => {
    const tweet = tweetEmbedPlaceholder.exec(content);
    if (tweet)
      return (
        <div key={index} className="flex justify-center -my-6">
          <Tweet id={(/\d+/.exec(tweet[1]) ?? '')[0]} />
        </div>
      );
    return (
      <div
        key={index}
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }} // TODO: can this be done differently?
        suppressHydrationWarning
      />
    );
  });

  return (
    <div className="max-w-2xl mx-auto">
      {/* The first value here determines the width of the text in the article
      https://tailwindcss.com/docs/max-width */}
      {contents}
      {children}
    </div>
  );
};

export default PostBody;
