import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Collapsible from 'react-collapsible';

const CollapsibleSection = ({
  prompt,
  contents,
  children,
  className = 'items-start',
  open = false,
}: {
  prompt: string;
  open?: boolean;
  contents?: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames('flex flex-col gap-y-1', className)}>
    <Collapsible
      open={open}
      trigger={
        <>
          <FontAwesomeIcon icon={faChevronRight} className="pr-1" />
          <span className="text-lg sm:text-xl cursor-pointer">{prompt}</span>
        </>
      }
      triggerWhenOpen={
        <>
          <FontAwesomeIcon icon={faChevronDown} className="pr-1" />
          <span className="text-lg sm:text-xl cursor-pointer">{prompt}</span>
        </>
      }
    >
      {contents != null ? <p className="px-6 py-2">{contents}</p> : children}
    </Collapsible>
  </div>
);

export default CollapsibleSection;
