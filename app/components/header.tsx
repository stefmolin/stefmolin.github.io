import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { NEWSLETTER_URL } from '../lib/constants';
// import Avatar from "./avatar";

const Header = () => {
  return (
    <>
      {/* <div className="bg-neutral-50 border-t border-neutral-200">*/}
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-right">
        {/* <Link href="/blog" className="hover:underline">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Stefanie Molin's blog.
      </Link> */}
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/articles" className="hover:underline">
          Articles
        </Link>
        {' | '}
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        {' | '}
        <Link href={NEWSLETTER_URL} className="hover:underline">
          Newsletter
        </Link>
        {' | '}
        <Link href="/talks" className="hover:underline">
          Talks
        </Link>
        {' | '}
        <Link href="/workshops" className="hover:underline">
          Workshops
        </Link>
        {/* <Avatar name="Stefanie Molin" picture="/assets/avatar.jpeg" /> */}
      </h2>
      {/* </div> <- Put this back and update the post slug file to mirror the footer setup (with more tweaks) */}
    </>
  );
};

export default Header;
