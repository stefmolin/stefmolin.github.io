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
      content: 'strict-origin-when-cross-origin',
    },
    {
      name: 'keywords',
      content: 'technology, blog, articles, workshops, books, Python, data science',
    },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon/favicon.ico' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', href: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'icon', href: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    {
      rel: 'icon',
      href: '/favicon/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      href: 'https://github.com/stefmolin',
      rel: 'me',
      keyOverride: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/stefanie-molin/',
      rel: 'me',
      keyOverride: 'LinkedIn',
    },
    {
      href: 'https://x.com/StefanieMolin',
      rel: 'me',
      keyOverride: 'X',
    },
    {
      href: 'https://bsky.app/profile/stefaniemolin.com',
      rel: 'me',
      keyOverride: 'BlueSky',
    },
    {
      href: 'https://webmention.io/stefaniemolin.com/webmention',
      rel: 'webmention',
    },
  ],
};

export default config;
