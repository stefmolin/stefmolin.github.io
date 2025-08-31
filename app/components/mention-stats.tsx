import { useEffect, useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import numeral from 'numeral';
import ExternalLink from './links/external-link';
import { usePageURL } from '../lib/hooks/page-url';

interface Mentions {
  count: number;
  type: Record<string, number>;
}

export default function MentionStats({ className }: { className?: string }) {
  const [mentions, setMentions] = useState<Mentions | null>(null);
  const pageURL = usePageURL();

  useEffect(() => {
    if (pageURL)
      fetch(`https://webmention.io/api/count?target=${pageURL}`)
        .then((response) => response.json())
        .then((data) => setMentions(data))
        .catch(() => setMentions(null));
  }, [pageURL]);

  return mentions == null || mentions.count === 0 ? null : (
    <div
      className={
        className ??
        'flex flex-col sm:flex-row items-center text-center sm:justify-center sm:gap-x-2'
      }
    >
      <ExternalLink
        href={`https://webmention.io/api/mentions.html?target=${pageURL}`}
        className="hover:underline"
      >
        <span>
          <FontAwesomeIcon icon={faHeart} className="pr-1" fixedWidth />
          {numeral(mentions.count).format('0,0')} mentions
        </span>
      </ExternalLink>
    </div>
  );
}
