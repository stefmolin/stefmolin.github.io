import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { NEWSLETTER_URL } from '../data/constants';

function NavigationLinks({
  className,
  separatorClassName,
  transition,
}: {
  className: string | Record<string, boolean>;
  separatorClassName: string | Record<string, boolean>;
  transition: string;
}) {
  const separator = <span className={classNames(separatorClassName)}>|</span>;
  const linkClassName = 'hover:underline';
  return (
    <div className={classNames(className)}>
      <Link href="/articles" className={classNames(linkClassName, 'delay-100', transition)}>
        Articles
      </Link>
      {separator}
      <Link href="/blog" className={classNames(linkClassName, 'delay-150', transition)}>
        Blog
      </Link>
      {separator}
      <Link href="/books" className={classNames(linkClassName, 'delay-200', transition)}>
        Books
      </Link>
      {separator}
      <Link href="/events" className={classNames(linkClassName, 'delay-300', transition)}>
        Events
      </Link>
      {separator}
      <Link href={NEWSLETTER_URL} className={classNames(linkClassName, 'delay-500', transition)}>
        Newsletter
      </Link>
      {separator}
      <Link href="/workshops" className={classNames(linkClassName, 'delay-700', transition)}>
        Workshops
      </Link>
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
        className={classNames('py-2 text-2xl mx-5 flex flex-row justify-between h-16', {
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
              'text-5xl py-2': isOpen,
            })}
          >
            <Link href="/" className="hover:underline font-bold">
              Stefanie Molin
            </Link>
          </h2>
          <NavigationLinks
            className={classNames('flex opacity-0 w-0 h-0', {
              'flex-row space-x-2 text-lg invisible md:visible md:h-auto md:w-auto md:opacity-100':
                !isOpen,
              'flex-col space-y-2 text-3xl pl-2 opacity-100 transition-opacity transition-spacing transform translate-y-6 duration-1000 ease-in':
                isOpen,
            })}
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
