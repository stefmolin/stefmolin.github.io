import classNames from 'classnames';
import Script from 'next/script';
import { type CSSProperties, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextSeo } from 'next-seo';
import { HOME_OG_IMAGE } from '../../data/constants';
import { usePageURL } from '../../lib/hooks/page-url';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  className?: string;
  styleProps?: CSSProperties;
  isIFrame?: boolean;
};

const Layout = ({ children, className, isIFrame = false, styleProps }: Props) => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);
  const pageURL = usePageURL();

  return (
    <>
      <Meta />
      <NextSeo
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          images: [
            {
              url: HOME_OG_IMAGE.src,
              width: HOME_OG_IMAGE.width,
              height: HOME_OG_IMAGE.height,
              alt: HOME_OG_IMAGE.alt,
            },
          ],
        }}
      />
      <div className={classNames('min-h-screen', className)} style={styleProps}>
        {!isIFrame && <Header isOpen={showMenuOverlay} setIsOpen={setShowMenuOverlay} />}
        {!showMenuOverlay && <main>{children}</main>}
      </div>
      {!isIFrame && !showMenuOverlay && <Footer />}
      {pageURL.includes('/articles') && ( // for code blocks
        <Script src="https://kit.fontawesome.com/0dd30c21ea.js" crossOrigin="anonymous" />
      )}
      <Script src="/copy-code.js" />
      <GoogleAnalytics gaId="G-25389D1SR4" />
      {/* Cloudflare Web Analytics */}
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "86be61058a924ea48c7d4188b3965830"}'
      />
    </>
  );
};

export default Layout;
