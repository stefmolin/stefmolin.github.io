import { MutableRefObject } from 'react';

export interface PageSectionProps {
  children: React.ReactNode;
  id?: string;
  anchorRef?: MutableRefObject<HTMLDivElement | null>;
  divClassName?: string;
  title?: React.ReactNode | string | null;
  titleClassName?: string;
}

export default function PageSection({
  anchorRef,
  children,
  divClassName,
  id,
  title,
  titleClassName,
}: PageSectionProps) {
  return (
    <div id={id} ref={anchorRef} className={divClassName}>
      <h2 className={titleClassName ?? 'text-3xl mb-5'}>{title}</h2>
      {children}
    </div>
  );
}
