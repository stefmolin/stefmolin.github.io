import Head from "next/head";
import { HOME_OG_IMAGE_URL, TWITTER_HANDLE } from "../lib/constants";

type Props = {
  description: string;
};

const Meta = ({ description }: Props) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />

      <meta name="author" content="Stefanie Molin" />
      <meta name="description" content={description} />

      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/stefanie-molin"
      />
    </Head>
  );
};

export default Meta;
