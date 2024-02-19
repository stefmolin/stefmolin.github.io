import classNames from 'classnames';
import Alert from './alert';
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
  return (
    <>
      <Meta />
      <div className={classNames('min-h-screen', className)} style={styleProps}>
        <Header />
        {/* <Alert preview={preview} /> TODO: this probably can be removed */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
