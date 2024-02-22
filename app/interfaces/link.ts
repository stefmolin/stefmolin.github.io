import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { type LinkProps } from 'next/link';

export interface Link {
  href: LinkProps['href'] | string;
  text: string;
}

export interface LinkWithIcon extends Link {
  icon: IconDefinition;
}
