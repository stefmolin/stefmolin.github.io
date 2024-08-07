import DurationIndicator, { type DurationIndicatorProps } from '../datetime/duration-indicator';
import ResourceLink, { type ResourceLinkProps } from '../links/resource-link';
import type SEOImage from '../../interfaces/seo-image';
import MarkdownSection from './markdown-section';
import PreviewCard, { type PreviewCardProps } from '../cards/preview-card';

interface PreviewSectionProps
  extends Omit<ResourceLinkProps, 'children'>,
    DurationIndicatorProps,
    Pick<PreviewCardProps, 'id'> {
  bottomLeft?: React.ReactNode;
  coverImage: SEOImage | string | null;
  coverImageAltText: string;
  description: string[];
  subtitle: React.ReactNode;
  title: React.ReactNode;
}

export default function PreviewSection({
  bottomLeft,
  coverImage,
  coverImageAltText,
  description,
  duration,
  id,
  linkClass,
  resourceLink,
  subtitle,
  title,
}: PreviewSectionProps) {
  return (
    <PreviewCard
      id={id}
      header={
        <>
          <ResourceLink linkClass={linkClass} resourceLink={resourceLink}>
            {title}
          </ResourceLink>
          <div className="line-clamp-2">{subtitle}</div>
        </>
      }
      body={
        <div>
          {coverImage && (
            <ResourceLink linkClass={linkClass} resourceLink={resourceLink}>
              <img
                src={typeof coverImage === 'string' ? coverImage : coverImage.src}
                alt={coverImageAltText}
                className="md:float-left md:mr-5 mb-2 mt-1.5 mx-auto max-w-40 sm:max-w-64 object-cover"
              />
            </ResourceLink>
          )}
          <div className="md:-mt-7 sm:-mb-4 line-clamp-6 sm:line-clamp-none">
            {description.map((paragraph, index) => (
              <MarkdownSection key={index}>{paragraph}</MarkdownSection>
            ))}
          </div>
        </div>
      }
      footer={
        <>
          <div className="flex flex-row items-center">{bottomLeft}</div>
          <div className="flex flex-row items-center pt-6 pb-2 md:py-0">
            <DurationIndicator duration={duration} />
          </div>
          <hr className="w-3/4 items-center md:hidden" />
        </>
      }
      footerClassName="md:flex-row w-full"
    />
  );
}
