import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCoffee,
  faGraduationCap,
  faMicrophoneLines,
  faMusic,
  faPlaneDeparture,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import FancyDivider from '../components/dividers/fancy-divider';
import SectionSeparator from '../components/dividers/section-separator';
import FollowButtons from '../components/follow';
import ExternalLink from '../components/links/external-link';
import Layout from '../components/page-layout/layout';
import RelatedContentSection from '../components/related-content/related-content';
import Container from '../components/sections/container';
import { HEADSHOT } from '../data/constants';
import CONTENT_LINKS from '../data/content-links';

const relatedContent: RelatedContentLink[] = [
  CONTENT_LINKS.ARTICLES,
  CONTENT_LINKS.BLOG,
  CONTENT_LINKS.BOOKS,
  CONTENT_LINKS.EVENTS,
  CONTENT_LINKS.INTERVIEWS,
  CONTENT_LINKS.TALKS,
  CONTENT_LINKS.WORKSHOPS,
];

const ICON_MAPPING = {
  blog: faRss,
  code: faCode,
  education: faGraduationCap,
  food: faCoffee,
  leisure: faMusic,
  speak: faMicrophoneLines,
  travel: faPlaneDeparture,
};

const AboutMeSection = ({
  children,
  flip = false,
  icon,
}: {
  children: React.ReactNode;
  flip?: boolean;
  icon: keyof typeof ICON_MAPPING;
}) => {
  const symbol = (
    <FontAwesomeIcon
      icon={ICON_MAPPING[icon]}
      className="text-6xl lg:text-7xl group-hover:text-slate-400"
      fixedWidth
    />
  );
  return (
    <>
      <SectionSeparator className="hidden lg:flex" />
      <div
        className={classNames('group flex flex-col items-center justify-evenly my-0', {
          'lg:flex-row': !flip,
          'lg:flex-row-reverse': flip,
        })}
      >
        <FancyDivider className="lg:hidden mb-5">
          <div className="mx-5">{symbol}</div>
        </FancyDivider>
        <div className="hidden mx-5 lg:flex">{symbol}</div>
        <div
          className={classNames('text-xl space-y-2 mx-2', {
            'lg:ml-4 lg:mr-2': flip,
            'lg:ml-2 lg:mr-4': !flip,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default function AboutMe() {
  const pageTitle = 'About Me';
  const internalLink = (href: string, text: string) => (
    <Link href={href} className="font-bold underline text-slate-500 hover:text-black">
      {text}
    </Link>
  );
  const externalLink = (href: string, text: string, className?: string) => (
    <ExternalLink href={href} className={classNames('font-bold hover:underline', className)}>
      {text}
    </ExternalLink>
  );

  return (
    <Layout>
      <NextSeo title={pageTitle} description="About Stefanie Molin." />
      <Container>
        <div className="-mt-10 mb-20 max-w-5xl mx-auto bg-white">
          <div className="mx-5 lg:mx-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src={HEADSHOT}
                className="w-48 h-48 rounded-full object-cover mb-2"
                alt="Picture of Stefanie Molin."
              />
            </div>
            <div className="space-y-5 text-center">
              <p className="text-3xl">
                My name is <b className="text-nowrap">Stefanie Molin</b>.
              </p>
              <FollowButtons size="2x" className="px-5" withDivider />
              <p className="text-2xl text-center mx-2">
                I am a <b>full-stack software engineer</b> and <b>content creator</b>, passionate
                about helping people of all levels improve their data science and computer science
                skills. I write {internalLink('/books', 'books')} and{' '}
                {internalLink('/articles', 'articles')}, develop free{' '}
                {internalLink('/workshops', 'workshops')}, and speak internationally at technology{' '}
                {internalLink('/events/conferences', 'conferences')}.
              </p>
            </div>

            <div className="text-xl space-y-5 mt-5">
              <div className="space-y-10">
                <AboutMeSection icon="travel" flip>
                  <p>
                    I am an <b>avid traveler</b> based in the <b>New York City</b> metropolitan
                    area. I prefer to travel internationally to explore the world, and I have
                    traveled to 40 countries so far. My most recent trip was to{' '}
                    <b>Egypt and Jordan</b>. I speak <b>English</b> and <b>Spanish</b> fluently,
                    with some <b>survival French</b>. I would like to learn <b>Italian</b>.
                  </p>
                </AboutMeSection>
                <AboutMeSection icon="food">
                  <p>
                    I <span className="line-through">like</span> love a good <b>espresso</b>{' '}
                    (particularly, black, in a flat white, or in an espresso martini). My{' '}
                    {externalLink(
                      'https://amzn.to/3OR5FaR',
                      'Nespresso machine',
                      'underline text-slate-500 hover:text-black font-normal',
                    )}{' '}
                    is a workhorse. I have a <b>wine</b> collection (with a huge class imbalance
                    favoring red). And as far as chocolate goes, I firmly believe that{' '}
                    <b>dark chocolate</b> is far superior to milk and white. I've never been a fan
                    of donuts or cared too much for bagels, and I can't stand the smell of bacon.
                  </p>
                </AboutMeSection>
                <AboutMeSection icon="leisure" flip>
                  <p>
                    I enjoy <b>listening to a variety of musical genres</b> (in no particular order:
                    disco, rock, 80s music, jazz, 90s/00s pop, classical, reggaeton, salsa),
                    depending on my mood. I also enjoy <b>reading fiction</b> (it's another form of
                    travel for me) &ndash; although, I don't have as much time for it as I would
                    like.
                  </p>
                </AboutMeSection>
                <AboutMeSection icon="education">
                  <>
                    <p>
                      I completed my undergraduate degree at <b>Columbia University</b> (
                      <b>BS in Operations Research</b>). After graduation, I joined the workforce,
                      but I still hadn't found my passion. Data science and computer science began
                      to interest me more and more &ndash; particularly their intersection.
                      Concurrently, I completed my <b>MBA</b> with <b>Quantic School of Business</b>
                      .
                    </p>
                    <p>
                      Later on, I was recruited for a role as a software engineer with a heavy data
                      focus. While in this role, I earned my <b>MS in Computer Science</b> from{' '}
                      <b>Georgia Tech</b>.
                    </p>
                    <p>
                      I currently work as a <b>full-stack software engineer</b> and couldn't be
                      happier &ndash; I have found my passion.
                    </p>
                  </>
                </AboutMeSection>
                <AboutMeSection icon="code" flip>
                  <p>
                    {externalLink('https://www.python.org/', 'Python')} is my programming language
                    of choice. For front-end work, I use{' '}
                    {externalLink('https://react.dev/', 'React')} (with{' '}
                    {externalLink('https://www.typescriptlang.org/', 'TypeScript')}). This website
                    is built with {externalLink('https://nextjs.org/', 'Next.js')} and{' '}
                    {externalLink('https://tailwindcss.com/', 'Tailwind CSS')}. I write articles and
                    blog posts in <b>Markdown</b>. I also use <b>Bash</b> and <b>SQL</b> on a
                    somewhat-regular basis and dabble in{' '}
                    {externalLink('https://d3js.org/', 'D3.js')} for interactive data
                    visualizations.
                  </p>
                </AboutMeSection>
                <AboutMeSection icon="speak">
                  <p>
                    If you would like to <b>invite me to speak at your event</b> or{' '}
                    <b>be a guest on your podcast</b>, please{' '}
                    {internalLink('/contact', 'reach out')}.
                  </p>
                </AboutMeSection>
                <AboutMeSection icon="blog" flip>
                  <p>
                    You can {internalLink('/blog', 'check out my blog')} to learn more about me as a
                    person. There, I'll be writing about things I'm working on, music I'm listening
                    to, the adventures and misadventures that happen during my travels, and more.
                  </p>
                </AboutMeSection>
                <SectionSeparator className="my-10" />
              </div>
            </div>

            <RelatedContentSection
              title="Suggested Links"
              titleClassName="text-3xl text-center my-5"
              relatedContent={relatedContent}
              relatedContentClassName="pt-2"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
