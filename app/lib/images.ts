import { HOME_URL } from '../data/constants';

export const getImageLink = (imageLink: string) =>
  imageLink.startsWith('/') ? `${HOME_URL}${imageLink}` : imageLink;
