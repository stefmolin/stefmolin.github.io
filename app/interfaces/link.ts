import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Link {
  href: string;
  text: string;
}

export interface LinkWithIcon extends Link {
  icon: IconDefinition;
}
