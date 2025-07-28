import dedent from 'dedent';
import { type Presentation } from '../interfaces/event';
import { type WorkshopPage } from '../interfaces/workshop';
import CONTENT_LINKS from './content-links';

export const WORKSHOP_MAPPING: Record<string, WorkshopPage> = {
  PANDAS_WORKSHOP: {
    workshop: {
      contentClass: 'workshop',
      title: 'Introduction to Data Analysis Using Pandas',
      subtitle:
        'An introductory training designed to provide initial hands-on experience with the pandas library.',
      repo: 'pandas-workshop',
      coverImage: CONTENT_LINKS.PANDAS_WORKSHOP.image,
      link: CONTENT_LINKS.PANDAS_WORKSHOP.link,
      description: [
        `Working with data can be challenging: it often doesn't come in the best format for analysis,
      and understanding it well enough to extract insights requires both time and the skills to filter,
      aggregate, reshape, and visualize it. This session will equip you with the knowledge you need
      to effectively use pandas &ndash; a powerful library for data analysis in Python &ndash; to make
      this process easier.`,
        `Pandas makes it possible to work with tabular data and perform all parts of the analysis from
      collection and manipulation through aggregation and visualization. While most of this session
      focuses on pandas, during our discussion of visualization, we will also introduce at a high
      level Matplotlib (the library that pandas uses for its visualization features, which when used
      directly makes it possible to create custom layouts, add annotations, *etc.*) and Seaborn (another
      plotting library, which features additional plot types and the ability to visualize long-format data).`,
      ],
      duration: '3-4 hours',
      outline: {
        'Section 1: Getting Started With Pandas': `We will begin by introducing the \`Series\`, \`DataFrame\`,
      and \`Index\` classes, which are the basic building blocks of the pandas library, and showing how
      to work with them. By the end of this section, you will be able to create DataFrames and perform
      operations on them to inspect and filter the data.`,
        'Section 2: Data Wrangling': `To prepare our data for analysis, we need to perform data wrangling.
      In this section, we will learn how to clean and reformat data (*e.g.*, renaming columns and fixing
      data type mismatches), restructure/reshape it, and enrich it (*e.g.*, discretizing columns,
      calculating aggregations, and combining data sources).`,
        'Section 3: Data Visualization': `The human brain excels at finding patterns in visual
      representations of the data; so in this section, we will learn how to visualize data using
      pandas along with the Matplotlib and Seaborn libraries for additional features. We will create
      a variety of visualizations that will help us better understand our data.`,
        'Section 4: Hands-On Data Analysis Lab': `We will practice all that you've learned in a hands-on
      lab. This section features a set of analysis tasks that provide opportunities to apply the
      material from the previous sections.`,
      },
    },
    reviews: [
      {
        text: `I had the pleasure of attending this workshop at PyCon Portugal, and it was an
        excellent presentation! The hands-on approach and clear explanations made it easy to follow,
        even for those new to data analysis. Highly recommended to anyone looking to get started
        with Pandas! 👏`,
        author: 'João Sousa (via LinkedIn)',
        source:
          'https://www.linkedin.com/feed/update/urn:li:activity:7249380559787802624?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7249380559787802624%2C7253478263811923969%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287253478263811923969%2Curn%3Ali%3Aactivity%3A7249380559787802624%29',
      }, // PyCon Portugal 2024
      {
        text: 'Perfect balance between theory and practice.',
        author: 'PyCon Portugal 2024 attendee',
      }, // PyCon Portugal 2024
      {
        text: 'By far one of the best workshops at the conference.',
        author: 'PyCon Poland 2024 attendee',
      }, // PyCon PL 2024
      {
        text: `In the first tutorial days of #EuroSciPy2023, @StefanieMolin
        gave an outstanding introduction to data analysis using pandas.`,
        author: 'EuroSciPy (@EuroSciPy)',
        source: 'https://x.com/EuroSciPy/status/1691349804595523584?s=20',
      }, // EuroSciPy 2023
      {
        text: 'Thank you so much for your great workshop on Pandas in Cardiff!',
        author: 'PyCon UK 2022 attendee',
      }, // PyCon UK 2022
      {
        text: 'Thank you again for my favorite workshop so far at ODSC West.',
        author: 'ODSC West 2021 attendee',
      }, // ODSC West 2021
      {
        text: dedent`10 Best pandas Courses to Take in 2024 (#8)

        Looking to learn through hands-on experience with Jupyter notebooks and exercises as you go?
        If so, Stefanie Molin's Pandas Workshop is the perfect fit for you! This course has been
        delivered at \[several\] different conferences and is completely **free**.`,
        author: 'Elham (Class Central)',
        source: 'https://www.classcentral.com/report/best-pandas-courses/#anchor-8',
      },
    ],
    relatedContent: [
      CONTENT_LINKS.DATA_VIZ_WORKSHOP,
      CONTENT_LINKS.DATA_SCIENCE_ARTICLES,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.PANDAS_BOOK,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.INTERVIEWS,
      CONTENT_LINKS.TRAVEL_BLOG,
    ],
  },
  PYTHON_DATA_VIZ_WORKSHOP: {
    workshop: {
      contentClass: 'workshop',
      title: 'Beyond the Basics: Data Visualization in Python',
      subtitle:
        'A workshop on creating static, animated, and interactive data visualizations in Python.',
      repo: 'python-data-viz-workshop',
      coverImage: CONTENT_LINKS.DATA_VIZ_WORKSHOP.image,
      link: CONTENT_LINKS.DATA_VIZ_WORKSHOP.link,
      description: [
        `The human brain excels at finding patterns in visual representations, which is why data
      visualizations are essential to any analysis. Done right, they bridge the gap between those
      analyzing the data and those consuming the analysis. However, learning to create impactful,
      aesthetically-pleasing visualizations can often be challenging. This session will equip you
      with the skills to make customized visualizations for your data using Python.`,
        `While there are many plotting libraries to choose from, the prolific Matplotlib library is
      always a great place to start. Since various Python data science libraries utilize Matplotlib
      under the hood, familiarity with Matplotlib itself gives you the flexibility to fine tune the
      resulting visualizations (*e.g.*, add annotations, animate, *etc.*). This session will also introduce
      interactive visualizations using HoloViz, which provides a higher-level plotting API capable of
      using Matplotlib and Bokeh (a Python library for generating interactive, JavaScript-powered
      visualizations) under the hood.`,
      ],
      duration: '4-6 hours',
      outline: {
        'Section 1: Getting Started With Matplotlib': `We will begin by familiarizing ourselves with
        Matplotlib. Moving beyond the default options, we will explore how to customize various aspects
        of our visualizations. By the end of this section, you will be able to generate plots using
        the Matplotlib API directly, as well as customize the plots that libraries like pandas and
        Seaborn create for you.`,
        'Section 2: Moving Beyond Static Visualizations': `Static visualizations are limited in how
        much information they can show. To move beyond these limitations, we can create animated
        and/or interactive visualizations. Animations make it possible for our visualizations to
        tell a story through movement of the plot components (*e.g.*, bars, points, lines).
        Interactivity makes it possible to explore the data visually by hiding and displaying
        information based on user interest. In this section, we will focus on creating animated
        visualizations using Matplotlib before moving on to create interactive visualizations in the
        next section.`,
        'Section 3: Building Interactive Visualizations for Data Exploration': `When exploring our
        data, interactive visualizations can provide the most value. Without having to create multiple
        iterations of the same plot, we can use mouse actions (*e.g.*, click, hover, zoom, *etc.*) to
        explore different aspects and subsets of the data. In this section, we will learn how to use
        a few of the libraries in the HoloViz ecosystem to create interactive visualizations for
        exploring our data utilizing the Bokeh backend.`,
      },
    },
    reviews: [
      {
        text: `@PyConPT was lovely: thanks to all. My highlight? @StefanieMolin's workshop on data
        viz: it unlocked my understanding of Matplotlib's fundamentals. If you have the chance,
        don't miss it!`,
        author: 'Tiago Montes (@setnomt)',
        source: 'https://x.com/setnomt/status/1700797943245078673?s=20',
      }, // PyCon PT 2023
      {
        text: `Learning a lot about data visualization beyond the basics at #odsc. Thx to
        @StefanieMolin for this great workshop and the awesome examples.`,
        author: 'mobileLarson (@mobileLarson)',
        source: 'https://x.com/mobileLarson/status/1537052051259146241?s=20',
      }, // ODSC Europe 2022
      {
        text: `[H]uge thanks to @StefanieMolin for the great workshop on #dataviz w/ #pandas, #matplotlib,
        #pyplot and #holoviz and for the very kind gift 😍 to better code!`,
        author: 'Sho (@shoyip)',
        source: 'https://x.com/shoyip/status/1534060759516385281?s=20',
      }, // PyCon IT 2022
      {
        text: 'Thanks again for the comprehensive material and input/examples to explore!',
        author: 'PyCon IT 2023 attendee',
      },
      {
        text: 'Me gustó mucho &ndash; estuvo muy chévere!',
        author: 'PyCon Colombia 2024 attendee',
      },
      {
        text: `I liked how you used [functional programming] to create a partial function that
        updates a graph for every frame. [...] Thanks for making your slides open.`,
        author: 'PyCon Colombia 2024 attendee',
      },
    ],
    relatedContent: [
      CONTENT_LINKS.PANDAS_WORKSHOP,
      CONTENT_LINKS.PANDAS_BOOK,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.DATA_VIZ_ARTICLES,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.INTERVIEWS,
      CONTENT_LINKS.TRAVEL_BLOG,
    ],
  },
  PRE_COMMIT_WORKSHOP: {
    workshop: {
      contentClass: 'workshop',
      title: '(Pre-)Commit to Better Code',
      subtitle: 'A workshop on building and using pre-commit hooks to help maintain code quality.',
      repo: 'pre-commit-workshop',
      coverImage: CONTENT_LINKS.PRE_COMMIT_WORKSHOP.image,
      link: CONTENT_LINKS.PRE_COMMIT_WORKSHOP.link,
      description: [
        `Maintaining code quality can be challenging, no matter the size of your project or number of
        contributors. Different team members may have different opinions on code styling and
        preferences for code structure, while solo contributors might find themselves spending a
        considerable amount of time making sure the code conforms to accepted conventions. However,
        manually inspecting and fixing issues in files is both tedious and error-prone. As such,
        computers are much more suited to this task than humans. Pre-commit hooks are a great way to
        have a computer handle this for you.`,
        `Pre-commit hooks are code checks that run whenever you attempt to commit your changes with
        Git. They can detect and, in some cases, automatically correct code-quality issues
        *before* they make it to your codebase. In this tutorial, you will learn how to install and
        configure pre-commit hooks for your repository to ensure that only code that passes your
        checks makes it into your codebase. We will also explore how to build custom pre-commit
        hooks for novel use cases.`,
      ],
      duration: '2-3 hours',
      outline: {
        'Section 1: Setting Up Pre-Commit Hooks': `After laying the foundation with an overview of
        Git hooks, we will discuss the use cases for hooks at the pre-commit stage (called pre-commit
        hooks), as well as a high-level explanation of how to set them up without any external tools.
        We will then introduce the \`pre-commit\` tool and disambiguate it from pre-commit hooks, before
        commencing a detailed walkthrough of the pre-commit hooks setup process when using \`pre-commit\`.`,
        'Section 2: Creating a Pre-Commit Hook': `While there are a lot of pre-made hooks in existence,
        sometimes they aren't sufficient for the task at hand. In this section, we will walk
        step-by-step through the process of creating and distributing a custom hook. After wiring
        everything up, we will discuss best practices for sharing, documenting, testing, and maintaining
        the codebase.`,
      },
    },
    reviews: [
      {
        text: `Stefanie has a gift for teaching. She explain[ed] very well the benefits of the tool.
        She did not leave anyone behind, answered the basic questions from rookie programmers like
        me but also went deep into more complex areas.`,
        author: 'Mauricio',
      }, // EuroPython 2024
      {
        text: `This has been the most useful workshop for me[...] It may be the most useful thing I
        learn at the conference. This is going to really help me with my project.`,
        author: 'EuroPython 2024 attendee',
      },
      {
        text: `You could tell [Stefanie] knew what [she was] talking about and how to explain it.
        The slides are great &ndash; easy to follow even after coming in late.`,
        author: 'EuroPython 2024 attendee',
      },
      {
        text: `Just wanted to say a big thank you for the workshop! It was super practical and full
        of helpful takeaways. I especially enjoyed learning about the different options for
        pre-commit with Python and how to create a customized one. I'm definitely planning to add it
        to my workflow!`,
        author: 'PyCon US 2025 attendee',
      },
      {
        text: `Great explanation of pre[-]commit hooks and how to create your own. Really enjoyed
        how hands-on everything was.`,
        author: 'PyCon US 2025 attendee',
      },
      {
        text: 'Clear informative and with step by step slides',
        author: 'PyCon US 2025 attendee',
      },
      {
        text: `Well explained, good examples. Having local copy of the slides rather than relying on
        the projector is a huge bonus. Appreciate the opportunity to think of a novel application
        rather than just looking at examples.`,
        author: 'PyCon US 2025 attendee',
      },
      {
        text: `I feel I really learned something valuable. It's an easy-to-follow, step-by-step
        tutorial where I never felt overwhelmed by the sheer amount information I got on the topic!
        Thank you very much for what you've taught me today!`,
        author: 'PyCon PT 2025 attendee',
      },
      {
        text: `New concept for me and I found it useful. I liked the way [Stefanie was] helping us
        to keep up with [her] and run the codes`,
        author: 'Bobby',
      }, // PyCon US 2025
      {
        text: `This was great. Now I just have to figure out how we can use it [at work].`,
        author: 'EuroPython 2024 attendee',
      },
      {
        text: 'I was able to get something working by the end and now I know how to [build my own hook].',
        author: 'EuroPython 2024 attendee',
      },
      {
        text: 'Great, learnt a ton, good topic',
        author: 'Marc',
      }, // PyCon US 2025
      {
        text: 'Amazing teacher!',
        author: 'Phebe',
      }, // PyCon US 2025
      {
        text: 'Amazing everything! This workshop was [my] favorite thing from the entire event ✨',
        author: 'Juan',
      }, // PyCon PT 2025
    ],
    relatedContent: [
      CONTENT_LINKS.PRE_COMMIT_ARTICLES,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.INTERVIEWS,
      CONTENT_LINKS.TRAVEL_BLOG,
    ],
  },
};

const WORKSHOP_PAGES: WorkshopPage[] = Object.values(WORKSHOP_MAPPING);
export default WORKSHOP_PAGES;

export const WORKSHOPS: Record<string, Presentation> = Object.entries(WORKSHOP_MAPPING).reduce(
  (accum, [key, workshopPage]) => ({
    ...accum,
    [key]: {
      contentClass: workshopPage.workshop.contentClass,
      title: workshopPage.workshop.title,
      link: workshopPage.workshop.link,
    },
  }),
  {},
);

export const WORKSHOP_PAGE_MAPPING: Record<string, WorkshopPage> = WORKSHOP_PAGES.reduce(
  (accum, page) => ({ ...accum, [page.workshop.repo]: page }),
  {},
);
