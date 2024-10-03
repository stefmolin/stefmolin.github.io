import { useRouter } from 'next/router';
import { HOME_URL } from '../../data/constants';

export const usePageURL = () => {
  const router = useRouter();
  const path = router.asPath.split('?')[0];
  return `${HOME_URL}${path}`;
};
