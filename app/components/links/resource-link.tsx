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
  if (
    typeof resourceLink !== 'string' &&
    resourceLink.contentClass === 'talk' &&
    !resourceLink.slug.startsWith('/coming-soon')
  ) {
    return (
      <ExternalLink className={className} href={resourceLink.slug}>
        {children}
      </ExternalLink>
    );
  }

  if (linkClass === 'internal' || typeof resourceLink !== 'string') {
    let href: LinkProps['href'];
    if (typeof resourceLink === 'string') href = resourceLink;
    else if (
      resourceLink.slug.startsWith('/') &&
      !['article', 'post'].includes(resourceLink.contentClass)
    )
      href = resourceLink.slug;
    else {
      const { contentClass, slug } = resourceLink;
      if (['article', 'post'].includes(resourceLink.contentClass)) {
        const pathParts = slug.split('/');
        href = {
          pathname: '/[...slug]',
          query: { slug: pathParts.slice(1, pathParts.length) },
        };
      } else {
        href = {
          pathname: `/${contentClass.endsWith('s') ? contentClass : `${contentClass}s`}/[slug]`,
          query: { slug },
        };
      }
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
