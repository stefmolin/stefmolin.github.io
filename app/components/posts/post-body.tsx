import { ReactNode } from 'react';
import { Tweet } from 'react-tweet';
import markdownStyles from '../../styles/markdown-styles.module.css';

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
    <div className="lg:max-w-2xl mx-auto">
      {contents}
      {children}
    </div>
  );
};

export default PostBody;
