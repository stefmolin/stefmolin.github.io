import Link, { type LinkProps } from 'next/link';
import ExternalLink, { type ExternalLinkProps } from './external-link';

export interface ResourceLinkProps extends Omit<ExternalLinkProps, 'href'> {
  /** Whether this link is internal or external */
  linkClass: 'internal' | 'external';

  /** The URL or information that can be used to construct it */
  resourceLink: string | { contentClass: string; slug: string };
}

export default function ResourceLink({
  children,
  className,
  linkClass,
  resourceLink,
  ariaLabel,
  addTitle = false,
}: ResourceLinkProps) {
  if (
    typeof resourceLink !== 'string' &&
    ['keynote', 'talk'].includes(resourceLink.contentClass) &&
    !resourceLink.slug.startsWith('/coming-soon')
  ) {
    return (
      <ExternalLink
        className={className}
        href={resourceLink.slug}
        ariaLabel={ariaLabel}
        addTitle={addTitle}
      >
        {children}
      </ExternalLink>
    );
  }

  if (linkClass === 'internal' || typeof resourceLink !== 'string') {
    let href: LinkProps['href'];
    if (typeof resourceLink === 'string') href = resourceLink;
    else if (
      resourceLink.slug.startsWith('/') &&
      !['article', 'blog', 'post'].includes(resourceLink.contentClass)
    )
      href = resourceLink.slug;
    else {
      const { contentClass, slug } = resourceLink;
      if (['article', 'blog', 'post'].includes(contentClass)) {
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
      <Link
        className={className}
        href={href}
        rel={href === '/privacy-policy' ? 'privacy-policy' : undefined}
        aria-label={ariaLabel}
        title={addTitle ? ariaLabel : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <ExternalLink
      className={className}
      href={resourceLink}
      ariaLabel={ariaLabel}
      addTitle={addTitle}
    >
      {children}
    </ExternalLink>
  );
}
