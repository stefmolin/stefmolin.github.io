import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import { getImageLink } from '../../lib/images';
import DurationIndicator from '../../components/datetime/duration-indicator';
import WORKSHOP_PAGES from '../../data/workshops';
import type Workshop from '../../interfaces/workshop';
import CONTENT_LINKS from '../../data/content-links';

// TODO: decide on the featured topic/technology at the bottom left of the card
// TODO: decide whether to put a combined version of the map at the bottom (could maybe highlight the workshops when clicking on a pin for a spot they were presented at)

export default function Index() {
  const preview = false;
  const pageTitle = 'Workshops';
  const LinkToWorkshop = ({
    workshop,
    children,
  }: {
    workshop: Workshop;
    children: React.ReactNode | React.ReactNode[];
  }) => (
    <Link
      href={{
        pathname: '/workshops/[workshop]',
        query: { workshop: workshop.repo },
      }}
      className="text-slate-800"
    >
      {children}
    </Link>
  );
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={pageTitle}
          description="A listing of workshops created by Stefanie Molin."
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: getImageLink(CONTENT_LINKS.WORKSHOPS.image),
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                alt: 'Workshops created by Stefanie Molin',
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{pageTitle}</h1>
          <h2 className="text-xl py-2">A listing of workshops I've developed.</h2>
          <div className="grid grid-cols-1 sm:gap-y-10 pb-5">
            {WORKSHOP_PAGES.map(({ workshop }) => (
              <div
                key={workshop.title}
                className="shadow-sm hover:shadow-lg transition-shadow duration-200 px-6 py-4 flex flex-col m-5"
              >
                <div className="flex flex-col justify-evenly space-y-5">
                  <div className="flex flex-col items-start">
                    <LinkToWorkshop workshop={workshop}>
                      <h3 className="text-xl hover:underline text-pretty">{workshop.title}</h3>
                    </LinkToWorkshop>
                    <h4 className="text-slate-600">{workshop.subtitle}</h4>
                  </div>
                  <div>
                    <LinkToWorkshop workshop={workshop}>
                      <img
                        src={workshop.coverImage}
                        alt={workshop.title}
                        className="md:float-left md:mr-5 mb-2 mx-auto max-w-64 object-cover"
                      />
                    </LinkToWorkshop>
                    {/* TODO: should I float right here since the image is less important? also make it smaller*/}
                    <div className="md:-mt-1">
                      <p className="text-left text-pretty">{workshop.description[0]}</p>
                    </div>
                    {/* {seeAlso != null ? (
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
                                <a
                                  key={title}
                                  href={link}
                                  className={linkClassName}
                                  {...EXTERNAL_LINK_PROPS}
                                >
                                  {title}
                                </a>
                              );
                            })}
                          </p>
                        </>
                      ) : null} */}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                    <div className="flex flex-row items-center">
                      Topics/tags/libraries: pandas, seaborn, matplotlib
                    </div>
                    <div className="flex flex-row items-center">
                      <DurationIndicator duration={workshop.duration} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
