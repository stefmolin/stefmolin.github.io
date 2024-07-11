export default interface MapLocation {
  coordinates: [number, number];
  city: string;
  country: string;
}

export interface AnnotatedLocation<Annotation> extends MapLocation {
  annotation: Annotation;
}
