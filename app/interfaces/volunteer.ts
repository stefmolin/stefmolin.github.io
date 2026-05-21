import { type ResourceLinkProps } from '../components/links/resource-link';

export default interface VolunteerExperience {
  /* Date (ISO) of the entry (start if it lasts more than a day) */
  date: string;

  /* Number of hours dedicated to this item */
  duration: number;

  /* The title for the timeline entry */
  title: string;

  /* Optional description for the entry */
  description?: string;

  /* Optional link to include in the timeline entry */
  link?: Omit<ResourceLinkProps, 'children'> & { text: string };

  /* Where the timeline entry took place (if applicable) */
  where?: string;
}
