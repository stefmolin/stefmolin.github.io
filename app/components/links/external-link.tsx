export interface ExternalLinkProps {
  /** The external URL to use as the `href` attribute on the <a> tag */
  href: string;

  /** The node that will be wrapped in this <a> tag */
  children: React.ReactNode;

  /** CSS classes to apply to the <a> tag */
  className?: string;

  /** Set the aria-label for the <a> tag for accessibility */
  ariaLabel?: string; // TODO: this is optional now until everywhere has it

  /**
   * Set to true if you want to use the ariaLabel as the title attribute on the <a> tag (off by default)
   */
  addTitle?: boolean;
}

export default function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  addTitle = false,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="external noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      title={addTitle ? ariaLabel : undefined}
    >
      {children}
    </a>
  );
}
