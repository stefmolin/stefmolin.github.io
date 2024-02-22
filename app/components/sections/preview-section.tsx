import DurationIndicator, { type DurationIndicatorProps } from '../datetime/duration-indicator';
import ResourceLink, { type ResourceLinkProps } from '../links/resource-link';
import type SEOImage from '../../interfaces/seo-image';
import MarkdownSection from './markdown-section';

interface PreviewSectionProps extends Omit<ResourceLinkProps, 'children'>, DurationIndicatorProps {
  bottomLeft?: React.ReactNode;
  coverImage: SEOImage;
  description: string[];
  subtitle: React.ReactNode;
  title: string;
}

export default function PreviewSection({
  bottomLeft,
  coverImage,
  description,
  duration,
  linkClass,
  resourceLink,
  subtitle,
  title,
}: PreviewSectionProps) {
  return (
    <div
      id={title.replaceAll(':', '').replaceAll(' ', '-').toLowerCase()}
      className="shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col m-5"
    >
      <div className="flex flex-col justify-evenly space-y-5">
        <div className="flex flex-col items-start">
          <ResourceLink linkClass={linkClass} resourceLink={resourceLink}>
            <h2 className="text-2xl hover:underline">{title}</h2>
          </ResourceLink>
          <h3 className="text-slate-600">{subtitle}</h3>
        </div>
        <div className="lg:pr-5">
          <ResourceLink linkClass={linkClass} resourceLink={resourceLink}>
            <img
              src={coverImage.src}
              alt={title}
              className="md:float-left md:mr-5 mb-2 mx-auto max-w-64 object-cover"
            />
          </ResourceLink>
          {/* TODO: should I float right here since the image is less important? also make it smaller*/}
          <div className="md:-mt-7 -mb-4">
            {description.map((paragraph, index) => (
              <MarkdownSection key={index}>{paragraph}</MarkdownSection>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between w-full">
          <div className="flex flex-row items-center">{bottomLeft}</div>
          <div className="flex flex-row items-center pt-6 pb-2 md:py-0">
            <DurationIndicator duration={duration} />
          </div>
          <hr className="w-3/4 items-center md:hidden" />
        </div>
      </div>
    </div>
  );
}
