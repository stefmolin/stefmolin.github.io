import Link, { type LinkProps } from 'next/link';
import ExternalLink from './external-link';

export interface ResourceLinkProps {
  children: React.ReactNode;
  className?: string;
  linkClass: 'internal' | 'external';
  resourceLink: string | { contentClass: string; slug: string };
}

export default function ResourceLink({
  children,
  className,
  linkClass,
  resourceLink,
}: ResourceLinkProps) {
  if (linkClass === 'internal' || typeof resourceLink !== 'string') {
    let href: LinkProps['href'];
    if (typeof resourceLink === 'string') href = resourceLink;
    else if (resourceLink.slug.startsWith('/')) href = resourceLink.slug;
    else {
      const { contentClass, slug } = resourceLink;
      href = {
        pathname: `/${contentClass.endsWith('s') ? contentClass : `${contentClass}s`}/[slug]`,
        query: { slug },
      };
    }

    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <ExternalLink className={className} href={resourceLink}>
      {children}
    </ExternalLink>
  );
}
