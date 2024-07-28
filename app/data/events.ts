import {
  type Event,
  type LivePodcast,
  type LivePresentation,
  type Presentation,
} from '../interfaces/event';
import CONTENT_LINKS from './content-links';
import LOCATIONS from './locations';

const SAME_LOCATION_EVENTS: Record<string, Pick<Event, 'name' | 'location' | 'eventClass'>> = {
  'ODSC East': {
    name: 'ODSC East',
    location: LOCATIONS.BOSTON,
    eventClass: 'conference',
  },
  'ODSC Europe': {
    name: 'ODSC Europe',
    location: LOCATIONS.LONDON,
    eventClass: 'conference',
  },
  'ODSC West': {
    name: 'ODSC West',
    location: LOCATIONS.SF,
    eventClass: 'conference',
  },
  'PyCon IT': {
    name: 'PyCon IT',
    location: LOCATIONS.FLORENCE,
    eventClass: 'conference',
  },
  'PyCon MEA': {
    name: 'PyCon MEA',
    location: LOCATIONS.DUBAI,
    eventClass: 'conference',
  },
  'PyCon UK': {
    name: 'PyCon UK',
    location: LOCATIONS.CARDIFF,
    eventClass: 'conference',
  },
  TMLS: {
    name: 'TMLS',
    location: LOCATIONS.TORONTO,
    eventClass: 'conference',
  },
};

export const PRESENTATIONS: Record<string, Presentation> = {
  PANDAS_WORKSHOP: {
    contentClass: 'workshop',
    title: 'Introduction to Data Analysis Using Pandas',
    link: CONTENT_LINKS.PANDAS_WORKSHOP.link,
  },
  PYTHON_DATA_VIZ_WORKSHOP: {
    contentClass: 'workshop',
    title: 'Beyond the Basics: Data Visualization in Python',
    link: CONTENT_LINKS.DATA_VIZ_WORKSHOP.link,
  },
  DATA_MORPH: {
    contentClass: 'talk',
    title: 'Data Morph: A Cautionary Tale of Summary Statistics',
    link: '/talks/#data-morph-a-cautionary-tale-of-summary-statistics',
  },
  BOOK_SIGNING_PANDAS_1: {
    contentClass: 'book signing',
    title: CONTENT_LINKS.PANDAS_BOOK_1.title,
    link: CONTENT_LINKS.PANDAS_BOOK_1.link,
  },
  BOOK_SIGNING_PANDAS_2: {
    contentClass: 'book signing',
    title: CONTENT_LINKS.PANDAS_BOOK_2.title,
    link: CONTENT_LINKS.PANDAS_BOOK_2.link,
  },
  GETTING_STARTED_IN_OPEN_SOURCE: {
    contentClass: 'talk',
    title: 'Getting Started with Open Source Contributions',
    link: '/talks/#getting-started-with-open-source-contributions',
  },
  PRE_COMMIT_WORKSHOP: {
    contentClass: 'workshop',
    title: '(Pre-)Commit to Better Code',
    link: CONTENT_LINKS.PRE_COMMIT_WORKSHOP.link,
  },
};

export const LIVE_EVENTS: (LivePresentation | LivePodcast)[] = [
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: true,
      link: 'https://odsc.com/speakers/introduction-to-data-analysis-using-pandas/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2021-06-10',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC West'],
      virtual: true,
      link: 'https://odsc.com/speakers/introduction-to-data-visualization-in-python/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2021-11-15',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS.TMLS,
      virtual: true,
      link: 'https://www.torontomachinelearning.com/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2021-11-16',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: 'https://odsc.com/speakers/introduction-to-data-visualization-in-python/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-04-19',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6924326271451582465/',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2022-04-20',
  },
  {
    event: {
      name: 'PyCon US',
      location: LOCATIONS.SLC,
      virtual: false,
      eventClass: 'conference',
      link: 'https://us.pycon.org/2022/schedule/presentation/24/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-04-28',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon IT'],
      virtual: false,
      link: 'https://pycon.it/en/talk/beyond-the-basics-data-visualization-in-python?day=2022-06-03',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-06-03',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: false,
      link: 'https://odsc.com/speakers/introduction-to-data-visualization-in-python/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-06-15',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: false,
      link: 'https://twitter.com/search?q=(%22book%20signing%22%20OR%20%22signed%22)%20(%40StefanieMolin)%20until%3A2022-06-23%20since%3A2022-06-15&src=typed_query&f=top',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2022-06-15',
  },
  {
    event: {
      name: 'EuroPython',
      location: LOCATIONS.DUBLIN,
      virtual: false,
      eventClass: 'conference',
      link: 'https://ep2022.europython.eu/session/beyond-the-basics-data-visualization-in-python',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-07-12',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon UK'],
      virtual: false,
      link: 'https://pretalx.com/pycon-uk-2022/talk/LZKN7F/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-09-16',
  },
  {
    event: {
      name: 'PyCon Portugal',
      location: LOCATIONS.PORTO,
      virtual: false,
      eventClass: 'conference',
      link: 'https://pretalx.evolutio.pt/pyconpt2022/talk/TUZZMY/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-09-24',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC West'],
      virtual: false,
      link: 'https://odsc.com/speakers/introduction-to-data-visualization-in-python/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-11-01',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC West'], virtual: false },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_1,
    date: '2022-11-01',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS.TMLS,
      virtual: false,
      link: 'https://www.torontomachinelearning.com/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-11-28',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS.TMLS,
      virtual: false,
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2022-11-30',
  },
  {
    event: {
      name: 'PyCon US',
      location: LOCATIONS.SLC,
      virtual: false,
      eventClass: 'conference',
      link: 'https://us.pycon.org/2023/schedule/presentation/17/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-04-19',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: 'https://odsc.com/speakers/introduction-to-data-visualization-in-python/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-05-09',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: 'https://twitter.com/_odsc/status/1656394525365919747',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2023-05-10',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon IT'],
      virtual: false,
      link: 'https://pycon.it/en/event/beyond-the-basics-data-visualization-in-python-2',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-05-28',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: false,
      link: 'https://odsc.com/speakers/introduction-to-data-analysis-using-pandas/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-06-14',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: false,
      link: 'https://twitter.com/_odsc/status/1669301867086503938',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2023-06-14',
  },
  {
    event: {
      name: 'EuroSciPy',
      location: LOCATIONS.BASEL,
      virtual: false,
      eventClass: 'conference',
      link: 'https://pretalx.com/euroscipy-2023/talk/PWER3Z/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-08-14',
  },
  {
    event: {
      name: 'PyCon Portugal',
      location: LOCATIONS.COIMBRA,
      virtual: false,
      eventClass: 'conference',
      link: 'https://pretalx.evolutio.pt/pycon-pt-2023/talk/STX8K3/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-09-09',
  },
  {
    event: {
      name: 'PyCon CZ',
      location: LOCATIONS.PRAGUE,
      virtual: false,
      eventClass: 'conference',
      link: 'https://cz.pycon.org/2023/program/workshops/26/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-09-17',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon UK'],
      virtual: false,
      link: 'https://pretalx.com/pyconuk-2023/talk/YLGFCE/',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-09-22',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon MEA'],
      virtual: false,
      link: 'https://globaldevslam.com/Agenda2023.aspx?trackname=WORKSHOPS',
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-10-16',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon MEA'],
      virtual: false,
      link: 'https://globaldevslam.com/Agenda2023.aspx?trackname=PYCON-MEA-DATA-SCIENCE',
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2023-10-17',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC West'],
      virtual: false,
      link: 'https://odsc.com/speakers/data-morph-a-cautionary-tale-of-summary-statistics/',
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2023-11-02',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC West'],
      virtual: false,
      link: 'https://x.com/_odsc/status/1720142320564416749?s=20',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2023-11-02',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: '/blog/travel/2024/odsc-east/',
    },
    presentation: PRESENTATIONS.BOOK_SIGNING_PANDAS_2,
    date: '2024-04-24',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC East'],
      virtual: false,
      link: '/blog/travel/2024/odsc-east/',
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-04-25',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['PyCon IT'],
      virtual: false,
      link: '/blog/travel/2024/pycon-italia/',
    },
    presentation: PRESENTATIONS.GETTING_STARTED_IN_OPEN_SOURCE,
    date: '2024-05-24',
  },
  {
    event: {
      name: 'PyCon Colombia',
      location: LOCATIONS.MEDELLIN,
      virtual: false,
      eventClass: 'conference',
      link: '/blog/travel/2024/pycon-colombia/',
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-06-07',
  },
  {
    event: {
      name: 'PyCon Colombia',
      location: LOCATIONS.MEDELLIN,
      virtual: false,
      eventClass: 'conference',
      link: '/blog/travel/2024/pycon-colombia/',
    },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2024-06-09',
  },
  {
    event: {
      name: 'EuroPython',
      location: LOCATIONS.PRAGUE,
      virtual: false,
      eventClass: 'conference',
      link: 'https://ep2024.europython.eu/sessions#pre-commit-to-better-code',
    },
    presentation: PRESENTATIONS.PRE_COMMIT_WORKSHOP,
    date: '2024-07-08',
  },
  {
    event: {
      name: 'Kiwi PyCon',
      location: LOCATIONS.WELLINGTON,
      virtual: false,
      eventClass: 'conference',
      link: 'https://talks.kiwipycon.nz/kiwi-pycon-2024/talk/V9BQW9/',
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-08-24',
  },
  {
    event: {
      name: 'PyCon Poland',
      location: LOCATIONS.GLIWICE,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2024-08-29',
  },
  {
    event: {
      name: 'PyCon Poland',
      location: LOCATIONS.GLIWICE,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-08-30',
  },
  {
    event: {
      name: 'PyCon Estonia',
      location: LOCATIONS.TALLINN,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-09-05',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC Europe'],
      virtual: true,
      link: undefined,
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-09-06',
  },
  {
    event: {
      name: 'Talk Python',
      eventClass: 'podcast',
      virtual: true,
    },
    presentation: {
      contentClass: 'podcast',
      title: 'Pre-Commit Hooks for Python Devs',
      link: 'https://www.youtube.com/watch?v=EzlzX1OL92w',
    },
    date: '2024-09-12',
    time: '16:20:00-04:00',
  }, // TODO: after recording, this should be removed from here and added to the interviews page instead
  {
    event: {
      name: 'PyCon Taiwan',
      location: LOCATIONS.KAOSHIUNG,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-09-22',
  },
  {
    event: {
      name: 'PyCon Japan',
      location: LOCATIONS.TOKYO,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.GETTING_STARTED_IN_OPEN_SOURCE,
    date: '2024-09-28',
  },
  {
    event: {
      name: 'PyCon Portugal',
      location: LOCATIONS.BRAGA,
      virtual: false,
      eventClass: 'conference',
      link: undefined,
    },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2024-10-19',
  },
  {
    event: {
      ...SAME_LOCATION_EVENTS['ODSC West'],
      virtual: true,
      link: undefined,
    },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2024-10-29',
  },
];

export const LIVE_PRESENTATIONS = LIVE_EVENTS.filter(
  (x) => x.presentation.contentClass !== 'podcast',
) as LivePresentation[];
