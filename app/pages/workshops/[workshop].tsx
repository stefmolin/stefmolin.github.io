import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import { EXTERNAL_LINK_PROPS, FLAGS, GITHUB_PROFILE, HOME_URL, MAP_PIN } from '../../lib/constants';
import SectionSeparator from '../../components/section-separator';
import ReviewsSection from '../../components/reviews';
import { getImageLink } from '../../lib/images';
import { WORKSHOP_PAGE_MAPPING } from '../../data/workshops';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RelatedContentSection from '../../components/related-content';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { useState } from 'react';
import ConferencePresentation from '../../interfaces/conference-presentation';

// TODO: related content
// TODO: think more about the reviews layout and also whether to flip with the map
// TODO: pull map out into its own component with ZoomableGroup optional
// TODO: include duration here as well
// TODO: link to slides, setup instructions, and prereqs
// TODO: decide on whether to include event images or save for the other page
// TODO: decide on the featured topic/technology at the top
// TODO: include the geographies file in this repo to avoid the issues those examples had?

export default function WorkshopPage({ workshopKey }: { workshopKey: string }) {
  const { workshop, reviews, relatedContent, pastSessions } = WORKSHOP_PAGE_MAPPING[workshopKey];
  const [selectedMapPin, setMapPin] = useState<ConferencePresentation>();

  const preview = false;
  const workshopCoverImage = getImageLink(workshop.coverImage);

  const countries = pastSessions.map(({ country }) => country);
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <NextSeo
          title={workshop.title}
          description={workshop.subtitle}
          openGraph={{
            url: usePageURL(),
            images: [
              {
                url: workshopCoverImage,
                // TODO: consider providing these?
                // width: 850,
                // height: 650,
                // alt: imageAltText,// TODO
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-4xl">{workshop.title}</h1>
          <div className="flex flex-row items-center">
            <a
              href={`${GITHUB_PROFILE}/${workshop.repo}`}
              {...EXTERNAL_LINK_PROPS}
              className="hover:underline"
            >
              <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
              View repository
            </a>
          </div>
          {/* <h2 className="text-xl pt-2">{subtitle}</h2> */}
          <SectionSeparator className="my-3" />
          <div>
            <img
              src={workshop.coverImage}
              alt={workshop.title}
              className="md:float-left md:mr-5 mb-2 mx-auto max-w-64 object-cover"
            />

            <div className="space-y-2">
              {workshop.description.map((text, index) => (
                <Markdown key={index} remarkPlugins={[remarkGfm]}>
                  {text}
                </Markdown>
              ))}
            </div>
          </div>
          <SectionSeparator className="my-5" />
          <div>
            <h2 className="text-2xl mb-5">Workshop outline</h2>
            <div className="space-y-2">
              {Object.entries(workshop.outline).map(([section, summary], index) => (
                <Collapsible
                  key={section}
                  open={index === 0}
                  trigger={
                    <>
                      <FontAwesomeIcon icon={faChevronRight} className="pr-1" fixedWidth />
                      <span className="text-lg text-bold">{section}</span>
                    </>
                  }
                  triggerWhenOpen={
                    <>
                      <FontAwesomeIcon icon={faChevronDown} className="pr-1" fixedWidth />
                      <span className="text-lg text-bold">{section}</span>
                    </>
                  }
                >
                  <Markdown className="px-6 py-2" remarkPlugins={[remarkGfm]}>
                    {summary}
                  </Markdown>
                </Collapsible>
              ))}
            </div>
          </div>
          <SectionSeparator className="my-10" />
          <div>
            <h2 className="text-2xl mb-5">Past sessions</h2>
            <p>Click a pin on the map to see the conferences I have presented this workshop at.</p>
            <div className="grid lg:grid-cols-2 mt-2 md:mx-10 gap-x-10 gap-y-10 items-center">
              <div>
                {' '}
                {/* TODO: turn this into a component and consider adding support for dates and titles
                make the zoomable optional bc it is annoying that when you are done it scrolls the page down
                (for events pages)*/}
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    center: [-50, 50],
                    scale: 200,
                  }}
                  fill="transparent"
                  stroke="#eee"
                  strokeWidth={1}
                >
                  <ZoomableGroup>
                    <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            opacity={countries.includes(geo.properties.name) ? 0.5 : 0.1}
                            fill={countries.includes(geo.properties.name) ? '#ffd7a6' : '#000'} // TODO: when color scheme is chosen, the highlight color needs to be used here
                            stroke="black"
                            style={{
                              default: { outline: 'none' },
                              hover: { outline: 'none' },
                              pressed: { outline: 'none' },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    {pastSessions.map((location) => (
                      <Marker key={location} coordinates={location.coordinates}>
                        <text
                          textAnchor="middle"
                          style={{ cursor: 'pointer', fontSize: '25px' }}
                          onClick={() => setMapPin(location)}
                        >
                          {MAP_PIN}
                        </text>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>
              <div className="flex flex-col items-center">
                {selectedMapPin != null ? (
                  <>
                    <p className="text-bold text-4xl md:text-5xl -mb-2">
                      {FLAGS[selectedMapPin.country]}
                    </p>
                    <p className="text-bold text-xl md:text-2xl">
                      {selectedMapPin.city},{' '}
                      {selectedMapPin.country === 'United States of America'
                        ? 'USA'
                        : selectedMapPin.country}
                    </p>
                    <ul className="mx-4 text-sm lg:text-lg text-center">
                      {selectedMapPin.conferences.map((conference) => (
                        <li key={conference}>{conference}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <SectionSeparator className="my-10" />
          {reviews != null ? (
            <>
              <ReviewsSection reviews={reviews} />
              <SectionSeparator className="my-10" />
            </>
          ) : null}
          <RelatedContentSection relatedContent={relatedContent} />
        </div>
      </Container>
    </Layout>
  );
}
type Params = {
  params: {
    workshop: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  return { props: { workshopKey: params.workshop } };
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(WORKSHOP_PAGE_MAPPING).map((workshop) => ({ params: { workshop } })),
    fallback: false,
  };
}
