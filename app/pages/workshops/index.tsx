import PresentationListing from '../../components/presentations/presentation-listing';
import PresentationPreview from '../../components/presentations/presentation-preview';
import CONTENT_LINKS from '../../data/content-links';
import WORKSHOP_PAGES from '../../data/workshops';

// TODO: highlight the workshops when clicking on a pin for a spot they were presented at
// in which case I can include a custom version of the map component in components/workshops/ which embeds the label logic

export default function Index() {
  const contentClass = 'workshop';
  return (
    <PresentationListing
      contentClass={contentClass}
      description={
        'A complete listing of workshops created by Stefanie Molin with links to all materials.'
      }
      generatePreview={({ workshop }: (typeof WORKSHOP_PAGES)[0]) => (
        <PresentationPreview
          key={workshop.title}
          slug={workshop.repo}
          title={workshop.title}
          subtitle={workshop.subtitle}
          coverImage={workshop.coverImage}
          description={[workshop.description[0]]}
          duration={workshop.duration}
          repo={workshop.coverImage.src.includes('coming-soon') ? undefined : workshop.repo}
          contentClass={contentClass}
        />
      )}
      pages={WORKSHOP_PAGES}
      pageTitle="Workshops"
      pageSubtitle=""
      seoImage={CONTENT_LINKS.WORKSHOPS.image}
      seoImageAltTextFallback="Workshops created by Stefanie Molin."
    />
  );
}
