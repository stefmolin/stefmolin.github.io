import Link from 'next/link';

export const linkClassName = 'text-slate-700 hover:text-slate-500 underline';

export default function anchorLink(fragment: string, text: string | React.ReactNode) {
  return (
    <Link href={fragment} className={linkClassName}>
      {text}
    </Link>
  );
}
