import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import FancyDivider from '../dividers/fancy-divider';

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
      <div className="space-y-4 px-6 sm:px-10 w-full h-full">
        <FancyDivider hrClassName={hrClassName}>
          <FontAwesomeIcon icon={faThumbTack} className="px-5" />
        </FancyDivider>
        {children}
      </div>
    </div>
  );
}
