import type Workshop from '../../interfaces/workshop';
import MarkdownSection from '../sections/markdown-section';

export default function WorkshopSummary({ workshop }: { workshop: Workshop }) {
  return (
    <div className="mx-4">
      {workshop.coverImage && (
        <img
          src={workshop.coverImage.src}
          alt={workshop.title}
          className="md:float-left md:mr-5 my-2 mx-auto max-w-64 object-cover"
        />
      )}

      <div>
        {workshop.description.map((text, index) => (
          <MarkdownSection key={index}>{text}</MarkdownSection>
        ))}
      </div>
    </div>
  );
}
