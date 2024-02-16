import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import numeral from 'numeral';
import { GITHUB_PROFILE, EXTERNAL_LINK_PROPS, GITHUB_API } from '../data/constants';

export default function RepoStats({
  repoName,
  className,
  statsOnly = false,
}: {
  repoName: string;
  className?: string;
  statsOnly?: boolean;
}) {
  const [info, setInfo] = useState<Record<string, number | string> | null | undefined>();

  useEffect(() => {
    fetch(`${GITHUB_API}${repoName}`)
      .then((response) => response.json())
      .then((data) =>
        setInfo({
          forks: data.forks_count,
          stargazers: data.stargazers_count,
          name: data.full_name,
        }),
      )
      .catch((error) => setInfo(null));
  }, [repoName]);

  const repoLink = (
    <span>
      <FontAwesomeIcon icon={faGithub} className="pr-1" fixedWidth />
      <a
        href={`${GITHUB_PROFILE}/${repoName}`}
        {...EXTERNAL_LINK_PROPS}
        className="hover:underline text-slate-600"
      >
        {info?.name || repoName}
      </a>
    </span>
  );

  const stats = info ? (
    <span>
      <FontAwesomeIcon icon={faStar} className="pr-1" size="sm" fixedWidth />
      {numeral(info.stargazers).format('0[.]0a')}
      <FontAwesomeIcon icon={faCodeFork} className="pl-2 pr-1" size="sm" fixedWidth />
      {numeral(info.forks).format('0[.]0a')}
    </span>
  ) : null;

  return (
    <div className={className ?? 'flex flex-row items-center justify-center space-x-2'}>
      {info === undefined ? null : (
        <>
          {((statsOnly && stats == null) || !statsOnly) && repoLink}
          {stats}
        </>
      )}
    </div>
  );
}
