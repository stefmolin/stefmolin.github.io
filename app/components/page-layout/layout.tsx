import classNames from 'classnames';
import Script from 'next/script';
import { useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  className?: string;
  styleProps?: Record<string, string | number>;
  isIFrame?: boolean;
};

const Layout = ({ children, className, isIFrame = false, styleProps }: Props) => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  return (
    <>
      <Meta />
      <div className={classNames('min-h-screen', className)} style={styleProps}>
        {!isIFrame && <Header isOpen={showMenuOverlay} setIsOpen={setShowMenuOverlay} />}
        {!showMenuOverlay && <main>{children}</main>}
      </div>
      {!isIFrame && !showMenuOverlay && <Footer />}
      <Script src="https://kit.fontawesome.com/0dd30c21ea.js" crossOrigin="anonymous" />
      <Script src="/copy-code.js" />
      <GoogleAnalytics gaId="G-25389D1SR4" />
    </>
  );
};

export default Layout;
