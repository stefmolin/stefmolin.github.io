import dedent from 'dedent';
import { generateBookPageLink } from '../lib/books';
import FAQ from '../interfaces/faq';
import BookPage from '../interfaces/book-page';

export const GENERAL_FAQS: FAQ[] = [
  { question: 'What was the hardest part about writing a book?', answer: 'TODO' },
  {
    question: 'Are you planning to write any other books?',
    answer: "Yes! I'm not ready to share what I'm working on, but I do want to write another book.",
  },
];

export const BOOK_PAGES: BookPage[] = [
  {
    book: {
      title: 'Hands-On Data Analysis with Pandas',
      subtitle:
        'A Python data science handbook for data collection, wrangling, analysis, and visualization',
      edition: '2nd',
      coverImage: '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/cover.png',
      isbn: '978-1800563452',
      publicationDate: '2021-04-29',
      pageCount: 788,
      description: dedent`Data analysis has become an essential skill in a variety of domains where knowing how to
      work with data and extract insights can generate significant value. *Hands-On Data Analysis with Pandas*
      will show you how to analyze your data, get started with machine learning, and work effectively
      with the Python libraries often used for data science, such as pandas, NumPy, matplotlib, seaborn,
      and scikit-learn.

      Using real-world datasets, you will learn how to use the pandas library to perform data
      wrangling to reshape, clean, and aggregate your data. Then, you will learn how to conduct
      exploratory data analysis by calculating summary statistics and visualizing the data to
      find patterns. In the concluding chapters, you will explore some applications of anomaly
      detection, regression, clustering, and classification using scikit-learn to make
      predictions based on past data.

      This updated edition will equip you with the skills you need to use pandas 1.x to
      efficiently perform various data manipulation tasks, reliably reproduce analyses, and
      visualize your data for effective decision making—valuable knowledge that can be applied
      across multiple domains.`,
      amazonLink: 'https://amzn.to/3u6v21u',
      repoLink: 'https://github.com/stefmolin/Hands-On-Data-Analysis-with-Pandas-2nd-edition',
      tags: ['pandas', 'data analysis', 'data science', 'Python'],
      translations: [
        {
          publicationDate: '2022-11-30',
          coverImage:
            '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/korean-cover.jpeg',
          language: 'Korean',
        },
        {
          publicationDate: '2023-06-30',
          coverImage:
            '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/chinese-cover.jpeg',
          language: 'Chinese',
        },
      ],
    },
    relatedContent: [
      {
        link: '/workshops/pandas-workshop',
        contentClass: 'workshop',
        image:
          'https://hips.hearstapps.com/elleuk.cdnds.net/16/36/3200x1599/gallery-1473083573-pandas.jpg',
        title: 'Pandas Workshop',
      },
      {
        link: '/workshops/python-data-viz-workshop',
        contentClass: 'workshop',
        image: '/assets/workshops/python-data-viz-workshop/cover-image.avif', // TODO: change to just the image name and then use the link to find it (i.e. prepend "/assets")
        title: 'Python Data Visualization Workshop',
      },
      {
        link: '/articles/how-to-pivot-and-plot-data-with-pandas',
        contentClass: 'post',
        image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg',
        title: 'TBD',
      },
      {
        link: 'TODO',
        contentClass: 'interview',
        image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
        title: 'TBD interview',
      },
      // {
      //   link: 'TODO',
      //   contentClass: 'interview',
      //   image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
      //   title: 'Events',
      // },
    ],
    faqs: [
      {
        question: 'How long did it take you to write the book?',
        answer:
          'The first edition took nearly a year, and the second edition took around nine months.',
      },
      ...GENERAL_FAQS,
    ],
    reviews: [
      {
        author: 'BBCReview (via Amazon)',
        text: dedent`This is a killer book for the Python and data wrangling professional, making all other
        books look like elementary school treatments. I've read 7 Pandas books and 32 Python books that
        have Pandas sections. \[This\] is by far the strongest, most detailed, easiest to follow,
        best-exampled book, and easiest to understand of any of the 39 books read. All other books
        pale in comparison\[...\]

        The datasets are intuitive. \[...\] lots of example code appears on every
        single page, illustrating the features. The story and example code flow together, not skipping
        around or showing disjointed points. The chapters follow your workflow, from data ingest and
        EDA to data cleaning, data wrangling, visualizataion, and finally to applications.

        Thorough treatments are given to data cleaning, data wrangling, and data enrichment as separate
        topics, going into deep details on how to reshape and reindex data frames, how to do proper
        joins on data frames, left, right, inner, and outer, and how to do many other data cleaning
        and wrangling steps.\[...\]

        This is the first and best book you should buy for Pandas.`,
        source:
          'https://www.amazon.com/gp/customer-reviews/R14LQVKOF0M2BX/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'Iñaki Calvo Sánchez (via LinkedIn)',
        text: `📕 If you are looking for a superb Pandas book, Stefanie Molin's "Hands-On Data Analysis
        with Pandas - Second Edition" is what you need \[...\] Why? Because she explains difficult things
        in a clear way, helping you build your knowledge block by block while giving you great exercises
        to practice. Also, the book's repo on GitHub is a fantastic companion. Just fork it, and
        start learning!`,
        source:
          'https://www.linkedin.com/posts/inakicalvo_hands-on-data-analysis-with-pandas-second-activity-7134798565104574464-aDhT',
      },
      {
        author: 'Flavio Fabian ESPECHE NIEVA (via LinkedIn)',
        text: `Claro y preciso en la explicación de
        diferentes conceptos matemáticos y estadísticos, muy enfocado en aprender haciendo y aplicando
        los conocimientos que se van adquiriendo, tal como su nombre lo indica. Recomendable para
        tener siempre a mano.`,
        source:
          'https://www.linkedin.com/posts/flavioespechenieva_hands-on-data-analysis-with-pandas-second-activity-7148494374908186626-09nr',
      },
      {
        author: 'Thomas Tellner (@ttellner)',
        text: `There are some books worth "refreshing" in your library when a new edition comes out -
        @StefanieMolin's book which @KenJee_DS links to below is one of them!`,
        source: 'https://x.com/ttellner/status/1413370158911868928?s=20',
      },
      {
        author: 'John Renne (via Amazon)',
        text: `This easy to follow book is exactly what I needed at this stage of my learning curve.
        I love how the author takes the reader through accessing real world data that are messy and
        in some cases missing. Accessing real world data with APIs is a tool I appreciate leaning and
        then seeing the shortcomings of the real world data has been what most other books are missing.
        This book will better allow me to translate the lessons to my own needs. Well done!`,
        source:
          'https://www.amazon.com/gp/customer-reviews/R1UJCL8CPVR1JM/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'Darrel Robinson (@darrob22)',
        text: `Thanks for writing it! It's honestly the best python book I've come across, and the
        only one I recommend to people.`,
        source: 'https://x.com/darrob22/status/1402971418963361792?s=20',
      },
      {
        author: 'Johnnie Walker (@johnniewalker)',
        text: `Only a couple of chapters in but this book is excellent: very well structured,
        very insightful on the technical concepts and great, up-to-date code repo. Highly recommended.
        T\[h\]x @StefanieMolin`,
        source: 'https://x.com/johnniewalker/status/1658259975196622848?s=20',
      },
      {
        author: 'Florian Paolo (via Amazon)',
        text: `Ottimo libro. Livello intermedio, teoria e ottimi esempi, il capitolo sulla classe per
        l'analisi dati di borsa è veramente ben fatto. Uso proficuo del chaining e delle classi.
        Uno dei migliori testi su python e le librerie per l'analisi dei dati. Consiglio`,
        source:
          'https://www.amazon.it/review/R3RPKJAC1FLLKF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=1800563450',
      },
      // {
      //   author: 'João (via Amazon)',
      //   text: `Hands-On Data Analysis with Pandas: A Python data science handbook for data collection,
      //   wrangling, analysis, and visualization, 2nd Edition by Stefanie Molin is one of the best books
      //   for data science beginners, data analysts, and Python! This is my reference book and for sure
      //   I would like to recommend it for anyone interested in these topics.`,
      // },
      // {
      //   author: 'Sandeep Pawar (@PawarBI)',
      //   text: `For Data Analysis, I recommend @StefanieMolin's book.`,
      //   source: 'https://x.com/PawarBI/status/1620474899008749568?s=20',
      // },
      // {
      //   author: 'Physicstodata (@angelmcarr)',
      //   text: `For pandas I recommend @StefanieMolin's book, I learned a lot from that one.`,
      //   source: 'https://x.com/angelmcarr/status/1619307784285335552?s=20',
      // },
      // {
      //   author: `nebelgrau/Michal 🐍🦀🤖 💙💛🌻`,
      //   text: `I just want to say that... "Hands-on Data Analysis with Pandas" by @StefanieMolin
      //   @PacktPub is GREAT!!! 🐼🐍`,
      //   source: 'https://x.com/nebelgrau77/status/1502600093232476164?s=20',
      // },
    ],
  },
  {
    book: {
      title: 'Hands-On Data Analysis with Pandas',
      subtitle:
        'Efficiently perform data collection, wrangling, analysis, and visualization using Python',
      edition: '1st',
      coverImage: '/assets/books/hands-on-data-analysis-with-pandas-1st-edition/cover.png',
      isbn: '1789615321',
      publicationDate: '2019-07-26',
      pageCount: 740,
      description: dedent`Data analysis has become an essential skill in a variety of domains where
      knowing how to work with data and extract insights can generate significant value.

      *Hands-On Data Analysis with Pandas* will show you how to analyze your data, get
      started with machine learning, and work effectively with Python libraries often used for
      data science, such as pandas, NumPy, matplotlib, seaborn, and scikit-learn. Using
      real-world datasets, you will learn how to use the powerful pandas library to perform data
      wrangling to reshape, clean, and aggregate your data. Then, you will learn how to conduct
      exploratory data analysis by calculating summary statistics and visualizing the data to
      find patterns. In the concluding chapters, you will explore some applications of anomaly
      detection, regression, clustering, and classification, using scikit-learn, to make
      predictions based on past data.

      By the end of this book, you will be equipped with the skills you need to use pandas to
      ensure the veracity of your data, visualize it for effective decision-making, and reliably
      reproduce analysis across multiple domains.`,
      amazonLink: 'https://amzn.to/4bkJBiq',
      repoLink: 'https://github.com/stefmolin/Hands-On-Data-Analysis-with-Pandas',
      tags: ['pandas', 'data analysis', 'data science', 'Python'],
    },
    relatedContent: [
      { link: 'TODO', contentClass: 'post', image: 'TODO', title: 'TODO' },
      { link: 'TODO', contentClass: 'workshop', image: 'TODO', title: 'TODO' },
    ],
    faqs: [
      {
        question: 'How long did it take you to write the book?',
        answer: 'It took nearly a year. It was a labor of love.',
      },
      { question: 'TODO', answer: 'TODO' },
      ...GENERAL_FAQS,
    ],
    reviews: [
      {
        author: 'Scott Saenz (@SaenzScott)',
        text: `Stefanie Molin's "[Hands-On ]Data Analysis with Pandas" has one of the best intro chapters I've
        seen, with a section on git and another on the importance of setting up a separate environment
        for each project. I recommend it for any of your future students.`,
        source: 'https://x.com/SaenzScott/status/1175031439253024768?s=20',
      },
    ],
  },
];

export const BOOK_PAGE_MAPPING: Record<string, BookPage> = BOOK_PAGES.reduce(
  (accum, value) => ({ ...accum, [generateBookPageLink(value.book)]: value }),
  {},
);
