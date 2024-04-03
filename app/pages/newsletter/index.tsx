import EmbeddedPage from '../../components/page-layout/embed';
import { NEWSLETTER_URL } from '../../data/constants';

export default function NewsletterSignUpPage() {
  return (
    <EmbeddedPage
      pageTitle="Newsletter"
      src={NEWSLETTER_URL}
      description="Sign up for Stefanie Molin's newsletter to be notified of new posts, updates, and events."
    />
  );
}
