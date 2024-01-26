import Container from "./container";
import classNames from "classnames";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCoffee,
  faEnvelopeOpen,
  faHeart,
  faLock,
  faRssSquare,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./avatar";
import SubscribeToNewsletterForm from "./subscribe-to-newsletter";
import SubscribeButtons from "./subscribe";
import FollowButtons from "./follow";
import { NEWSLETTER_URL } from "../lib/constants";

// const Footer = () => {
//   return (
//     <footer className="bg-neutral-50 border-t border-neutral-200">
//       <Container>
//         <div className="py-5 flex flex-col lg:flex-row items-center">
//           <h3 className="text-center lg:text-left lg:pr-4 lg:w-1/2">
//             Made with <FontAwesomeIcon icon={faCoffee} />,{" "}
//             <FontAwesomeIcon icon={faCode} />, and lots of{" "}
//             <FontAwesomeIcon icon={faHeart} />.
//           </h3>
//           <div className="justify-center lg:justify-end text-center lg:text-right lg:pl-4 lg:w-1/2">
//             &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// const linkProps = {
//   className: "text-slate-600 hover:text-slate-800",
//   target: "_blank",
//   rel: "noopener noreferrer",
// };

// // TODO: take into account the page when determining what to show in the footer (tipping only on articles for example)

// const Footer = () => {
//   return (
//     <footer className="bg-neutral-50 border-t border-neutral-200">
//       <Container>
//         <div className="mt-5 flex flex-col lg:flex-row items-center">
//           <div className="text-left lg:px-4 lg:w-1/2">
//             <Avatar name="Stefanie Molin" picture="/assets/avatar.jpeg" />
//             <p className="pt-5">
//               Thanks for reading! I am passionate about teaching data science
//               and software engineering skills to people of all levels. I have
//               created multiple workshops, books, and articles, as well as
//               contributed to various FOSS projects. If this or any of my other
//               content has helped you, please consider{" "}
//               <a
//                 className="text-slate-600 hover:text-slate-800 underline"
//                 href="https://www.buymeacoffee.com/stefanie.molin"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 supporting
//               </a>{" "}
//               me.
//             </p>
//           </div>
//           <div className="hidden lg:flex flex-row  items-start justify-evenly text-left lg:pl-4 lg:w-1/2">
//             {/* <SubscribeToNewsletterForm /> */}
//             {/* <div className="items-end space-x-2 mt-26">
//               <span>Don't forget to subscribe: </span>
//               <SubscribeButtons />
//             </div> */}
//             {/* <div className="flex flex-col">
//               <span>Follow Me</span>
//               <FollowButtons />
//             </div> */}
//             <div className="flex flex-col">
//               <div>
//                 <h6 className="font-bold text-lg text-slate-800">Subscribe</h6>
//               </div>
//               <div>
//                 <a href={NEWSLETTER_URL} {...linkProps}>
//                   <FontAwesomeIcon icon={faEnvelopeOpen} /> Newsletter{" "}
//                 </a>
//               </div>
//               <div>
//                 <a href="/feeds/articles-rss.xml" {...linkProps}>
//                   <FontAwesomeIcon icon={faRssSquare} className="pr-0.5" />{" "}
//                   Article Feed{" "}
//                 </a>
//               </div>
//               <div>
//                 <a href="/feeds/blog-rss.xml" {...linkProps}>
//                   <FontAwesomeIcon icon={faRssSquare} className="pr-0.5" /> Blog
//                   Feed{" "}
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div>
//                 <h6 className="font-bold text-lg text-slate-800">
//                   Suggested Links
//                 </h6>
//               </div>
//               <div>
//                 <a href="" {...linkProps}>
//                   About the Author
//                 </a>
//               </div>
//               <div>
//                 <a href="" {...linkProps}>
//                   Interviews
//                 </a>
//               </div>
//               {/* <div>
//                 <a href="" {...linkProps}>
//                   News and Events
//                 </a>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         {/* <div className="py-5 flex flex-col lg:flex-row items-center">
//           <div className="lg:pl-4 lg:w-1/2">
//             &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin
//           </div>
//           <div className="justify-center lg:justify-end text-center lg:text-right lg:pl-4 lg:w-1/2">
//             All opinions are my own.
//           </div> */}
//         {/* <h3 className="text-center lg:text-left lg:pr-4 lg:w-1/2">
//             <div>Don't forget to subscribe: </div>
//             <SubscribeButtons />
//           </h3> */}
//         <div className="py-5 text-center">
//           &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin
//         </div>
//         {/* </div> */}
//       </Container>
//     </footer>
//   );
// };

const SitemapLinks = ({ className }: { className?: string }) => {
  const linkProps = {
    className: classNames(
      className,
      "font-bold text-slate-500 hover:text-slate-800"
    ),
    target: "_blank",
    rel: "noopener noreferrer",
  };

  // TODO: probably want a way to group by content and keep those together in the column
  // since this fills rows and then columns things that are related can end up far apart when they
  // should be in the same column

  const siteLinks = [
    { name: "Home", url: "/" },
    { name: "Books", url: "/books" },
    { name: "Interviews", url: "/interviews" },
    { name: "Articles", url: "/articles" },
    { name: "Blog", url: "/blog" },
    { name: "Talks", url: "/talks" },
    { name: "Workshops", url: "/workshops" },
    { name: "Pandas Workshop", url: "/pandas-workshop" },
    { name: "Data Viz Workshop", url: "/python-data-viz-workshop" },
    { name: "Data Morph", url: "/data-morph" },
    { name: "News", url: "/news" },
    { name: "Events", url: "/events" },
    { name: "Contact", url: "/contact" },
  ];
  return siteLinks.map(({ name, url }) => (
    <a href={url} {...linkProps}>
      {name}
    </a>
  ));
};

// TODO: take into account the page when determining what to show in the footer (tipping only on articles for example)

const FooterLinks = ({ className }: { className?: string }) => {
  const linkProps = {
    className: "text-slate-600 hover:text-slate-800",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <div className={classNames(className, "space-x-2")}>
      {/* Follow <FontAwesomeIcon icon={faUserPlus} /> */}
      <a href="/privacy-policy" {...linkProps}>
        <FontAwesomeIcon icon={faLock} fixedWidth /> Privacy Policy{" "}
      </a>
      <a href="/sitemap.xml" {...linkProps}>
        <FontAwesomeIcon icon={faSitemap} fixedWidth /> Sitemap{" "}
      </a>
      <a href="/feeds/articles-rss.xml" {...linkProps}>
        <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Article Feed{" "}
      </a>
      <a href="/feeds/blog-rss.xml" {...linkProps}>
        <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Blog Feed{" "}
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mx-auto px-10">
      <div className="mt-5 flex flex-col lg:flex-row items-start">
        <div className="text-left lg:px-4 lg:w-1/2">
          <Avatar name="Stefanie Molin" picture="/assets/avatar.jpeg" />
          <p className="pt-5">
            Thanks for reading! I am passionate about teaching data science and
            software engineering skills to people of all levels. I have created
            multiple workshops, books, and articles, as well as contributed to
            various FOSS projects. If this or any of my other content has helped
            you, please consider{" "}
            <a
              className="text-slate-600 hover:text-slate-800 underline"
              href="https://www.buymeacoffee.com/stefanie.molin"
              target="_blank"
              rel="noopener noreferrer">
              supporting
            </a>{" "}
            me.
          </p>
        </div>
        <div className="lg:flex flex-row items-start justify-end text-left lg:pl-4 lg:w-1/2 ml-20 mr-5">
          <SubscribeToNewsletterForm />
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-evenly text-center pt-10 px-4">
        <SitemapLinks className="px-5" />
      </div>

      <hr /> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center pt-10 px-4">
        <SitemapLinks className="px-5" />
      </div>

      {/* <div className="inline-flex items-center w-full">
        <hr className="w-1/2 my-8 grow" />
        <div className="inline-flex justify-end w-full">
          <hr className="w-1/2 my-8" />
        </div>
        <span className="absolute px-3 text-gray-900 -translate-x-1/2 left-1/2">
          <FollowButtons size="3x" />
        </span>
      </div> */}

      <div className="flex flex-row items-center justify-center pt-10">
        <hr className="my-8 w-full" />
        <FollowButtons size="3x" className="px-5" />
        <hr className="my-8 w-full" />
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:pl-4 lg:w-1/2">
          Made with <FontAwesomeIcon icon={faCoffee} />,{" "}
          <FontAwesomeIcon icon={faCode} />, and lots of{" "}
          <FontAwesomeIcon icon={faHeart} />.
        </div>
        <div className="justify-center lg:justify-end text-center lg:text-right lg:pl-4 lg:w-1/2">
          All views are my own.
        </div>
      </div>

      {/* <hr /> */}

      <div className="pb-5 flex flex-col lg:flex-row items-center">
        <div className="lg:pl-4 lg:w-1/2">
          &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin, All rights
          reserved.
        </div>
        <div className="justify-center lg:justify-end text-center lg:text-right lg:pl-4 lg:w-1/2">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
