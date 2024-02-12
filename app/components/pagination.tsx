import classNames from 'classnames';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
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
  const numberClassName = 'md:shadow px-3 md:px-5 py-2';
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={Math.ceil(totalItems / itemsPerPage)}
      renderOnZeroPageCount={null}
      className="flex flex-row items-center justify-center space-x-1 text-base md:text-xl font-bold text-slate-800 py-5 md:px-5"
      pageLinkClassName={classNames(numberClassName, 'hover:underline')}
      activeLinkClassName="text-blue-700"
      breakLinkClassName={numberClassName}
      nextLinkClassName={numberClassName}
      previousLinkClassName={numberClassName}
    />
  );
}
