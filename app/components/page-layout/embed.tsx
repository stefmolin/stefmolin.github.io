import { NextSeo } from 'next-seo';
import Layout from '../../components/page-layout/layout';
import { HOME_OG_IMAGE } from '../../data/constants';
import { getSeoImageLink } from '../../lib/seo';

export default function EmbeddedPage({
  description,
  pageTitle,
  src,
}: {
  description: string;
  pageTitle: string;
  src: string;
}) {
  return (
    <Layout isIFrame seoPageTitle={`${pageTitle} | Stefanie Molin`}>
      <NextSeo
        title={pageTitle}
        description={description}
        openGraph={{
          images: [
            {
              url: getSeoImageLink(HOME_OG_IMAGE.src, 'New York', pageTitle),
              alt: HOME_OG_IMAGE.alt,
            },
          ],
        }}
      />
      <iframe src={src} className="h-screen w-screen" referrerPolicy="same-origin" />
    </Layout>
  );
}
