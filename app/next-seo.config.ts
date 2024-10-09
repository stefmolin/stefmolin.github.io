import { DefaultSeoProps } from 'next-seo';
import { HOME_URL, TWITTER_HANDLE } from './data/constants';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: HOME_URL,
    siteName: 'Stefanie Molin',
    profile: {
      firstName: 'Stefanie',
      lastName: 'Molin',
    },
  },
  themeColor: '#000',
  titleTemplate: '%s | Stefanie Molin',
  twitter: {
    handle: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
    cardType: 'summary',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Stefanie Molin',
    },
    {
      name: 'referrer',
      content: 'origin',
    },
    {
      name: 'keywords',
      content: 'technology, blog, articles, workshops, books, Python, data science',
    },
  ],
  additionalLinkTags: [
    {
      href: 'https://github.com/stefmolin',
      rel: 'me',
    },
    {
      href: 'https://webmention.io/stefaniemolin.com/webmention',
      rel: 'webmention',
    },
  ],
};

export default config;
