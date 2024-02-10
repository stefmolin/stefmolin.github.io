import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type Workshop from '../../interfaces/workshop';
import markdownStyles from '../../styles/markdown-styles.module.css';

export default function WorkshopSummary({ workshop }: { workshop: Workshop }) {
  return (
    <div className="mx-4">
      <img
        src={workshop.coverImage}
        alt={workshop.title}
        className="md:float-left md:mr-5 my-2 mx-auto max-w-64 object-cover"
      />

      <div>
        {workshop.description.map((text, index) => (
          <Markdown key={index} className={markdownStyles['markdown']} remarkPlugins={[remarkGfm]}>
            {text}
          </Markdown>
        ))}
      </div>
    </div>
  );
}
