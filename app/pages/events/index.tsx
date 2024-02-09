import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import { LIVE_PRESENTATIONS } from '../../data/events';
import SectionSeparator from '../../components/section-separator';
import EventMap from '../../components/events/event-map';
import CONTENT_LINKS from '../../data/content-links';
import { getImageLink } from '../../lib/images';

export default function Index() {
  const preview = false;
  const pageTitle = 'Events';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="" // TODO
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(CONTENT_LINKS.EVENTS.link),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: '', // TODO
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{pageTitle}</h1>
          <EventMap />
          <SectionSeparator className="my-10" />
          <div>
            <h2 className="text-3xl mb-5">Placeholder header</h2>
            short decriptions for conferences and book signing pages with links out
          </div>
        </div>
      </Container>
    </Layout>
  );
}
