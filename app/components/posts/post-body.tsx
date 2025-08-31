import { ReactNode } from 'react';
import { Tweet } from 'react-tweet';
import 'prismjs/plugins/command-line/prism-command-line.min.css';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.min.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
import 'prismjs/plugins/treeview/prism-treeview.min.css';
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
        dangerouslySetInnerHTML={{ __html: content }}
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
