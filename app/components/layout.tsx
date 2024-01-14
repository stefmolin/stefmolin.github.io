import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  pageDescription: string;
  children: React.ReactNode;
};

const Layout = ({ preview, pageDescription, children }: Props) => {
  return (
    <>
      <Meta description={pageDescription} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> TODO: this probably can be removed */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
