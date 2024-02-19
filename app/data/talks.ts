import { type TalkCard } from '../interfaces/talk';
import CONTENT_LINKS from './content-links';
import { PRESENTATIONS } from './events';

const TALK_CARDS: TalkCard[] = [
  {
    talk: {
      title: PRESENTATIONS.DATA_MORPH.title,
      coverImage: CONTENT_LINKS.TALKS.image,
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
      slug: 'introducing-data-morph',
      contentClass: 'article',
    },
  },
];
export default TALK_CARDS;
