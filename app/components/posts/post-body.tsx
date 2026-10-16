import { ReactNode } from 'react';
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
  return (
    <div className="lg:max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
        suppressHydrationWarning
      />
      {children}
    </div>
  );
};

export default PostBody;
