import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { faCaretLeft, faCaretRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { useWindowSize } from '../lib/hooks/window-size';

interface PaginationProps {
  itemsPerPage: number;
  scrollRef: MutableRefObject<null | HTMLDivElement>;
  setOffset: Dispatch<SetStateAction<number>>;
  totalItems: number;
}

export default function Pagination({
  itemsPerPage,
  scrollRef,
  setOffset,
  totalItems,
}: PaginationProps) {
  const { width } = useWindowSize();
  const onPageChange = ({ selected }) => {
    setOffset((selected * itemsPerPage) % totalItems);
    if (scrollRef.current != null) scrollRef.current.scrollIntoView();
  };
  const numberClassName = 'px-3 md:px-5 py-2';
  const disabledClassName = 'hover:no-underline cursor-not-allowed';
  return totalItems > itemsPerPage ? (
    <ReactPaginate
      breakLabel={
        <>
          <FontAwesomeIcon icon={faEllipsis} fixedWidth />
        </>
      }
      previousLabel={
        <>
          <FontAwesomeIcon icon={faCaretLeft} fixedWidth />
        </>
      }
      nextLabel={
        <>
          <FontAwesomeIcon icon={faCaretRight} fixedWidth />
        </>
      }
      onPageChange={onPageChange}
      pageRangeDisplayed={width && width < 300 ? 1 : 2}
      marginPagesDisplayed={width && width < 300 ? 1 : 2}
      pageCount={Math.ceil(totalItems / itemsPerPage)}
      renderOnZeroPageCount={null}
      className={classNames(
        'flex flex-row items-center justify-center gap-x-1',
        'text-base md:text-xl font-bold text-slate-800 py-5 md:px-5',
      )}
      pageLinkClassName={classNames(numberClassName, 'hover:underline')}
      activeLinkClassName={classNames(
        'shadow-sm-inner bg-slate-100 rounded-full',
        disabledClassName,
      )}
      breakLinkClassName={classNames(numberClassName, 'hover:text-blue-700')}
      nextLinkClassName={classNames(numberClassName, 'hover:text-blue-700')}
      previousLinkClassName={classNames(numberClassName, 'hover:text-blue-700')}
      disabledClassName={classNames(disabledClassName, 'invisible')}
    />
  ) : null;
}
