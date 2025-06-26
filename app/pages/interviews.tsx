import Link from 'next/link';
import { NextSeo } from 'next-seo';
import {
  faArrowUpRightFromSquare,
  faNewspaper,
  faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import Container from '../components/sections/container';
import Layout from '../components/page-layout/layout';
import { getImageLink } from '../lib/images';
import type Interview from '../interfaces/interview';
import PublicationDate from '../components/datetime/publication-date';
import DurationIndicator from '../components/datetime/duration-indicator';
import INTERVIEWS from '../data/interviews';
import CONTENT_LINKS from '../data/content-links';
import ExternalLink from '../components/links/external-link';
import PreviewCard from '../components/cards/preview-card';
import ResourceLink from '../components/links/resource-link';
import Pagination from '../components/pagination';

export default function Interviews() {
  const interviewRef = useRef<null | HTMLDivElement>(null);
  const interviewsPerPage = 3;
  const [offset, setOffset] = useState(0);
  const pageTitle = 'Interviews';
  const seoImage = CONTENT_LINKS.INTERVIEWS.image;

  const insertBookLinks = ({ text, source }: Interview['description'], dateString: string) => {
    const pTagClassName = 'text-left text-pretty sm:text-lg';

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
    <Layout>
      <Container>
        <NextSeo
          title={pageTitle}
          description={
            'A listing of written interviews and podcasts featuring Stefanie Molin on a variety of topics.'
          }
          openGraph={{
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
        <div className="-mt-8 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center">{pageTitle}</h1>
          <div ref={interviewRef} className="space-y-10 -mx-10 sm:-mx-5 lg:mx-auto mb-5">
            {INTERVIEWS.slice(offset, offset + interviewsPerPage).map(
              ({ link, coverImage, format, host, date, title, description, duration, seeAlso }) => (
                <PreviewCard
                  id={title}
                  key={title}
                  header={
                    <>
                      <div className="w-full text-center lg:text-left">
                        <ExternalLink href={link}>
                          <h3 className="text-lg sm:text-xl md:text-2xl hover:underline text-pretty">
                            {title}
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              size="sm"
                              fixedWidth
                              className="pl-2"
                            />
                          </h3>
                        </ExternalLink>
                      </div>
                      <div className="text-sm sm:text-base md:text-lg w-full text-center lg:text-left">
                        <h4 className="text-slate-600">
                          <FontAwesomeIcon
                            icon={format === 'podcast' ? faPodcast : faNewspaper}
                            fixedWidth
                            className="pr-1"
                          />
                          {host}
                        </h4>
                      </div>
                    </>
                  }
                  body={
                    <>
                      <ExternalLink href={link}>
                        <img
                          src={coverImage}
                          alt={title}
                          className="lg:float-left lg:mr-5 mb-2 mx-auto sm:h-60 object-cover"
                        />
                      </ExternalLink>
                      <div className="lg:-mt-1">{insertBookLinks(description, date)}</div>
                      {seeAlso != null ? (
                        <>
                          <br />
                          <p className="text-sm sm:text-base">
                            See also:
                            {seeAlso.map(({ title, slug, contentClass }, index) => {
                              const linkClassName = 'text-slate-500 pl-1';
                              return (
                                <>
                                  <ResourceLink
                                    key={title}
                                    className={linkClassName}
                                    linkClass="internal"
                                    resourceLink={{ contentClass, slug }}
                                  >
                                    {title}
                                  </ResourceLink>
                                  {seeAlso.length > 1 && index !== seeAlso.length - 1 ? ',' : ''}
                                </>
                              );
                            })}
                          </p>
                        </>
                      ) : null}
                    </>
                  }
                  footer={
                    <>
                      <PublicationDate date={date} />
                      <div className="flex flex-row items-center">
                        <DurationIndicator
                          duration={`${duration} ${format === 'podcast' ? 'listen' : 'read'}`}
                        />
                      </div>
                    </>
                  }
                  footerClassName="flex-col-reverse sm:flex-row"
                />
              ),
            )}
          </div>
          <Pagination
            itemsPerPage={interviewsPerPage}
            scrollRef={interviewRef}
            setOffset={setOffset}
            totalItems={INTERVIEWS.length}
          />
        </div>
      </Container>
    </Layout>
  );
}
