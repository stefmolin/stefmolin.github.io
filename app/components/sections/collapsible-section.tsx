import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';

const CollapsibleSection = ({
  prompt,
  contents,
  children,
  open = false,
}: {
  prompt: string;
  open?: boolean;
  contents?: string;
  children?: React.ReactNode;
}) => (
  <div className="flex flex-col items-center space-y-1">
    <Collapsible
      open={open}
      trigger={
        <>
          <FontAwesomeIcon icon={faChevronRight} className="pr-1" fixedWidth />
          <span className="text-lg sm:text-xl cursor-pointer">{prompt}</span>
        </>
      }
      triggerWhenOpen={
        <>
          <FontAwesomeIcon icon={faChevronDown} className="pr-1" fixedWidth />
          <span className="text-lg sm:text-xl cursor-pointer">{prompt}</span>
        </>
      }
    >
      {contents != null ? <p className="px-6 py-2">{contents}</p> : children}
    </Collapsible>
  </div>
);

export default CollapsibleSection;
