import Link from 'next/link';
import type Workshop from '../../interfaces/workshop';

export default function LinkToWorkshop({
  workshop,
  children,
}: {
  workshop: Workshop;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <Link
      href={{
        pathname: '/workshops/[workshop]',
        query: { workshop: workshop.repo },
      }}
      className="text-slate-800"
    >
      {children}
    </Link>
  );
}
