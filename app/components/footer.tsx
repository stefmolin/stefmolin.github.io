import Container from './container';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCoffee,
  faHeart,
  faLock,
  faRssSquare,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from './avatar';
import SubscribeToNewsletterForm from './subscribe-to-newsletter';
import FollowButtons from './follow';
import Link from 'next/link';

const SitemapLinks = ({ className }: { className?: string }) => {
  // TODO: probably want a way to group by content and keep those together in the column
  // since this fills rows and then columns things that are related can end up far apart when they
  // should be in the same column

  const siteLinks = [
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books' },
    { name: 'Interviews', url: '/interviews' },
    { name: 'Articles', url: '/articles' },
    { name: 'Blog', url: '/blog' },
    { name: 'Talks', url: '/talks' },
    { name: 'Workshops', url: '/workshops' },
    { name: 'Pandas Workshop', url: '/pandas-workshop' },
    { name: 'Data Viz Workshop', url: '/python-data-viz-workshop' },
    { name: 'Data Morph', url: '/data-morph' },
    { name: 'News', url: '/news' },
    { name: 'Events', url: '/events' },
    { name: 'Contact', url: '/contact' },
    // { name: 'Buy Me a Coffee', url: 'https://www.buymeacoffee.com/stefanie.molin' },
  ];
  return (
    <>
      {...siteLinks.map(({ name, url }) => (
        <Link
          key={url}
          href={url}
          className={classNames(className, 'font-bold text-slate-500 hover:text-slate-800')}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

// TODO: take into account the page when determining what to show in the footer
// (tipping only on articles for example)

const FooterLinks = ({ className }: { className?: string }) => {
  const linkProps = {
    className: 'text-slate-600 hover:text-slate-800',
    // target: '_blank',
    // rel: 'noopener noreferrer',
  };
  return (
    <div className={classNames(className, 'space-x-2 items-center')}>
      {/* Follow <FontAwesomeIcon icon={faUserPlus} /> */}
      <Link href="/feeds/articles-rss.xml" {...linkProps}>
        <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Article Feed{' '}
      </Link>
      <Link href="/feeds/blog-rss.xml" {...linkProps}>
        <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Blog Feed{' '}
      </Link>
      <Link href="/privacy-policy" {...linkProps}>
        <FontAwesomeIcon icon={faLock} fixedWidth /> Privacy Policy{' '}
      </Link>
      <Link href="/sitemap.xml" {...linkProps}>
        <FontAwesomeIcon icon={faSitemap} fixedWidth /> Sitemap{' '}
      </Link>
    </div>
  );
};

// TODO: on the privacy page, it doesn't really make sense to have the blurb about me
// or the newsletter signup really.., maybe allow that to be turned off on demand?
// or at least the text overwritten?

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mx-auto px-10">
      <div className="mt-5 flex flex-col lg:flex-row items-start">
        <div className="text-left lg:pl-4 lg:pr-10 lg:w-2/3 xl:mr-20">
          <Avatar name="Stefanie Molin" picture="/assets/avatar.jpeg" />
          <p className="pt-5">
            Thanks for visiting my website! I am passionate about teaching data science and software
            engineering skills to people of all levels. I have created multiple workshops, books,
            and articles, as well as contributed to various FOSS projects. If any of my other
            content has helped you, please consider{' '}
            <a
              className="text-slate-500 hover:text-slate-800 underline"
              href="https://www.buymeacoffee.com/stefanie.molin"
              target="_blank"
              rel="noopener noreferrer"
            >
              supporting
            </a>{' '}
            me.
          </p>
        </div>

        <hr className="lg:hidden my-8 w-full" />
        <div className="flex w-full lg:w-auto items-center justify-center">
          <div className="w-[350px] flex flex-row items-start content-center lg:justify-end xl:ml-20 lg:mr-5">
            <SubscribeToNewsletterForm />
          </div>
        </div>
      </div>
      <hr className="lg:hidden mt-8 w-full" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center pt-10 px-4">
        <SitemapLinks className="px-5" />
      </div>

      <div className="flex flex-row items-center justify-center pt-10">
        <hr className="my-8 w-full" />
        <FollowButtons size="3x" className="px-5" />
        <hr className="my-8 w-full" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:px-2">
        <div className="lg:w-1/2">All opinions are my own.</div>
        <div className="justify-center lg:justify-end text-center lg:text-right lg:w-1/2">
          Made with <FontAwesomeIcon icon={faCoffee} />, <FontAwesomeIcon icon={faCode} />, and lots
          of <FontAwesomeIcon icon={faHeart} />.
        </div>
      </div>

      <div className="pb-5 flex flex-col lg:flex-row items-center lg:px-2">
        <div className="lg:w-1/2">
          Copyright &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin. All rights reserved.
        </div>
        <div className="justify-center lg:justify-end text-center lg:text-right lg:w-1/2">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
