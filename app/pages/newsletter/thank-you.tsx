import EmbeddedPage from '../../components/page-layout/embed';
import { NEWSLETTER_URL } from '../../data/constants';

export default function NewsletterThankYouPage() {
  return <EmbeddedPage pageTitle="Thank You!" src={`${NEWSLETTER_URL}/thank-you`} />;
}
