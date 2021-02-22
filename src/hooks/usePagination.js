import { useState } from 'react';

export const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber)
  }

  console.log({ items, itemsPerPage })

  return [
    currentItems,
    handleChangePage
  ]
}
