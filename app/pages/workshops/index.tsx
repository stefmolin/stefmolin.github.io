import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import { getImageLink } from '../../lib/images';
import WORKSHOP_PAGES from '../../data/workshops';
import CONTENT_LINKS from '../../data/content-links';
import WorkshopPreview from '../../components/workshops/workshop-preview';

// TODO: decide on the featured topic/technology at the bottom left of the card
// TODO: decide whether to put a combined version of the map at the bottom (could maybe highlight the workshops when clicking on a pin for a spot they were presented at)
// in which case I can include a custom version of the map component in components/workshops/ which embeds the label logic

export default function Index() {
  const preview = false;
  const pageTitle = 'Workshops';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="A listing of workshops created by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(CONTENT_LINKS.WORKSHOPS.image),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: 'Workshops created by Stefanie Molin',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          <h2 className="text-xl py-2">A listing of workshops I've developed.</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5">
            {WORKSHOP_PAGES.map(({ workshop }) => (
              <WorkshopPreview key={workshop.title} workshop={workshop} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
