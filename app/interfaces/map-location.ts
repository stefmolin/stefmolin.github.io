export default interface MapLocation {
  coordinates: [number, number];
  city: string;
  country: string;
  countryCode: string;
  countryAlias?: string;
}

export interface AnnotatedLocation<Annotation> extends MapLocation {
  annotation: Annotation;
}
