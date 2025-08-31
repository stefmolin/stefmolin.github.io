import type RelatedContentLink from '../../interfaces/related-content';
import ResourceLink from '../links/resource-link';

interface RelatedContentCardProps {
  relatedContent: RelatedContentLink;
}

export default function RelatedContentCard({ relatedContent }: RelatedContentCardProps) {
  const { contentClass, image, link, title } = relatedContent;
  return (
    <div className="flex flex-row items-center justify-center hover:scale-110">
      <ResourceLink
        resourceLink={{ contentClass, slug: link }}
        className="text-slate-500 hover:text-slate-800 cursor-pointer"
        linkClass="internal"
      >
        <div className="flex flex-col shadow-xs hover:shadow-lg transition-shadow duration-200 w-48 h-48 items-center">
          <div className="flex items-center">
            <img
              src={image.src}
              alt={`suggested ${contentClass}`}
              className="w-48 h-32 object-cover"
            />
          </div>
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-center px-2 line-clamp-2">{title}</h3>
          </div>
        </div>
      </ResourceLink>
    </div>
  );
}
