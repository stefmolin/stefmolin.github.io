import { DateTime } from 'luxon';
import type SEOImage from '../interfaces/seo-image';

export const HEADSHOT = '/assets/avatar.jpeg';
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
export const COPYRIGHT_STATEMENT = `Copyright 2019-${DateTime.now().year}, Stefanie Molin`;
export const GITHUB_PROFILE = 'https://github.com/stefmolin';
export const GITHUB_API = 'https://api.github.com/repos/stefmolin/';
export const LINKEDIN_PROFILE = 'https://linkedin.com/in/stefanie-molin';

export const MAP_PIN = '📍';

export const FLAGS = {
  Canada: '🇨🇦',
  Czechia: '🇨🇿',
  Ireland: '🇮🇪',
  Italy: '🇮🇹',
  Portugal: '🇵🇹',
  Switzerland: '🇨🇭',
  'United Arab Emirates': '🇦🇪',
  'United Kingdom': '🇬🇧',
  'United States of America': '🇺🇸',
};
