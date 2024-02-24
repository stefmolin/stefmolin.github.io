import classNames from 'classnames';
import { useState } from 'react';
import Alert from '../alert';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  className?: string;
  styleProps?: Record<string, string | number>;
};

const Layout = ({ preview, children, className, styleProps }: Props) => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  return (
    <>
      <Meta />
      <div className={classNames('min-h-screen', className)} style={styleProps}>
        {/* <Alert preview={preview} /> TODO: this probably can be removed */}
        <Header isOpen={showMenuOverlay} setIsOpen={setShowMenuOverlay} />
        {!showMenuOverlay && <main>{children}</main>}
      </div>
      {!showMenuOverlay && <Footer />}
    </>
  );
};

export default Layout;
