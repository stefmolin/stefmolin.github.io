import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import PresentationPreview from '../../components/presentations/presentation-preview';
import Container from '../../components/sections/container';
import CONTENT_LINKS from '../../data/content-links';
import WORKSHOP_PAGES from '../../data/workshops';
import { getLivePresentations } from '../../lib/events';
import { usePageURL } from '../../lib/hooks/page-url';
import { getImageLink } from '../../lib/images';

// TODO: decide on the featured topic/technology at the bottom left of the card
// TODO: decide whether to put a combined version of the map at the bottom (could maybe highlight the workshops when clicking on a pin for a spot they were presented at)
// in which case I can include a custom version of the map component in components/workshops/ which embeds the label logic

export default function Index() {
  const preview = false;
  const seoImage = CONTENT_LINKS.WORKSHOPS.image;
  const pageTitle = 'Workshops';
  const pastSessions = getLivePresentations({
    contentClass: 'workshop',
  })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map(({ presentation }) => presentation.title);
  return (
    <Layout preview={preview}>
      <Container>
        <NextSeo
          title={pageTitle}
          description="A listing of workshops created by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: 'Workshops created by Stefanie Molin',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          <h2 className="text-xl py-2">A listing of workshops I've developed.</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5">
            {WORKSHOP_PAGES.sort(
              (a, b) =>
                pastSessions.indexOf(a.workshop.title) - pastSessions.indexOf(b.workshop.title),
            ).map(({ workshop }) => (
              <PresentationPreview
                key={workshop.title}
                slug={workshop.repo}
                title={workshop.title}
                subtitle={workshop.subtitle}
                coverImage={workshop.coverImage}
                description={[workshop.description[0]]}
                duration={workshop.duration}
                repo={workshop.repo}
                contentClass="workshop"
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
