import Link from 'next/link';
import { NextSeo } from 'next-seo';
import {
  faArrowUpRightFromSquare,
  faNewspaper,
  faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/container';
import Layout from '../components/layout';
import { usePageURL } from '../lib/hooks/page-url';
import { getImageLink } from '../lib/images';
import type Interview from '../interfaces/interview';
import PublicationDate from '../components/datetime/publication-date';
import DurationIndicator from '../components/datetime/duration-indicator';
import INTERVIEWS from '../data/interviews';
import CONTENT_LINKS from '../data/content-links';
import ExternalLink from '../components/links/external-link';

export default function Interviews() {
  const preview = false;
  const pageTitle = 'Interviews';
  const seoImage = CONTENT_LINKS.INTERVIEWS.image;

  const insertBookLinks = ({ text, source }: Interview['description'], dateString: string) => {
    const pTagClassName = 'text-left text-pretty';

    const sourceText = source != null ? ` (This description comes from the ${source}.)` : '';
    const description = `${text}${sourceText}`;

    const pattern = /Hands-On Data Analysis with Pandas/;
    const match = pattern.exec(description);
    if (match == null) return <p className={pTagClassName}>{description}</p>;
    const [before, after] = description.split(pattern);

    const edition = parseInt(dateString.slice(0, 4)) < 2020 ? '1st' : '2nd';

    return (
      <p className={pTagClassName}>
        {before}
        <Link
          href={{
            pathname: `/books/Hands-On-Data-Analysis-with-Pandas-${edition}-edition`,
          }}
          className="text-slate-500"
        >
          <em>Hands-On Data Analysis with Pandas</em>
        </Link>
        {after}
      </p>
    );
  };

  return (
    <Layout preview={preview}>
      <Container>
        <NextSeo
          title={pageTitle}
          description="A listing of interviews with Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(seoImage.src),
                width: seoImage.width,
                height: seoImage.height,
                alt: 'Photo of Stefanie Molin taken by Alex Guevara (@agnyphoto on Instagram) after her first book came out.',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          {/* {pageSubtitle != null ? <h2 className="text-xl pt-2">{pageSubtitle}</h2> : null} */}
          <div className="grid grid-cols-1 sm:gap-y-10">
            {INTERVIEWS.map(
              ({ link, coverImage, format, host, date, title, description, duration, seeAlso }) => (
                <div
                  key={title}
                  className="shadow-sm hover:shadow-lg transition-shadow duration-200 px-6 py-4 flex flex-col m-5"
                >
                  <div className="flex flex-col justify-evenly space-y-5">
                    <div className="flex flex-col items-start">
                      <ExternalLink href={link}>
                        <h3 className="text-xl hover:underline text-pretty">
                          {title}
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="sm"
                            fixedWidth
                            className="pl-2"
                          />
                        </h3>
                      </ExternalLink>
                      <div className="flex flex-row items-center">
                        <FontAwesomeIcon
                          icon={format === 'podcast' ? faPodcast : faNewspaper}
                          fixedWidth
                          className="pr-1"
                        />
                        <h4 className="text-slate-600">{host}</h4>
                      </div>
                    </div>
                    <div>
                      <ExternalLink href={link}>
                        <img
                          src={coverImage}
                          alt={title}
                          className="md:float-left md:mr-5 mb-2 mx-auto sm:h-60 object-cover"
                        />
                      </ExternalLink>
                      <div className="md:-mt-1">{insertBookLinks(description, date)}</div>
                      {seeAlso != null ? (
                        <>
                          <br />
                          <p>
                            See also:
                            {seeAlso.map(({ title, link }) => {
                              const linkClassName = 'text-slate-500 pl-1';
                              if (link.startsWith('/')) {
                                return (
                                  <Link
                                    key={title}
                                    href={{
                                      pathname: link,
                                    }}
                                    className={linkClassName}
                                  >
                                    {title}
                                  </Link>
                                );
                              }
                              return (
                                <ExternalLink key={title} href={link} className={linkClassName}>
                                  {title}
                                </ExternalLink>
                              );
                            })}
                          </p>
                        </>
                      ) : null}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                      <PublicationDate date={date} />
                      <div className="flex flex-row items-center">
                        <DurationIndicator
                          duration={`${duration} ${format === 'podcast' ? 'listen' : 'read'}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
