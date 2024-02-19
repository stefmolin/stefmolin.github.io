import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import FancyDivider from '../fancy-divider';
import classNames from 'classnames';

interface AnnouncementProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  hrClassName?: string;
}

export default function Announcement({ children, className, hrClassName }: AnnouncementProps) {
  return (
    <div
      className={classNames(
        'flex flex-row items-center justify-between',
        'md:text-lg',
        'rounded-lg shadow-lg',
        'py-6',
        className,
      )}
    >
      <div className="space-y-4 px-10">
        <FancyDivider hrClassName={hrClassName}>
          <FontAwesomeIcon icon={faThumbTack} className="px-5" fixedWidth />
        </FancyDivider>
        {children}
      </div>
    </div>
  );
}
