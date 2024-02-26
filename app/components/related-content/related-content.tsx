import classNames from 'classnames';
import type RelatedContentLink from '../../interfaces/related-content';
import PageSection, { type PageSectionProps } from '../sections/page-section';
import CarouselSection from '../sections/carousel-section';
import RelatedContentCard from './related-content-card';

interface RelatedContentSectionProps extends Omit<PageSectionProps, 'children'> {
  relatedContent: RelatedContentLink[];
  relatedContentClassName?: string;
  carouselClassName?: string;
  inset?: boolean; // whether the section will be further inset (shrinks to fewer cards sooner)
}

const RelatedContentSection = ({
  carouselClassName = 'pt-2',
  divClassName,
  inset = false,
  relatedContent,
  relatedContentClassName,
  title = 'Related content',
  titleClassName,
}: RelatedContentSectionProps) => {
  const responsive = {
    lg: {
      breakpoint: { max: Infinity, min: inset ? 1200 : 1024 },
      items: Math.min(4, relatedContent.length),
    },
    md: {
      breakpoint: { max: inset ? 1200 : 1024, min: inset ? 1020 : 800 },
      items: Math.min(3, relatedContent.length),
    },
    sm: {
      breakpoint: { max: inset ? 1020 : 800, min: 464 },
      items: Math.min(2, relatedContent.length),
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <PageSection
      id="related-content"
      divClassName={divClassName}
      title={title}
      titleClassName={titleClassName}
    >
      <CarouselSection
        autoPlaySpeed={5_000}
        carouselClassName={carouselClassName}
        responsive={responsive}
      >
        {relatedContent.map((content) => (
          <div key={content.link} className={classNames('mb-10', relatedContentClassName)}>
            <RelatedContentCard relatedContent={content} />
          </div>
        ))}
      </CarouselSection>
    </PageSection>
  );
};

export default RelatedContentSection;
