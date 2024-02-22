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
    <Markdown className={className ?? markdownStyles['markdown']} remarkPlugins={[remarkGfm]}>
      {children}
    </Markdown>
  );
}
