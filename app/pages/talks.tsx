import { NextSeo } from 'next-seo';
import Container from '../components/sections/container';
import Layout from '../components/page-layout/layout';
import { usePageURL } from '../lib/hooks/page-url';
import { getImageLink } from '../lib/images';
import CONTENT_LINKS from '../data/content-links';
import PresentationPreview from '../components/presentations/presentation-preview';
import TALK_PAGES from '../data/talks';
import { getLivePresentations } from '../lib/events';
import PresentationListing from '../components/presentations/presentation-listing';
import { type TalkCard } from '../interfaces/talk';

export default function Talks() {
  const contentClass = 'talk';
  return (
    <PresentationListing
      contentClass={contentClass}
      description="A listing of conference talks developed by Stefanie Molin."
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
