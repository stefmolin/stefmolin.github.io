import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { usePageURL } from '../../lib/hooks';
import { EXTERNAL_LINK_PROPS, GITHUB_PROFILE } from '../../data/constants';
import SectionSeparator from '../../components/section-separator';
import ReviewsSection from '../../components/reviews';
import { getImageLink } from '../../lib/images';
import { WORKSHOP_PAGE_MAPPING } from '../../data/workshops';
import RelatedContentSection from '../../components/related-content';
import { type ConferencePresentation } from '../../interfaces/event';
import WorkshopOutline from '../../components/workshops/workshop-outline';
import InteractiveMap from '../../components/maps/interactive-map';
import DurationIndicator from '../../components/datetime/duration-indicator';
import markdownStyles from '../../styles/markdown-styles.module.css';
import { getConferenceEventMapAnnotations, getLivePresentations } from '../../lib/events';

// TODO: WorkshopHeader/Title component for the title and links below it + potentially another one to encapsulate everything
// TODO: WorkshopSummary component for image and description (with short option for use on /workshops)
// TODO: link to setup instructions and prereqs
// TODO: decide on whether to include event images or save for the other page
// TODO: read descriptions from READMEs in GitHub for consistency? this will hardly be updated so it can wait

export default function WorkshopPage({ workshopKey }: { workshopKey: string }) {
  const { workshop, reviews, relatedContent } = WORKSHOP_PAGE_MAPPING[workshopKey];

  const preview = false;
  const workshopCoverImage = getImageLink(workshop.coverImage);

  const pastSessions = getLivePresentations({
    contentClass: 'workshop',
    title: workshop.title,
  });
  const locationToEvents = getConferenceEventMapAnnotations(pastSessions);

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
                alt: workshop.title,
              },
            ],
          }}
        />
        <div className="mt-4 mb-20 max-w-5xl mx-auto">
          <h1 className="text-5xl mb-2">{workshop.title}</h1>
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-row items-center space-x-2">
              <span>
                <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
                <a
                  href={`${GITHUB_PROFILE}/${workshop.repo}`}
                  {...EXTERNAL_LINK_PROPS}
                  className="hover:underline text-slate-600"
                >
                  View repository
                </a>
              </span>
              <span>
                <FontAwesomeIcon icon={faFileAlt} className="pr-1" fixedWidth />
                <a href={workshop.slidesLink} className="hover:underline text-slate-600">
                  View slides
                </a>
              </span>
            </div>
            <DurationIndicator duration={workshop.duration} />
          </div>
          {/* <h2 className="text-xl pt-2">{subtitle}</h2> */}
          <SectionSeparator className="my-3" />
          <div>
            <img
              src={workshop.coverImage}
              alt={workshop.title}
              className="md:float-left md:mr-5 mb-2 mx-auto max-w-64 object-cover"
            />

            <div>
              {workshop.description.map((text, index) => (
                <Markdown
                  key={index}
                  className={markdownStyles['markdown']}
                  remarkPlugins={[remarkGfm]}
                >
                  {text}
                </Markdown>
              ))}
            </div>
          </div>
          <SectionSeparator className="my-5" />
          <WorkshopOutline workshop={workshop} />
          <SectionSeparator className="my-10" />
          <div>
            <h2 className="text-3xl mb-5">Past sessions</h2>
            <p>Click a pin on the map to see the conferences I have presented this workshop at.</p>
            <InteractiveMap
              locations={locationToEvents}
              highlightedCountries={locationToEvents.map(({ country }) => country)}
              getDisplayInfo={(pin: ConferencePresentation) => (
                <ul className="mx-4 text-sm lg:text-lg text-center">
                  {pin.annotation.map(({ event, date }) => (
                    <li key={date}>{`${event.name} ${date.slice(0, 4)}`}</li>
                  ))}
                </ul>
              )}
            />
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
