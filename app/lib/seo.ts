import { HOME_URL } from '../data/constants';

const LAYOUTS = {
  Boston: 'c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1',
  Chicago: '6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4',
  'New York': 'e4b8c678-7bd5-445d-ba03-bfaad510c686/v3',
};

export const getSeoImageLink = (
  image: string,
  layout: keyof typeof LAYOUTS,
  pageTitle: string,
  description: string = '',
) => {
  return (
    'https://ogcdn.net/' +
    `${LAYOUTS[layout]}/` +
    `${HOME_URL.replace('https://', '')}/` +
    `${encodeURIComponent(pageTitle)}/` +
    `${layout === 'Boston' ? `${encodeURI(description)}/` : ''}` +
    `${encodeURIComponent(image)}` +
    '/og.png'
  );
};
