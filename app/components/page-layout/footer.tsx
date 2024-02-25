import Link from 'next/link';
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
import Avatar from '../avatar';
import SubscribeToNewsletterForm from '../subscribe-to-newsletter';
import FollowButtons from '../follow';
import { type LinkWithIcon } from '../../interfaces/link';
import ExternalLink from '../links/external-link';
import { HEADSHOT } from '../../data/constants';

const SitemapLinks = ({ className }: { className?: string }) => {
  // Internal links only
  const siteLinks = [
    { name: 'Home', url: '/' },
    { name: 'Books', url: '/books/' },
    { name: 'Interviews', url: '/interviews/' },
    { name: 'Workshops', url: '/workshops/' },
    { name: 'Articles', url: '/articles/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Post Search', url: '/tags/' },
    { name: 'Talks', url: '/talks/' },
    { name: 'Data Morph', url: '/data-morph/' },
    { name: 'Events', url: '/events/' },
    { name: 'About', url: '/about/' },
    { name: 'Contact', url: '/contact/' },
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
      {siteLinks.map(({ name, url }) => (
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
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

// TODO: take into account the page when determining what to show in the footer
// (tipping only on articles for example)

const FooterLinks = ({ className }: { className?: string }) => {
  const links: LinkWithIcon[] = [
    { href: '/feeds/articles-rss.xml', icon: faRssSquare, text: 'Article Feed' },
    { href: '/feeds/blog-rss.xml', icon: faRssSquare, text: 'Blog Feed' },
    { href: '/privacy-policy', icon: faLock, text: 'Privacy Policy' },
    { href: '/sitemap.xml', icon: faSitemap, text: 'Sitemap' },
  ];

  const makeLink = ({ href, icon, text }: LinkWithIcon) => (
    <Link key={text} href={href} className="text-slate-600 hover:text-slate-800 px-1">
      <span className="text-nowrap">
        <FontAwesomeIcon icon={icon} fixedWidth /> {text}
      </span>
    </Link>
  );
  return (
    <div className={classNames(className, 'items-center')}>
      {links.map((link) => makeLink(link))}
    </div>
  );
};

// TODO: on the privacy page, it doesn't really make sense to have the blurb about me
// or the newsletter signup really.., maybe allow that to be turned off on demand?
// or at least the text overwritten?

const Footer = () => {
  const underlinedLinkClassName = 'text-slate-500 hover:text-slate-800 underline';
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mx-auto px-10">
      <div className="mt-5 flex flex-col lg:flex-row items-start lg:justify-between lg:px-4">
        <div className="text-left lg:pr-10 lg:w-2/3 xl:mr-20">
          <Avatar name="Stefanie Molin" picture={HEADSHOT} />
          <p className="pt-5">
            Thank you for visiting my website! I am passionate about teaching data science and
            software engineering skills to people of all levels. I have created multiple{' '}
            <Link href="/workshops" className={underlinedLinkClassName}>
              workshops
            </Link>
            ,{' '}
            <Link href="/books" className={underlinedLinkClassName}>
              books
            </Link>
            , and{' '}
            <Link href="/articles" className={underlinedLinkClassName}>
              articles
            </Link>
            , as well as contributed to various{' '}
            <ExternalLink
              className={underlinedLinkClassName}
              href="https://github.com/search?q=is%3Apr+author%3Astefmolin+-user%3Astefmolin++is%3Amerged&type=pullrequests&state=closed&s=created&o=desc"
            >
              open source projects
            </ExternalLink>
            . If any of my content has helped you, please consider{' '}
            <ExternalLink
              className={underlinedLinkClassName}
              href="https://www.buymeacoffee.com/stefanie.molin"
            >
              supporting
            </ExternalLink>{' '}
            me.
          </p>
        </div>

        <hr className="lg:hidden my-8 w-full" />
        <div className="flex w-full lg:w-auto items-center justify-center lg:justify-end">
          <div className="w-[350px] flex flex-row items-start content-center lg:justify-end xl:ml-20">
            <SubscribeToNewsletterForm />
          </div>
        </div>
      </div>
      <hr className="lg:hidden mt-8 w-full" />

      <SitemapLinks className="px-5" />

      <FollowButtons size="3x" className="px-5" withDivider dividerClassName="py-10" />

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
            lots of <FontAwesomeIcon icon={faHeart} beatFade />.
          </span>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
