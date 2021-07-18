import { useState } from 'react';

interface PaginationHookProps<D> {
  items: D[];
  itemsPerPage: number;
}

export function usePagination<D>(props: PaginationHookProps<D>) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const indexOfLastItem = currentPage * props.itemsPerPage
  const indexOfFirstItem = indexOfLastItem - props.itemsPerPage
  const currentItems = props.items.slice(indexOfFirstItem, indexOfLastItem)

  function handleChangePage(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return [
    currentItems,
    handleChangePage
  ] as const
}
