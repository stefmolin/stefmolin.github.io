import { ReactElement } from 'react';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL, HOME_URL, TWITTER_HANDLE } from '../data/constants';

const getFeedLinks = () => {
  const links: ReactElement[] = [];
  ['articles', 'blog'].forEach((feedType) => {
    links.push(
      ...['Atom', 'JSON', 'RSS'].map((tech) => {
        let feedFile;
        let headerType;
        if (tech === 'JSON') {
          feedFile = `${feedType}.json`;
          headerType = 'json';
        } else {
          const lowerTech = tech.toLowerCase();
          feedFile = `${feedType}-${lowerTech}.xml`;
          headerType = `${lowerTech}+xml`;
        }
        const href = `/feeds/${feedFile}`;
        return (
          <link
            key={href}
            href={href}
            type={`application/${headerType}`}
            rel="alternate"
            title={`${tech} feed for ${HOME_URL}/${feedType}`}
          />
        );
      }),
    );
  });

  return links;
};

const Meta = () => {
  return (
    <Head>
      {getFeedLinks()}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      // TODO: these can move to the SEO config once finalized
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    </Head>
  );
};

export default Meta;
