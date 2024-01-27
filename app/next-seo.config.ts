import { DefaultSeoProps } from 'next-seo';
import { HOME_OG_IMAGE_URL, HOME_URL, TWITTER_HANDLE } from './lib/constants';

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
    cardType: 'summary_large_image',
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
};

export default config;
