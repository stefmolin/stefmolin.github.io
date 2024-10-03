import classNames from 'classnames';
import Script from 'next/script';
import { useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextSeo } from 'next-seo';
import { HOME_OG_IMAGE } from '../../data/constants';
import { usePageURL } from '../../lib/hooks/page-url';
import { getSeoImageLink } from '../../lib/seo';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  className?: string;
  seoPageTitle?: string;
  styleProps?: Record<string, string | number>;
  isIFrame?: boolean;
};

const Layout = ({
  children,
  className,
  isIFrame = false,
  seoPageTitle = '',
  styleProps,
}: Props) => {
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
              url: getSeoImageLink(HOME_OG_IMAGE.src, 'New York', seoPageTitle),
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
      <Script src="/copy-code.js" />
      <GoogleAnalytics gaId="G-25389D1SR4" />
    </>
  );
};

export default Layout;
