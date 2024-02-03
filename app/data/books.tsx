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
      description: [
        <p key={1}>
          Data analysis has become an essential skill in a variety of domains where knowing how to
          work with data and extract insights can generate significant value.{' '}
          <em>Hands-On Data Analysis with Pandas</em> will show you how to analyze your data, get
          started with machine learning, and work effectively with the Python libraries often used
          for data science, such as pandas, NumPy, matplotlib, seaborn, and scikit-learn.
        </p>,
        <p key={2}>
          Using real-world datasets, you will learn how to use the pandas library to perform data
          wrangling to reshape, clean, and aggregate your data. Then, you will learn how to conduct
          exploratory data analysis by calculating summary statistics and visualizing the data to
          find patterns. In the concluding chapters, you will explore some applications of anomaly
          detection, regression, clustering, and classification using scikit-learn to make
          predictions based on past data.
        </p>,
        <p key={3}>
          This updated edition will equip you with the skills you need to use pandas 1.x to
          efficiently perform various data manipulation tasks, reliably reproduce analyses, and
          visualize your data for effective decision making—valuable knowledge that can be applied
          across multiple domains.
        </p>,
      ],
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
        image: '/assets/articles/how-to-pivot-and-plot-data-with-pandas/cover-image.jpg', // TODO: change to just the image name and then use the link to find it (i.e. prepend "/assets")
        title: 'Pandas Workshop',
      },
      {
        link: '/workshops/python-data-viz-workshop',
        contentClass: 'workshop',
        image: '/assets/articles/introducing-data-morph/panda-to-star.gif',
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
    reviews: [{ author: 'Anonymous', text: "It's fantastic!" }],
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
      description: [
        <p key={1}>
          Data analysis has become an essential skill in a variety of domains where knowing how to
          work with data and extract insights can generate significant value.
        </p>,
        <p key={2}>
          <em>Hands-On Data Analysis with Pandas</em> will show you how to analyze your data, get
          started with machine learning, and work effectively with Python libraries often used for
          data science, such as pandas, NumPy, matplotlib, seaborn, and scikit-learn. Using
          real-world datasets, you will learn how to use the powerful pandas library to perform data
          wrangling to reshape, clean, and aggregate your data. Then, you will learn how to conduct
          exploratory data analysis by calculating summary statistics and visualizing the data to
          find patterns. In the concluding chapters, you will explore some applications of anomaly
          detection, regression, clustering, and classification, using scikit-learn, to make
          predictions based on past data.
        </p>,
        <p key={3}>
          By the end of this book, you will be equipped with the skills you need to use pandas to
          ensure the veracity of your data, visualize it for effective decision-making, and reliably
          reproduce analysis across multiple domains.
        </p>,
      ],
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
  },
];

export const BOOK_PAGE_MAPPING: Record<string, BookPage> = BOOK_PAGES.reduce(
  (accum, value) => ({ ...accum, [generateBookPageLink(value.book)]: value }),
  {},
);
