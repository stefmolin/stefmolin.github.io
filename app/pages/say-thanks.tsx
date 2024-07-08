import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faAward,
  faBook,
  faCoffee,
  faEnvelopeOpenText,
  faHeart,
  faMobileScreen,
  faPaintBrush,
  faPen,
  faPodcast,
  faShare,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import SectionSeparator from '../components/dividers/section-separator';
import ExternalLink from '../components/links/external-link';
import Layout from '../components/page-layout/layout';
import Container from '../components/sections/container';
import { AMAZON_LINKS, GITHUB_PROFILE, LINKEDIN_PROFILE, TWITTER_PROFILE } from '../data/constants';

interface LinkSectionProps {
  title: string;
  links: React.ReactNode[];
}

const LinkSection = ({ links, title }: LinkSectionProps) => (
  <div className="space-y-4">
    <h2 className="text-2xl text-center md:text-left">{title}</h2>
    <ul className="md:pl-5 space-y-5 sm:space-y-2">
      {links.map((link, index) => (
        <li
          key={index}
          className={classNames(
            'flex flex-col sm:flex-row w-full',
            'items-center justify-center sm:justify-start',
            'text-center sm:text-left',
            'space-x-2',
          )}
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default function SayThanks() {
  const underlinedLinkClassName =
    'py-px underline font-bold decoration-yellow-400 hover:text-slate-700';
  return (
    <Layout seoPageTitle="Want to let me know that you appreciate my content?">
      <NextSeo
        title="Say Thanks"
        description={
          "Has Stefanie Molin's content been helpful to you? Here are some ways to let her know."
        }
      />
      <Container>
        <div className="-mt-8 pb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center">Ways To Show Your Appreciation</h1>
          <div className="md:px-6 space-y-10 mt-5 text-lg">
            <p>
              All of my content is made during my free time outside of my full-time job. Knowing
              that the content is appreciated helps motivate me to continue making it. If my content
              has helped you in any way, please consider helping me out.
            </p>
            <LinkSection
              title="Help me grow my audience"
              links={[
                <>
                  <FontAwesomeIcon icon={faUserPlus} fixedWidth className="sm:pl-px sm:-pr-px" />
                  <span>
                    <b>Follow me</b> on social media:{' '}
                    <ExternalLink className={underlinedLinkClassName} href={GITHUB_PROFILE}>
                      GitHub
                    </ExternalLink>
                    ,{' '}
                    <ExternalLink className={underlinedLinkClassName} href={LINKEDIN_PROFILE}>
                      LinkedIn
                    </ExternalLink>
                    ,{' '}
                    <ExternalLink className={underlinedLinkClassName} href={TWITTER_PROFILE}>
                      Twitter
                    </ExternalLink>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faShare} fixedWidth />
                  <span>
                    <b>Share my content</b> with your friends, family, and colleagues.
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth />
                  <span>
                    <Link className={underlinedLinkClassName} href="/newsletter">
                      Sign up for my newsletter
                    </Link>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faPodcast} fixedWidth />
                  <span>
                    <Link className={underlinedLinkClassName} href="/contact">
                      Invite me
                    </Link>{' '}
                    to be a guest on your podcast or speak at your{' '}
                    <Link className={underlinedLinkClassName} href="/events">
                      event
                    </Link>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faComment} fixedWidth />
                  <span>
                    <Link className={underlinedLinkClassName} href="/feedback">
                      Provide your feedback
                    </Link>{' '}
                    on a talk or workshop.
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faPen} fixedWidth />
                  <span>
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href={AMAZON_LINKS.PANDAS_BOOK_2}
                    >
                      Write an Amazon review
                    </ExternalLink>{' '}
                    for one of my{' '}
                    <Link className={underlinedLinkClassName} href="/books">
                      books
                    </Link>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faAward} fixedWidth className="sm:px-1" />
                  <span>
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://www.python.org/psf/fellows/"
                    >
                      Nominate me
                    </ExternalLink>{' '}
                    to be recognized as a Fellow of the Python Software Foundation. Please use{' '}
                    <em>psf@stefaniemolin.com</em> as the email address.
                  </span>
                </>,
              ]}
            />
            <SectionSeparator className="my-10 sm:hidden" />
            <LinkSection
              title="Make a purchase"
              links={[
                <>
                  <FontAwesomeIcon icon={faGithub} fixedWidth />
                  <span>
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://github.com/sponsors/stefmolin"
                    >
                      Sponsor me on GitHub
                    </ExternalLink>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faCoffee} fixedWidth />
                  <span>
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://www.buymeacoffee.com/stefanie.molin"
                    >
                      Buy me a coffee
                    </ExternalLink>
                    .
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faBook} fixedWidth />
                  <span>
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href={AMAZON_LINKS.PANDAS_BOOK_2}
                    >
                      Buy my book
                    </ExternalLink>
                    .
                  </span>
                </>,
              ]}
            />
            <SectionSeparator className="my-10 sm:hidden" />
            <LinkSection
              title="Use my referral links"
              links={[
                <>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth className="sm:pr-px" />
                  <span>
                    My{' '}
                    <Link className={underlinedLinkClassName} href="/newsletter">
                      newsletter
                    </Link>{' '}
                    is powered by{' '}
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://convertkit.com?lmref=yvTxbA"
                    >
                      ConvertKit
                    </ExternalLink>
                    . They also offer a{' '}
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://app.convertkit.com/users/signup?plan=free-limited&lmref=yvTxbA"
                    >
                      free plan
                    </ExternalLink>{' '}
                    if you are just getting started.
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faPaintBrush} fixedWidth />
                  <span>
                    Make free AI art with{' '}
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://creator.nightcafe.studio/?ru=2MN1aDPMECSkEmpzKUuMHvvxqlY2"
                    >
                      NightCafe Studio
                    </ExternalLink>
                    . All AI-generated art on my website was made with NightCafe.
                  </span>
                </>,
                <>
                  <FontAwesomeIcon icon={faMobileScreen} fixedWidth className="sm:px-1" />
                  <span>
                    Having reliable cell service when I travel is a must. I use{' '}
                    <ExternalLink
                      className={underlinedLinkClassName}
                      href="https://g.co/fi/r/7K4887"
                    >
                      Google Fi Wireless
                    </ExternalLink>
                    . We both get a $20 credit when you sign up with code <b>7K4887</b>.
                  </span>
                </>,
              ]}
            />
          </div>
          <SectionSeparator className="my-10 sm:hidden" />
          <div className="text-2xl md:text-5xl sm:mt-20 flex flex-col items-center justify-center text-center tracking-tight">
            <h2 className="mb-2 sm:mb-4">Thank you for your support!</h2>
            <FontAwesomeIcon icon={faHeart} beat className="text-slate-500" />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
