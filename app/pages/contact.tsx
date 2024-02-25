import { NextSeo } from 'next-seo';
import Container from '../components/sections/container';
import Layout from '../components/page-layout/layout';
import ExternalLink from '../components/links/external-link';
import { HEADSHOT, LINKEDIN_PROFILE } from '../data/constants';
import FollowButtons from '../components/follow';

export default function ContactMe() {
  const pageTitle = 'Contact Me';
  return (
    <Layout
      className="bg-cover bg-fixed bg-center"
      styleProps={{
        backgroundImage: 'url(/assets/events/conferences/conference-badges.jpg)',
      }}
    >
      <NextSeo title={pageTitle} description="Contact Stefanie Molin." />
      <Container>
        <div className="mt-4 max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-2 space-y-4">
            <h1 className="text-4xl">{pageTitle}</h1>
            <img src={HEADSHOT} className="h-48 w-48 rounded-full" />
          </div>

          <div className="text-lg md:text-xl py-2">
            <p>
              Whether you would like to{' '}
              <span className="font-bold">invite me to speak at your event</span>, have me as a{' '}
              <span className="font-bold">guest on your podcast</span>, or simply{' '}
              <span className="font-bold">share your thoughts on my content</span>, I would love to
              hear from you. The best way to reach me is via{' '}
              <ExternalLink
                href={LINKEDIN_PROFILE}
                className="py-px font-bold underline decoration-yellow-400 hover:text-slate-700"
              >
                LinkedIn
              </ExternalLink>
              .
            </p>
          </div>
          <FollowButtons size="3x" className="px-5" withDivider dividerClassName="py-5" />
        </div>
      </Container>
    </Layout>
  );
}
