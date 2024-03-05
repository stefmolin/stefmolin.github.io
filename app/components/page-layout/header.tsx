import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { NEWSLETTER_URL } from '../../data/constants';

function HeaderDropdown({
  children,
  className,
  inOverlay,
  title,
}: {
  children: React.ReactNode[];
  className?: string | Record<string, boolean>;
  inOverlay: boolean;
  title: string;
}) {
  return (
    <div className={classNames('group relative border-neutral-200', className)}>
      <div className="flex flex-row items-center cursor-pointer">
        {title} <FontAwesomeIcon icon={faChevronDown} fixedWidth size="xs" className="pl-px" />
      </div>
      <div
        className={classNames({
          'fixed hidden group-hover:flex flex-col': !inOverlay,
          'bg-neutral-50 border-x border-b': !inOverlay,
          'z-50 rounded shadow-sm': !inOverlay,
          'py-2 px-4 -translate-x-4': !inOverlay,
          'flex-col py-2 px-4 hidden group-hover:flex space-y-2': inOverlay,
        })}
      >
        {children}
      </div>
    </div>
  );
}

function NavigationLinks({
  className,
  inOverlay,
  separatorClassName,
  transition,
}: {
  className: string | Record<string, boolean>;
  inOverlay: boolean;
  separatorClassName: string | Record<string, boolean>;
  transition: string;
}) {
  const separator = <span className={classNames(separatorClassName)}>|</span>;
  const linkClassName = 'text-nowrap hover:underline';
  const makeLink = (name: string, href: string, ...className: string[]) => (
    <Link href={href} className={classNames(linkClassName, ...className)}>
      {name}
    </Link>
  );
  return (
    <div className={classNames(className)}>
      <HeaderDropdown
        title="Learn"
        inOverlay={inOverlay}
        className={classNames('delay-100', transition)}
      >
        {makeLink('Articles', '/articles')}
        {makeLink('Books', '/books')}
        {makeLink('Talks', '/talks')}
        {makeLink('Workshops', '/workshops')}
      </HeaderDropdown>
      {separator}
      <HeaderDropdown
        title="About"
        inOverlay={inOverlay}
        className={classNames('delay-200', transition)}
      >
        {makeLink('About Me', '/about')}
        {makeLink('Blog', '/blog')}
        {makeLink('Contact', '/contact')}
        {makeLink('Interviews', '/interviews')}
      </HeaderDropdown>
      {separator}
      {makeLink('Events', '/events', 'delay-300', transition)}
      {separator}
      {makeLink('Newsletter', NEWSLETTER_URL, 'delay-500', transition)}
    </div>
  );
}

export default function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={classNames(
        'relative transition-height duration-500 ease-in-out',
        'bg-neutral-50 border-b border-neutral-200',
        'sticky top-0 z-50 w-full',
        {
          'h-screen': isOpen,
          'h-16 mb-20': !isOpen,
        },
      )}
    >
      <div
        className={classNames('py-2 text-2xl px-5 flex flex-row justify-between h-16', {
          'items-center': !isOpen,
        })}
      >
        <div
          className={classNames('flex flex-row justify-between w-full', {
            'flex-row items-center': !isOpen,
            'flex-col items-baseline': isOpen,
          })}
        >
          <h2
            className={classNames('transition-[font-size] duration-1000 ease-in-out', {
              'sm:text-5xl py-2': isOpen,
            })}
          >
            <Link href="/" className="hover:underline font-bold text-nowrap">
              Stefanie Molin
            </Link>
          </h2>
          <NavigationLinks
            className={classNames('flex opacity-0', {
              'flex-row space-x-2 text-lg invisible md:visible md:opacity-100 absolute -top-full -left-full md:relative md:top-auto md:left-auto':
                !isOpen,
              'flex-col space-y-2 text-3xl pl-2 opacity-100 transition-opacity transition-spacing transform translate-y-6 duration-1000 ease-in':
                isOpen,
            })}
            inOverlay={isOpen}
            separatorClassName={{ hidden: isOpen }}
            transition={isOpen ? '' : 'transition-none'}
          />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
