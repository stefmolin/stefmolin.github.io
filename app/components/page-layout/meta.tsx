import { ReactElement } from 'react';
import Head from 'next/head';
import { HOME_URL } from '../../data/constants';

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
      {/* <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" /> */}
      {/* <meta name="msapplication-TileColor" content="#000000" /> */}
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      {/* <meta name="theme-color" content="#ffffff" /> */}
    </Head>
  );
};

export default Meta;
