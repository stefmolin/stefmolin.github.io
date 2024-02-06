import { FLAGS } from '../../data/constants';
import { type AnnotatedLocation } from '../../interfaces/location';

interface PushPinInfoProps {
  annotation: AnnotatedLocation<any> | null | undefined;
  className?: string;
  children?: React.ReactNode;
}

export default function PushPinInfo({ annotation, className, children }: PushPinInfoProps) {
  return (
    <div className={className}>
      {annotation != null ? (
        <>
          <p className="text-bold text-4xl md:text-5xl -mb-2">{FLAGS[annotation.country]}</p>
          <p className="text-bold text-xl md:text-2xl">
            {annotation.city},{' '}
            {annotation.country === 'United States of America' ? 'USA' : annotation.country}
          </p>
          {children}
        </>
      ) : null}
    </div>
  );
}
