import { type WorkshopPage } from '../interfaces/workshop';
import CONTENT_LINKS from './content-links';
import LOCATIONS from './locations';

const WORKSHOP_PAGES: WorkshopPage[] = [
  {
    workshop: {
      title: 'Introduction to Data Analysis Using Pandas',
      subtitle:
        'An introductory training designed to provide initial hands-on experience with the pandas library.',
      repo: 'pandas-workshop',
      coverImage:
        'https://hips.hearstapps.com/elleuk.cdnds.net/16/36/3200x1599/gallery-1473083573-pandas.jpg',
      description: [
        `Working with data can be challenging: it often doesn't come in the best format for analysis,
      and understanding it well enough to extract insights requires both time and the skills to filter,
      aggregate, reshape, and visualize it. This session will equip you with the knowledge you need
      to effectively use pandas – a powerful library for data analysis in Python – to make
      this process easier.`,
        `Pandas makes it possible to work with tabular data and perform all parts of the analysis from
      collection and manipulation through aggregation and visualization. While most of this session
      focuses on pandas, during our discussion of visualization, we will also introduce at a high
      level Matplotlib (the library that pandas uses for its visualization features, which when used
      directly makes it possible to create custom layouts, add annotations, *etc.*) and Seaborn (another
      plotting library, which features additional plot types and the ability to visualize long-format data).`,
      ],
      slidesLink:
        'https://stefaniemolin.com/pandas-workshop/slides/html/workshop.slides.html#/intro',
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
    ],
    relatedContent: [
      CONTENT_LINKS.DATA_VIZ_WORKSHOP,
      CONTENT_LINKS.DATA_SCIENCE_ARTICLES,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.PANDAS_BOOK,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.INTERVIEWS,
    ],
    pastSessions: [
      {
        ...LOCATIONS.LONDON,
        annotation: ['ODSC Europe 2021', 'ODSC Europe 2023'],
      },
      {
        ...LOCATIONS.TORONTO,
        annotation: ['Toronto Machine Learning Summit (TMLS) 2021'],
      },
      {
        ...LOCATIONS.SLC,
        annotation: ['PyCon US 2022'],
      },
      {
        ...LOCATIONS.PRAGUE,
        annotation: ['PyCon CZ 2023'],
      },
      {
        ...LOCATIONS.CARDIFF,
        annotation: ['PyCon UK 2022', 'PyCon UK 2023'],
      },
      {
        ...LOCATIONS.PORTO,
        annotation: ['PyCon PT 2022'],
      },
      {
        ...LOCATIONS.BASEL,
        annotation: ['EuroSciPy 2023'],
      },
      {
        ...LOCATIONS.DUBAI,
        annotation: ['PyCon MEA 2023'],
      },
    ],
  },
  {
    workshop: {
      title: 'Beyond the Basics: Data Visualization in Python',
      subtitle:
        'A workshop on creating static, animated, and interactive data visualizations in Python.',
      repo: 'python-data-viz-workshop',
      coverImage: '/assets/workshops/python-data-viz-workshop/cover-image.avif',
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
      slidesLink:
        'https://stefaniemolin.com/python-data-viz-workshop/slides/html/workshop.slides.html#/intro',
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
        text: `huge thanks to @StefanieMolin for the great workshop on #dataviz w/ #pandas, #matplotlib,
        #pyplot and #holoviz and for the very kind gift 😍 to better code!`,
        author: 'Sho (@shoyip)',
        source: 'https://x.com/shoyip/status/1534060759516385281?s=20',
      }, // PyCon IT 2022
      {
        text: 'Thanks again for the comprehensive material and input/examples to explore!',
        author: 'PyCon IT 2023 attendee',
      },
    ],
    relatedContent: [
      CONTENT_LINKS.PANDAS_WORKSHOP,
      CONTENT_LINKS.PANDAS_BOOK,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.DATA_VIZ_ARTICLES,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.INTERVIEWS,
    ],
    pastSessions: [
      {
        ...LOCATIONS.SF,
        annotation: ['ODSC West 2021', 'ODSC West 2022'],
      },
      {
        ...LOCATIONS.TORONTO,
        annotation: ['Toronto Machine Learning Summit (TMLS) 2022'],
      },
      {
        ...LOCATIONS.BOSTON,
        annotation: ['ODSC East 2022', 'ODSC East 2023'],
      },
      {
        ...LOCATIONS.FLORENCE,
        annotation: ['PyCon IT 2022', 'PyCon IT 2023'],
      },
      {
        ...LOCATIONS.LONDON,
        annotation: ['ODSC Europe 2022'],
      },
      {
        ...LOCATIONS.DUBLIN,
        annotation: ['EuroPython 2022'],
      },
      {
        ...LOCATIONS.SLC,
        annotation: ['PyCon US 2023'],
      },
      {
        ...LOCATIONS.COIMBRA,
        annotation: ['PyCon PT 2023'],
      },
    ],
  },
];
export default WORKSHOP_PAGES;

export const WORKSHOP_COUNTRIES = WORKSHOP_PAGES.reduce(
  (accum, page) => [...accum, ...page.pastSessions.map((session) => session.country)],
  [],
);

export const WORKSHOP_PAGE_MAPPING: Record<string, WorkshopPage> = WORKSHOP_PAGES.reduce(
  (accum, page) => ({ ...accum, [page.workshop.repo]: page }),
  {},
);
