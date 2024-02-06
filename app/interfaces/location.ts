export default interface Location {
  coordinates: number[];
  city: string;
  country: string;
}

export interface AnnotatedLocation<Annotation> extends Location {
  annotation: Annotation;
}
