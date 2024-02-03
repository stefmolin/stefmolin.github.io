import { HOME_URL } from './constants';

export const getImageLink = (imageLink: string) =>
  imageLink.startsWith('/') ? `${HOME_URL}${imageLink}` : imageLink;
