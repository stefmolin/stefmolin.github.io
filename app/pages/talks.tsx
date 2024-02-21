import { NextSeo } from 'next-seo';
import Container from '../components/container';
import Layout from '../components/layout';
import { usePageURL } from '../lib/hooks/page-url';
import { getImageLink } from '../lib/images';
import CONTENT_LINKS from '../data/content-links';
import PresentationPreview from '../components/presentations/presentation-preview';
import TALK_PAGES from '../data/talks';
import { getLivePresentations } from '../lib/events';

export default function Talks() {
  const preview = false;
  const seoImage = CONTENT_LINKS.TALKS.image;
  const pageTitle = 'Talks';
  const pastSessions = getLivePresentations({
    contentClass: 'talk',
  })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map(({ presentation }) => presentation.title);
  return (
    <Layout preview={preview}>
      <Container>
        <NextSeo
          title={pageTitle}
          description="A listing of conference talks developed by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: 'Conference talks developed by Stefanie Molin',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          <h2 className="text-xl py-2">A listing of my conference talks.</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5">
            {TALK_PAGES.sort(
              (a, b) => pastSessions.indexOf(a.talk.title) - pastSessions.indexOf(b.talk.title),
            ).map(({ talk, seeAlso }) => (
              <PresentationPreview
                key={talk.title}
                slug={talk.slidesLink}
                title={talk.title}
                coverImage={talk.coverImage}
                description={talk.description}
                duration={talk.duration}
                seeAlso={seeAlso}
                contentClass="talk"
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
