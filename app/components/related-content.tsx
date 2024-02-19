import Link from 'next/link';
import type RelatedContentLink from '../interfaces/related-content';
import PageSection, { type PageSectionProps } from './sections/page-section';

interface RelatedContentSectionProps extends Omit<PageSectionProps, 'children'> {
  relatedContent: RelatedContentLink[];
  relatedContentClassName?: string;
}

const RelatedContentSection = ({
  relatedContent,
  title = 'Related content',
  titleClassName,
  relatedContentClassName,
  divClassName,
}: RelatedContentSectionProps) => (
  <PageSection
    id="related-content"
    divClassName={divClassName}
    title={title}
    titleClassName={titleClassName}
  >
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
  </PageSection>
);

export default RelatedContentSection;
