import { CSSProperties } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/page-layout/layout';

export default function EmbeddedPage({
  description,
  pageTitle,
  src,
  noindex,
  style,
}: {
  description: string;
  pageTitle: string;
  src: string;
  noindex?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Layout isIFrame>
      <NextSeo title={pageTitle} description={description} noindex={noindex} />
      <iframe
        src={src}
        className="h-screen w-screen"
        referrerPolicy="strict-origin-when-cross-origin"
        style={style}
      />
    </Layout>
  );
}
