import type MapLocation from '../interfaces/map-location';

const LOCATIONS: Record<string, MapLocation> = {
  BOSTON: {
    coordinates: [-71.08365893164562, 42.34821109879717],
    city: 'Boston',
    country: 'United States of America',
  },
  SF: {
    coordinates: [-122.36511537414437, 37.594016989670585],
    city: 'San Francisco',
    country: 'United States of America',
  },
  FLORENCE: {
    coordinates: [11.27223424142312, 43.766157019133345],
    city: 'Florence',
    country: 'Italy',
  },
  LONDON: {
    coordinates: [-0.059206275307722094, 51.50853195960044],
    city: 'London',
    country: 'United Kingdom',
  },
  SLC: {
    coordinates: [-111.89613537403288, 40.768053308857475],
    city: 'Salt Lake City',
    country: 'United States of America',
  },
  DUBLIN: {
    coordinates: [-6.2396130888534715, 53.34796454631454],
    city: 'Dublin',
    country: 'Ireland',
  },
  TORONTO: {
    coordinates: [-79.38319005271227, 43.66049236559669],
    city: 'Toronto',
    country: 'Canada',
  },
  COIMBRA: {
    coordinates: [-8.452467711309346, 40.209614824154585],
    city: 'Coimbra',
    country: 'Portugal',
  },
  PORTO: {
    coordinates: [-8.640803733012387, 41.1522598640063],
    city: 'Porto',
    country: 'Portugal',
  },
  PRAGUE: {
    coordinates: [14.394203035314455, 50.08026707416692],
    city: 'Prague',
    country: 'Czechia',
  },
  CARDIFF: {
    coordinates: [-3.178246529416772, 51.48541158585886],
    city: 'Cardiff',
    country: 'United Kingdom',
  },
  BASEL: {
    coordinates: [7.583575695437239, 47.558649525773646],
    city: 'Basel',
    country: 'Switzerland',
  },
  DUBAI: {
    coordinates: [55.28692366783723, 25.223277936529787],
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  MEDELLIN: {
    coordinates: [-75.590553, 6.230833],
    city: 'Medellín',
    country: 'Colombia',
  },
  TAIPEI: {
    coordinates: [121.597366, 25.105497],
    city: 'Taipei',
    country: 'Taiwan',
  },
  KAOSHIUNG: {
    coordinates: [120.26667, 22.633333],
    city: 'Kaohsiung City',
    country: 'Taiwan',
  },
  TALLINN: {
    coordinates: [24.753574, 59.436962],
    city: 'Tallinn',
    country: 'Estonia',
  },
  WELLINGTON: {
    coordinates: [174.777969, -41.276825],
    city: 'Wellington',
    country: 'New Zealand',
  },
  GLIWICE: {
    coordinates: [18.6714, 50.2945],
    city: 'Gliwice',
    country: 'Poland',
  },
  TOKYO: {
    coordinates: [139.839478, 35.652832],
    city: 'Tokyo',
    country: 'Japan',
  },
  BRAGA: {
    coordinates: [-8.426507, 41.545448],
    city: 'Braga',
    country: 'Portugal',
  },
  STRASBOURG: {
    coordinates: [7.7521, 48.5734],
    city: 'Strasbourg',
    country: 'France',
  },
  MELBOURNE: {
    coordinates: [144.946457, -37.840935],
    city: 'Melbourne',
    country: 'Australia',
  },
  VILNIUS: {
    coordinates: [25.2797, 54.6872],
    city: 'Vilnius',
    country: 'Lithuania',
  },
  PITTSBURGH: {
    coordinates: [-79.995888, 40.440624],
    city: 'Pittsburgh',
    country: 'United States of America',
  },
};
export default LOCATIONS;
