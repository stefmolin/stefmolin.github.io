import { NextSeo } from 'next-seo';
import Layout from '../../components/page-layout/layout';

export default function EmbeddedPage({
  description,
  pageTitle,
  src,
  noindex,
}: {
  description: string;
  pageTitle: string;
  src: string;
  noindex?: boolean;
}) {
  return (
    <Layout isIFrame>
      <NextSeo title={pageTitle} description={description} noindex={noindex} />
      <iframe src={src} className="h-screen w-screen" referrerPolicy="same-origin" />
    </Layout>
  );
}
