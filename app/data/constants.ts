import type SEOImage from '../interfaces/seo-image';

export const HEADSHOT = '/assets/portrait.jpeg';
export const HEADSHOT_THUMBNAIL = '/assets/portrait-thumbnail.jpeg';
export const HOME_URL = 'https://stefaniemolin.com';
export const NEWSLETTER_URL = 'https://newsletter.stefaniemolin.com';
export const HOME_OG_IMAGE: SEOImage = {
  src: `${HOME_URL}${HEADSHOT}`,
  width: 800,
  height: 800,
  alt: 'Portrait of Stefanie Molin',
};
export const COVER_IMAGE_PENDING: SEOImage = {
  src: '/assets/coming-soon.png',
  width: 1075,
  height: 647,
};
export const TWITTER_HANDLE = '@StefanieMolin';
export const TWITTER_PROFILE = `https://twitter.com/${TWITTER_HANDLE.replace('@', '')}`;
export const COPYRIGHT_STATEMENT = 'Copyright 2019-YEAR, Stefanie Molin';
export const GITHUB_PROFILE = 'https://github.com/stefmolin';
export const GITHUB_API = 'https://api.github.com/repos/stefmolin/';
export const LINKEDIN_PROFILE = 'https://linkedin.com/in/stefanie-molin';
export const BLUESKY_PROFILE = 'https://bsky.app/profile/stefaniemolin.com';

export const FLAGS = {
  Australia: '🇦🇺',
  Canada: '🇨🇦',
  Colombia: '🇨🇴',
  Czechia: '🇨🇿',
  Estonia: '🇪🇪',
  France: '🇫🇷',
  Ireland: '🇮🇪',
  Italy: '🇮🇹',
  Japan: '🇯🇵',
  Lithuania: '🇱🇹',
  'New Zealand': '🇳🇿',
  Poland: '🇵🇱',
  Portugal: '🇵🇹',
  Switzerland: '🇨🇭',
  Taiwan: '🇹🇼',
  'United Arab Emirates': '🇦🇪',
  'United Kingdom': '🇬🇧',
  'United States of America': '🇺🇸',
};

export const AMAZON_LINKS = {
  NESPRESSO_MACHINE: 'https://amzn.to/3OR5FaR',
  PANDAS_BOOK_1: 'https://amzn.to/4bkJBiq',
  PANDAS_BOOK_2: 'https://amzn.to/3u6v21u',
};
