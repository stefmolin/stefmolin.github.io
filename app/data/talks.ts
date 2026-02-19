import { type TalkCard } from '../interfaces/talk';
import { type Presentation } from '../interfaces/event';
import { HOME_URL } from './constants';
import CONTENT_LINKS, { SEE_ALSO_LINKS } from './content-links';

export const TALK_CARD_MAPPING: Record<string, TalkCard> = {
  DATA_MORPH: {
    talk: {
      contentClass: 'talk',
      title: 'Data Morph: A Cautionary Tale of Summary Statistics',
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
      slidesLink: `${HOME_URL}/data-morph-talk/`,
      duration: '30 minutes',
      link: '/talks/#data-morph-a-cautionary-tale-of-summary-statistics',
    },
    seeAlso: {
      title: 'Data Morph: Moving Beyond the Datasaurus Dozen',
      slug: CONTENT_LINKS.DATA_MORPH_ARTICLE.link,
      contentClass: CONTENT_LINKS.DATA_MORPH_ARTICLE.contentClass,
    },
  },
  GETTING_STARTED_IN_OPEN_SOURCE: {
    talk: {
      contentClass: 'talk',
      title: 'Getting Started with Open Source Contributions',
      coverImage: {
        src: `${HOME_URL}/getting-started-with-open-source-talk/images/cover.jpeg`,
        width: 1200,
        height: 800,
        alt: 'A guide to getting started with open source contributions.',
      },
      description: [
        `The open source community is all about giving back and learning from one another. No matter
        how small, every contribution is valuable. And everyone can contribute something with a
        little bit of help. The hardest part is finding something to work on that fits your interests
        and skills.`,
        `In this talk, I will provide five ways that I used to get started contributing to different
        open source projects. I also share some guidance on selecting projects to contribute to and
        how to set yourself up for success. Get ready to start your open source journey!`,
      ],
      slidesLink: `${HOME_URL}/getting-started-with-open-source-talk/`,
      duration: '30 minutes',
      link: '/talks/#getting-started-with-open-source-contributions',
    },
    seeAlso: SEE_ALSO_LINKS.GET_STARTED_IN_OPEN_SOURCE_ARTICLE,
  },
  AST_KEYNOTE: {
    talk: {
      contentClass: 'talk',
      subclass: 'keynote',
      title: 'Build Your Own (Simple) Static Code Analyzer',
      coverImage: {
        src: `${HOME_URL}/build-your-own-simple-static-code-analyzer-talk/media/traversal-animation.gif`,
        width: 1368,
        height: 1079,
        alt: 'Animation of AST traversal in Python on a simple module with a class and two methods.',
      },
      description: [
        `Code reviewers often face significant cognitive load. Depending on the project, they must
        scrutinize the implementation, check that the code adheres to conventions &ndash; such as
        using the latest syntax and language constructs &ndash; verify that the code is properly
        documented, and much more. When performed manually, these code-quality checks can easily
        monopolize the reviewer's time. As a result, it is a key priority to offload as many tasks
        as possible onto static code analysis tools &ndash; like linters and formatters &ndash; so
        the reviewer can focus on the implementation itself.`,
        `How do these tools work, and how could you build one of your own to enforce conventions
        specific to your codebase? In this keynote, I will walk you through the process of creating
        a simple static code analyzer in Python using a data structure called an abstract syntax
        tree, which represents your code's structure and allows you to access its components in
        order to perform checks.`,
      ],
      slidesLink: `${HOME_URL}/build-your-own-simple-static-code-analyzer-talk/`,
      duration: '55 minutes',
      link: '/talks/#build-your-own-(simple)-static-code-analyzer',
    },
    seeAlso: {
      title: 'Docstringify',
      slug: 'https://pypi.org/project/docstringify/',
      contentClass: 'page',
    },
  },
};

const TALK_CARDS: TalkCard[] = Object.values(TALK_CARD_MAPPING);
export default TALK_CARDS;

export const TALKS: Record<string, Presentation> = Object.entries(TALK_CARD_MAPPING).reduce(
  (accum, [key, talkCard]) => ({
    ...accum,
    [key]: {
      contentClass: talkCard.talk.contentClass,
      title: talkCard.talk.title,
      link: talkCard.talk.link,
      subclass: talkCard.talk.subclass,
    },
  }),
  {},
);
