import { NextSeo } from 'next-seo';
import Layout from '../../components/page-layout/layout';

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
    <Layout isIFrame>
      <NextSeo title={pageTitle} description={description} />
      <iframe
        src={src}
        allow="same-site"
        className="h-screen w-screen"
        referrerPolicy="same-origin"
      />
    </Layout>
  );
}
