import EmbeddedPage from '../../components/page-layout/embed';
import { NEWSLETTER_URL } from '../../data/constants';

export default function NewsletterProfilePage() {
  return (
    <EmbeddedPage
      pageTitle="Newsletter Profile"
      src={`${NEWSLETTER_URL}/profile`}
      description={
        "More information about Stefanie Molin's newsletter. Subscribers will be notified via " +
        'email of new posts, updates, and events.'
      }
    />
  );
}
