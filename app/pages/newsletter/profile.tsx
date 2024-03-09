import EmbeddedPage from '../../components/page-layout/embed';
import { NEWSLETTER_URL } from '../../data/constants';

export default function NewsletterProfilePage() {
  return (
    <EmbeddedPage
      pageTitle="Newsletter Profile"
      src={`${NEWSLETTER_URL}/profile`}
      description="More about Stefanie Molin's newsletter."
    />
  );
}
