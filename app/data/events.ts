import { type Event, LivePresentation, Presentation } from '../interfaces/event';
import LOCATIONS from './locations';

const SAME_LOCATION_EVENTS: Record<string, Pick<Event, 'name' | 'location'>> = {
  'ODSC East': {
    name: 'ODSC East',
    location: LOCATIONS.BOSTON,
  },
  'ODSC Europe': {
    name: 'ODSC Europe',
    location: LOCATIONS.LONDON,
  },
  'ODSC West': {
    name: 'ODSC West',
    location: LOCATIONS.SF,
  },
  'PyCon IT': {
    name: 'PyCon IT',
    location: LOCATIONS.FLORENCE,
  },
  'PyCon MEA': {
    name: 'PyCon MEA',
    location: LOCATIONS.DUBAI,
  },
  'PyCon UK': {
    name: 'PyCon UK',
    location: LOCATIONS.CARDIFF,
  },
  TMLS: {
    name: 'Toronto Machine Learning Summit',
    location: LOCATIONS.TORONTO,
  },
};

export const PRESENTATIONS: Record<string, Presentation> = {
  PANDAS_WORKSHOP: {
    contentClass: 'workshop',
    title: 'Introduction to Data Analysis Using Pandas',
    link: '/workshops/pandas-workshop/',
  },
  PYTHON_DATA_VIZ_WORKSHOP: {
    contentClass: 'workshop',
    title: 'Beyond the Basics: Data Visualization in Python',
    link: '/workshops/python-data-viz-workshop/',
  },
  DATA_MORPH: {
    contentClass: 'talk',
    title: 'Data Morph: A Cautionary Tale of Summary Statistics',
    link: '/talks/data-morph/', // TODO
  },
};

export const LIVE_PRESENTATIONS: LivePresentation[] = [
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC Europe'], virtual: true },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2021-06-10',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC West'], virtual: true },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2021-11-15',
  },
  {
    event: { ...SAME_LOCATION_EVENTS.TMLS, virtual: true },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2021-11-16',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC East'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-04-19',
  },
  {
    event: { name: 'PyCon US', location: LOCATIONS.SLC, virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-04-28',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon IT'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-06-03',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC Europe'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-06-15',
  },
  {
    event: { name: 'EuroPython', location: LOCATIONS.DUBLIN, virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-07-12',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon UK'], virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-09-16',
  },
  {
    event: { name: 'PyCon PT', location: LOCATIONS.PORTO, virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2022-09-24',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC West'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-11-01',
  },
  {
    event: { ...SAME_LOCATION_EVENTS.TMLS, virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2022-11-28',
  },
  {
    event: { name: 'PyCon US', location: LOCATIONS.SLC, virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-04-19',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC East'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-05-09',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon IT'], virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-05-28',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['ODSC Europe'], virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-06-14',
  },
  {
    event: { name: 'EuroSciPy', location: LOCATIONS.BASEL, virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-08-14',
  },
  {
    event: { name: 'PyCon PT', location: LOCATIONS.COIMBRA, virtual: false },
    presentation: PRESENTATIONS.PYTHON_DATA_VIZ_WORKSHOP,
    date: '2023-09-09',
  },
  {
    event: { name: 'PyCon CZ', location: LOCATIONS.PRAGUE, virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-09-17',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon UK'], virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-09-22',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon MEA'], virtual: false },
    presentation: PRESENTATIONS.PANDAS_WORKSHOP,
    date: '2023-10-16',
  },
  {
    event: { ...SAME_LOCATION_EVENTS['PyCon MEA'], virtual: false },
    presentation: PRESENTATIONS.DATA_MORPH,
    date: '2023-10-17',
  },
];