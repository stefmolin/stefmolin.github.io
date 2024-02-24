import classNames from 'classnames';
import { useState } from 'react';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
  className?: string;
  styleProps?: Record<string, string | number>;
};

const Layout = ({ children, className, styleProps }: Props) => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  return (
    <>
      <Meta />
      <div className={classNames('min-h-screen', className)} style={styleProps}>
        <Header isOpen={showMenuOverlay} setIsOpen={setShowMenuOverlay} />
        {!showMenuOverlay && <main>{children}</main>}
      </div>
      {!showMenuOverlay && <Footer />}
    </>
  );
};

export default Layout;
