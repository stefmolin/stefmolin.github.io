import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownStyles from '../../styles/markdown-styles.module.css';

export default function MarkdownSection({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={className ?? markdownStyles['markdown']}>
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </div>
  );
}
