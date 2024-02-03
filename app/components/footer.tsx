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
  const siteLinks = [
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books' },
    { name: 'Interviews', url: '/interviews' },
    { name: 'Workshops', url: '/workshops' },
    // { name: 'Pandas Workshop', url: '/pandas-workshop' },
    // { name: 'Data Viz Workshop', url: '/python-data-viz-workshop' },
    { name: 'Articles', url: '/articles' },
    { name: 'Blog', url: '/blog' },
    { name: 'Post Search', url: '/tags' },
    { name: 'Talks', url: '/talks' },
    { name: 'Data Morph', url: '/data-morph' },
    // {
    //   name: 'OSS Contributions',
    //   url: 'https://github.com/search?q=is%3Apr+author%3Astefmolin+-user%3Astefmolin++is%3Amerged&type=pullrequests&state=closed&s=created&o=desc',
    // },
    { name: 'Events', url: '/events' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' },
    // { name: 'Buy Me a Coffee', url: 'https://www.buymeacoffee.com/stefanie.molin' },
  ];

  return (
    <div
      className={classNames(
        'grid',
        'grid-rows-6 md:grid-rows-4 lg:grid-rows-3 xl:grid-rows-2',
        'grid-flow-col',
        'text-center',
        'pt-10',
        'px-4',
        'auto-cols-fr',
      )}
    >
      {...siteLinks.map(
        (
          { name, url }, // TODO: only use <Link> for external links
        ) => (
          <Link
            key={url}
            href={url}
            className={classNames(
              className,
              'font-bold',
              'text-slate-500 hover:text-slate-800',
              'hover:underline px-5',
              'text-nowrap',
            )}
            {...(url.startsWith('https://')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {name}
          </Link>
        ),
      )}
    </div>
  );
};

// TODO: take into account the page when determining what to show in the footer
// (tipping only on articles for example)

const FooterLinks = ({ className }: { className?: string }) => {
  const linkProps = {
    className: 'text-slate-600 hover:text-slate-800',
  };
  return (
    <div className={classNames(className, 'space-x-1 items-center')}>
      <Link href="/feeds/articles-rss.xml" {...linkProps}>
        <span className="text-nowrap">
          <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Article Feed
        </span>{' '}
      </Link>
      <Link href="/feeds/blog-rss.xml" {...linkProps}>
        <span className="text-nowrap">
          <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Blog Feed
        </span>{' '}
      </Link>
      <Link href="/privacy-policy" {...linkProps}>
        <span className="text-nowrap">
          <FontAwesomeIcon icon={faLock} fixedWidth /> Privacy Policy
        </span>{' '}
      </Link>
      <Link href="/sitemap.xml" {...linkProps}>
        <span className="text-nowrap">
          <FontAwesomeIcon icon={faSitemap} fixedWidth /> Sitemap
        </span>
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
            Thank you for visiting my website! I am passionate about teaching data science and
            software engineering skills to people of all levels. I have created multiple{' '}
            <Link href="/workshops" className="text-slate-500 hover:text-slate-800 underline">
              workshops
            </Link>
            ,{' '}
            <Link href="/books" className="text-slate-500 hover:text-slate-800 underline">
              books
            </Link>
            , and{' '}
            <Link href="/articles" className="text-slate-500 hover:text-slate-800 underline">
              articles
            </Link>
            , as well as contributed to various{' '}
            <a
              className="text-slate-500 hover:text-slate-800 underline"
              href="https://github.com/search?q=is%3Apr+author%3Astefmolin+-user%3Astefmolin++is%3Amerged&type=pullrequests&state=closed&s=created&o=desc"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source projects
            </a>
            . If any of my content has helped you, please consider{' '}
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

      <SitemapLinks className="px-5" />

      <div className="flex flex-row items-center justify-center pt-10">
        <hr className="my-8 w-full" />
        <FollowButtons size="3x" className="px-5" />
        <hr className="my-8 w-full" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center text-center px-2 pb-5">
        <div className="flex flex-col lg:text-left pt-4 lg:pt-0">
          <span>All opinions are my own.</span>
          <span>
            <span className="text-nowrap">
              Copyright &#169; 2019&ndash;
              {DateTime.now().year} Stefanie Molin.
            </span>{' '}
            <span className="text-nowrap">All rights reserved.</span>
          </span>
        </div>
        <div className="lg:text-right flex flex-col lg:flex-col pt-4 lg:pt-0">
          <span className="hidden lg:block">
            Made with <FontAwesomeIcon icon={faCoffee} />, <FontAwesomeIcon icon={faCode} />, and
            lots of <FontAwesomeIcon icon={faHeart} />.
          </span>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
