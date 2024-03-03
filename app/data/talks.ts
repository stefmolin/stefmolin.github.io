import { type TalkCard } from '../interfaces/talk';
import { COVER_IMAGE_PENDING } from './constants';
import CONTENT_LINKS, { SEE_ALSO_LINKS } from './content-links';
import { PRESENTATIONS } from './events';

const TALK_CARDS: TalkCard[] = [
  {
    talk: {
      title: PRESENTATIONS.DATA_MORPH.title,
      coverImage: CONTENT_LINKS.DATA_MORPH_ARTICLE.image,
      description: [
        `Statistics do not come intuitively to humans; they always try to find simple ways to
        describe complex things. Given a complex dataset, they may feel tempted to use simple
        summary statistics like the mean, median, or standard deviation to describe it. However,
        these numbers are not a replacement for visualizing the distribution.`,
        `To illustrate this fact, researchers have generated many datasets that are very different
        visually, but share the same summary statistics. In this talk, I will discuss
        [Data Morph](/data-morph/), an open source package that builds on
        previous research using simulated annealing to perturb an arbitrary input dataset into a
        variety of shapes, while preserving the mean, standard deviation, and correlation to
        multiple decimal points. I will showcase how it works, discuss the challenges faced during
        development, and explore the limitations of this approach.`,
      ],
      slidesLink: '/data-morph-talk/',
      duration: '45 minutes',
    },
    seeAlso: {
      title: 'Data Morph: Moving Beyond the Datasaurus Dozen',
      slug: CONTENT_LINKS.DATA_MORPH_ARTICLE.link,
      contentClass: CONTENT_LINKS.DATA_MORPH_ARTICLE.contentClass,
    },
  },
  {
    talk: {
      title: PRESENTATIONS.GETTING_STARTED_IN_OPEN_SOURCE.title,
      coverImage: COVER_IMAGE_PENDING,
      description: [
        `The open source community is all about giving back and learning from one another. No matter
        how small, every contribution is valuable. And everyone can contribute something with a
        little bit of help. The hardest part is finding something to work on that fits your interests
        and skills.`,
        `In this talk, I will provide five ways that I used to get started contributing to different
        open source projects. I also share some guidance on selecting projects to contribute to and
        how to set yourself up for success. Get ready to start your open source journey!`,
      ],
      slidesLink: '/coming-soonish/?slides=Getting-Started-with-Open-Source-Contributions',
      duration: '30 minutes',
    },
    seeAlso: SEE_ALSO_LINKS.GET_STARTED_IN_OPEN_SOURCE_ARTICLE,
  },
];
export default TALK_CARDS;
