import dedent from 'dedent';
import { generateBookPageLink } from '../lib/books';
import type FAQ from '../interfaces/faq';
import type BookPage from '../interfaces/book-page';
import CONTENT_LINKS from './content-links';

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
      coverImage: CONTENT_LINKS.PANDAS_BOOK_2.image,
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
      repo: 'Hands-On-Data-Analysis-with-Pandas-2nd-edition',
      tags: ['pandas', 'data analysis', 'data science', 'Python'],
      translations: [
        {
          publicationDate: '2022-11-30',
          coverImage: {
            src: '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/korean-cover.jpeg',
            width: 458,
            height: 573,
          },
          language: 'Korean',
        },
        {
          publicationDate: '2023-06-30',
          coverImage: {
            src: '/assets/books/hands-on-data-analysis-with-pandas-2nd-edition/chinese-cover.jpeg',
            width: 643,
            height: 800,
          },
          language: 'Chinese',
        },
      ],
    },
    relatedContent: [
      CONTENT_LINKS.PANDAS_WORKSHOP,
      CONTENT_LINKS.DATA_VIZ_WORKSHOP,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.INTERVIEWS,
      CONTENT_LINKS.DATA_SCIENCE_ARTICLES,
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
        EDA to data cleaning, data wrangling, visualization, and finally to applications.

        Thorough treatments are given to data cleaning, data wrangling, and data enrichment as separate
        topics, going into deep details on how to reshape and reindex data frames, how to do proper
        joins on data frames, left, right, inner, and outer, and how to do many other data cleaning
        and wrangling steps.\[...\]

        This is the first and best book you should buy for Pandas.`,
        rating: 5,
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
        rating: 5,
        source:
          'https://www.amazon.com/gp/customer-reviews/R1UJCL8CPVR1JM/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'Darrel Robinson (@darrob22)',
        text: `Thanks for writing it! It's honestly the best \[P\]ython book I've come across, and
        the only one I recommend to people.`,
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
        author: 'MLEngineer (via Amazon)',
        text: dedent`After reading this book, you will get far more than expected. The book is very thorough,
        going into novel details in regards to Financial Analysis, Data Analysis, and Data Wrangling.
        I would recommend it to both beginners and experts.

        Additionally, the book has great insight into Python Software Engineering & Product Prototyping
        which is the underlying base of quick analysis, data processing, and engineering. Awesome book.`,
        rating: 5,
        source:
          'https://www.amazon.com/gp/customer-reviews/R2G6VD8MUEYCYF/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'Ali (via Amazon)',
        text: `This is a good book for aspiring data scientists. My initial impression from the book
        title "Data Analysis with Pandas" that this was going to a book that was all about the ins
        and outs of Pandas. I was wrong, as the book covered a broad range of concepts (software
        engineering, statistics, and machine learning). The chapters were well structured and start
        with concepts, followed by the application of techniques with code examples, exercises, and
        a list of references for further reading. It is the book I wish I had read earlier on my
        learning, and I highly recommend it.`,
        rating: 5,
        source:
          'https://www.amazon.com/gp/customer-reviews/R1BA4D3NENJQJE/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'Florian Paolo (via Amazon)',
        text: `Ottimo libro. Livello intermedio, teoria e ottimi esempi, il capitolo sulla classe per
        l'analisi dati di borsa è veramente ben fatto. Uso proficuo del chaining e delle classi.
        Uno dei migliori testi su python e le librerie per l'analisi dei dati. Consiglio`,
        rating: 5,
        source:
          'https://www.amazon.it/review/R3RPKJAC1FLLKF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=1800563450',
      },
      {
        author: 'João (via Amazon)',
        text: `Hands-On Data Analysis with Pandas: A Python data science handbook for data collection,
        wrangling, analysis, and visualization, 2nd Edition by Stefanie Molin is one of the best books
        for data science beginners, data analysts, and Python! This is my reference book and for sure
        I would like to recommend it for anyone interested in these topics.`,
        rating: 5,
      },
      {
        author: 'Sara A. Metwalli (via Towards Data Science)',
        text: dedent`5 Books to Help You Master the Pandas Library (#1):

        Stefanie wrote this book to help beginners build a solid foundation of the fundamentals of
        Pandas and how they can be used to deal with different sizes of datasets. This book is my
        favorite if you're just getting into data science but have some Python knowledge.

        The book covers all basic data manipulation topics such as EDA (exploratory data analysis),
        statistics fundamentals, dealing with data points, applying some machine learning algorithms,
        and visualizing your data. The author of this book, Stefanie, also sometimes offers
        [training](/workshops) to people who want to be guided and supported through the information.
        The end of the book gets into some advanced topics, and addresses Git and GitHub as well.`,
        source:
          'https://towardsdatascience.com/5-books-to-help-you-master-the-pandas-library-acb5c305159b',
      },
      {
        author: 'script spark (via YouTube)',
        text: dedent`"Hands on Data Analysis with Pandas" is one of the best books I have read
        recently. What I like the most about it is the structure: combine chapters explaining the
        different parts of pandas with chapters that have complete practical examples of analysis.
        This allows you to see detailed examples of the functionality but also see how they fit in
        with the larger picture of a full analysis. Also, it approaches the teaching of pandas with
        both a data analyst perspective and a software engineer perspective. To be successful in
        data science today we need to wear both of those hats, so for someone coming from an analysis
        background without formal software engineering training, the book helps demystify concepts
        like virtualenv, simulations, source control, etc.`,
        source: 'https://www.youtube.com/watch?v=SGDh9PvO1FM&t=125s',
      },
      {
        author: 'Chanin Nantasenamat (via Towards Data Science)',
        text: `The book covers the entire span of the data science process from data wrangling with
        Pandas to data visualization with Matplotlib and Seaborn as well as model building with
        Scikit-learn.`,
        source: 'https://towardsdatascience.com/how-to-master-pandas-for-data-science-b8ab0a9b1042',
      },
      {
        author: 'Jesper Dramsch',
        text: `Don't Sleep On These 3 Books For Learning Data Analytics (#3): Truly \[h\]ands-on
        from pandas to machine learning.`,
        source:
          'https://dramsch.net/articles/dont-sleep-on-these-3-books-for-learning-data-analytics/',
      },
      {
        author: 'Srujana (via Geekflare)',
        text: dedent`11 Best Data Science Books to Learn from Theory to Practical Applications
        \[2024 Edition\]: #9

        Whether you are a novice or a skilled data wizard, this hands-on data analysis with Pandas
        book shows every single trick you need to explore, analyze, and manipulate data using Pandas.
        \[...\] By working on end-chapter exercises, you'll gradually develop skills to handle
        real-world data in your professional work.`,
        source: 'https://geekflare.com/best-data-science-books/',
      },
      {
        author: 'Physicstodata (@angelmcarr)',
        text: `For pandas I recommend @StefanieMolin's book, I learned a lot from that one.`,
        source: 'https://x.com/angelmcarr/status/1619307784285335552?s=20',
      },
      {
        author: `nebelgrau/Michal 🐍🦀🤖 💙💛🌻`,
        text: `I just want to say that... "Hands-on Data Analysis with Pandas" by @StefanieMolin
        @PacktPub is GREAT!!! 🐼🐍`,
        source: 'https://x.com/nebelgrau77/status/1502600093232476164?s=20',
      },
      {
        author: 'Manjiri (via Analytics Drift)',
        text: dedent`Top data analytics book #4:

        With this book, you can learn to use Pandas in different real-world problems with the help
        of step-by-step explanations. This book helps you analyze data, start with machine learning
        algorithms, and work with Python libraries \[...\]. This book is suitable for data science
        beginners, Python developers, and data analysts who want to explore every data analysis
        stage with various datasets.`,
        source: 'https://analyticsdrift.com/top-data-analytics-books/',
      },
      {
        author: 'DataTalks.Club',
        text: 'Book of the week from 18 Jul 2022 to 22 Jul 2022',
        source: 'https://datatalks.club/books/20220718-hands-on-data-analysis-with-pandas.html',
      },
      {
        author: 'ODSC Team',
        text: `Top Data Science Books to Get as Gifts for the Holidays \[2022 Edition\]: #2`,
        source:
          'https://opendatascience.com/top-data-science-books-to-get-as-gifts-for-the-holidays/',
      },
      {
        author: 'Sandeep Pawar (@PawarBI)',
        text: `For Data Analysis, I recommend @StefanieMolin's book.`,
        source: 'https://x.com/PawarBI/status/1620474899008749568?s=20',
      },
    ],
  },
  {
    book: {
      title: 'Hands-On Data Analysis with Pandas',
      subtitle:
        'Efficiently perform data collection, wrangling, analysis, and visualization using Python',
      edition: '1st',
      coverImage: CONTENT_LINKS.PANDAS_BOOK_1.image,
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
      repo: 'Hands-On-Data-Analysis-with-Pandas',
      tags: ['pandas', 'data analysis', 'data science', 'Python'],
    },
    relatedContent: [
      { ...CONTENT_LINKS.PANDAS_BOOK, title: '2nd edition' },
      CONTENT_LINKS.PANDAS_WORKSHOP,
      CONTENT_LINKS.DATA_VIZ_WORKSHOP,
      CONTENT_LINKS.EVENTS,
      CONTENT_LINKS.PIVOT_AND_PLOT_WITH_PANDAS_ARTICLE,
      CONTENT_LINKS.INTERVIEWS,
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
        text: `Stefanie Molin's "\[Hands-On \]Data Analysis with Pandas" has one of the best intro chapters I've
        seen, with a section on git and another on the importance of setting up a separate environment
        for each project. I recommend it for any of your future students.`,
        source: 'https://x.com/SaenzScott/status/1175031439253024768?s=20',
      },
      {
        author: 'Adam (via Amazon)',
        text: `Great foundational book. Amazing read. Very thorough, covering a broad range of topics
        in the data science space. I would highly recommend starting with this book for anyone interested
        in building a foundation in Data Science.`,
        rating: 5,
        source:
          'https://www.amazon.com/gp/customer-reviews/R1DMWTMYW7KFUD/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=1789615321',
      },
      {
        author: 'Nikolaos Antimisiaris (via Amazon)',
        text: `Better approach to data science learning. Very good resource. Does a great job in
        providing the fundamentals and guiding you to learn. After 2 other book purchases (and returns)
        on Python / Data Science topics that disappointed me, this one is spot on.`,
        rating: 5,
        source:
          'https://www.amazon.com/gp/customer-reviews/R14X0YO4BEP5FY/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=1789615321',
      },
      {
        author: 'Hugo Paulo (via Amazon)',
        text: `Muito Bom. É um livro com muito conteúdo, tanto técnico quanto prático. Tem uma pequena
        introdução sobre Análise de Dados e Revisão de Tópicos de Estatística. E, em seguida, inicia
        um amplo e detalhado curso de Pandas. Tem teoria, exercícios e exemplos de aplicações práticas.`,
        rating: 5,
      },
      {
        author: 'Chanin Nantasenamat (via Towards Data Science)',
        text: `The book covers the entire span of the data science process from data wrangling with
        Pandas to data visualization with Matplotlib and Seaborn as well as model building with
        Scikit-learn.`,
        source: 'https://towardsdatascience.com/how-to-master-pandas-for-data-science-b8ab0a9b1042',
      },
      {
        author: 'RealToughCandy',
        text: dedent`11 Best Data Analysis Books in 2021 (#10)

        Hands-On Data Analysis with Pandas by Stefanie Molin is one of the best data analysis books
        for using Python to collect, wrangle, analyze, visualize, and more with data.`,
        source: 'https://realtoughcandy.com/data-analysis-books/',
      },
      {
        author: 'Data Courses',
        text: dedent`Essential Books for Learning Pandas (#2)

        It ramps up nicely going from basic topics into in-depth tutorials on exploratory data
        analysis, statistics, and machine learning problems.

        The book is highly rated on Amazon largely due to its practical approach to solving business
        problems with the library. \[...\]

        We think the advanced techniques provided at the end of the book are extremely useful. The
        GitHub repository provided in the book help you to understand Git a little better as a
        beginner as well as provide the actual source code for the book in a compatible way to
        reproduce the examples yourself.`,
        source: 'https://www.datacourses.com/essential-books-for-learning-pandas-1481/',
      },
    ],
  },
];

export const BOOK_PAGE_MAPPING: Record<string, BookPage> = BOOK_PAGES.reduce(
  (accum, value) => ({ ...accum, [generateBookPageLink(value.book)]: value }),
  {},
);
