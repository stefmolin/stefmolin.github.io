import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PageCountProps = {
  pageCount: number;
};

const PageCount = ({ pageCount }: PageCountProps) => (
  <div className="flex flex-row items-center">
    <FontAwesomeIcon icon={faBook} className="pr-1" fixedWidth />
    <span>{pageCount} pages</span>
  </div>
);
export default PageCount;
