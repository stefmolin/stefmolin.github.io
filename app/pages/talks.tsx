import CONTENT_LINKS from '../data/content-links';
import TALK_PAGES from '../data/talks';
import PresentationListing from '../components/presentations/presentation-listing';
import PresentationPreview from '../components/presentations/presentation-preview';
import { type TalkCard } from '../interfaces/talk';

export default function Talks() {
  const contentClass = 'talk';
  return (
    <PresentationListing
      contentClass={contentClass}
      description={
        'A complete listing of conference talks developed by Stefanie Molin with links to all materials.'
      }
      generatePreview={({ talk, seeAlso }: TalkCard) => (
        <PresentationPreview
          key={talk.title}
          slug={talk.slidesLink}
          title={talk.title}
          coverImage={talk.coverImage}
          description={talk.description}
          duration={talk.duration}
          seeAlso={seeAlso}
          contentClass={contentClass}
        />
      )}
      pages={TALK_PAGES}
      pageTitle="Talks"
      pageSubtitle="A listing of my conference talks."
      seoImage={CONTENT_LINKS.TALKS.image}
      seoImageAltTextFallback="Conference talks developed by Stefanie Molin."
    />
  );
}
