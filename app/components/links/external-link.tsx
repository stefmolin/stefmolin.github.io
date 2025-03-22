interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="external noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
