import { NextSeo } from 'next-seo';
import FollowButtons from '../components/follow';
import ExternalLink from '../components/links/external-link';
import Layout from '../components/page-layout/layout';
import Container from '../components/sections/container';
import { HEADSHOT, LINKEDIN_PROFILE } from '../data/constants';

export default function ContactMe() {
  const pageTitle = 'Contact Me';
  return (
    <Layout
      className="bg-cover bg-fixed bg-center pb-20"
      styleProps={{
        backgroundImage: 'url(/assets/events/conferences/conference-badges.jpg)',
      }}
    >
      <NextSeo title={pageTitle} description="Contact Stefanie Molin." />
      <Container className="px-4 sm:px-10">
        <div className="-mt-8 sm:mt-4 max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-2 space-y-4">
            <h1 className="text-3xl sm:text-4xl">{pageTitle}</h1>
            <img src={HEADSHOT} className="h-40 w-40 sm:h-48 sm:w-48 rounded-full" />
          </div>

          <div className="sm:text-lg md:text-xl py-2">
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
          <FollowButtons
            className="text-xl sm:text-2xl md:text-3xl px-1 sm:px-5"
            withDivider
            dividerClassName="pt-5 py-0 sm:py-5"
          />
        </div>
      </Container>
    </Layout>
  );
}
