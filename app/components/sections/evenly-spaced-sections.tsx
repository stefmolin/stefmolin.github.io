import { Fragment } from 'react';
import SectionSeparator from '../dividers/section-separator';

interface EvenlySpacedSectionsProps {
  children: React.ReactNode[];
  className?: string;
}

export default function EvenlySpacedSections({ children, className }: EvenlySpacedSectionsProps) {
  return (
    <>
      {children.map((child, index) => {
        if (index === children.length - 1) return child;
        return (
          <Fragment key={index}>
            {child}
            <SectionSeparator className={className} />
          </Fragment>
        );
      })}
    </>
  );
}
