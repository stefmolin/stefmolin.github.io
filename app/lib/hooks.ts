import { useRouter } from 'next/router';
import { HOME_URL } from '../lib/constants';

export const usePageURL = () => {
  const router = useRouter();
  return `${HOME_URL}${router.asPath}`;
};
