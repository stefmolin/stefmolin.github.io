import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { faCaretLeft, faCaretRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';

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
  const onPageChange = ({ selected }) => {
    setOffset((selected * itemsPerPage) % totalItems);
    if (scrollRef.current != null) scrollRef.current.scrollIntoView();
  };
  const numberClassName = 'px-3 md:px-5 py-2';
  return (
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
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={Math.ceil(totalItems / itemsPerPage)}
      renderOnZeroPageCount={null}
      className={classNames(
        'flex flex-row items-center justify-center space-x-1',
        'text-base md:text-xl font-bold text-slate-800 py-5 md:px-5',
      )}
      pageLinkClassName={classNames(numberClassName, 'hover:underline')}
      activeLinkClassName="text-blue-700 shadow-inner bg-slate-100 rounded-full"
      breakLinkClassName={numberClassName}
      nextLinkClassName={numberClassName}
      previousLinkClassName={numberClassName}
    />
  );
}
