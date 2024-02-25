import { DefaultSeoProps } from 'next-seo';
import { HOME_OG_IMAGE, HOME_URL, TWITTER_HANDLE } from './data/constants';

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
    images: [
      {
        url: HOME_OG_IMAGE.src,
        width: HOME_OG_IMAGE.width,
        height: HOME_OG_IMAGE.height,
        alt: HOME_OG_IMAGE.alt,
      },
    ],
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
