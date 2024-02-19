import Link from 'next/link';
import type RelatedContentLink from '../interfaces/related-content';

type RelatedContentSectionProps = {
  relatedContent: RelatedContentLink[];
  title?: React.ReactNode | string | null;
  titleClassName?: string;
  relatedContentClassName?: string;
  divClassName?: string;
};

const RelatedContentSection = ({
  relatedContent,
  title = 'Related content',
  titleClassName,
  relatedContentClassName,
  divClassName,
}: RelatedContentSectionProps) => (
  <div key="related-content" className={divClassName}>
    {title && <h2 className={titleClassName ?? 'text-3xl mb-5'}>{title}</h2>}
    <div
      className={
        relatedContentClassName ??
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'
      }
    >
      {relatedContent.map(({ link, contentClass, image, title }, index) => (
        <div key={link} className="flex items-center justify-center hover:scale-110">
          <Link href={link} className="text-slate-500 hover:text-slate-800 cursor-pointer">
            <div
              key={index}
              className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200 w-48 h-48 items-center"
            >
              <div className="flex items-center">
                <img
                  src={image.src}
                  alt={`suggested ${contentClass}`}
                  className="w-48 h-32 object-cover"
                />
              </div>
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-center px-2">{title}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedContentSection;
