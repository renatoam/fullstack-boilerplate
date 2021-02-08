import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import { useState } from 'react';
import Card from '../../components/DataDisplay/Card';
import Showcase from '../../components/DataDisplay/Showcase';
import Filter from '../../components/DataEntry/Filter';
import Heading from '../../components/Foundation/Heading';
import { FILTER_TYPES } from '../../constants/filter';
import { useCustomers } from "../../context/customers";
import {
  StyledBodyContainer,
  StyledFilterContainer,
  StyledMain
} from '../../styles/pages/customer';

export default function Customer(props) {
  const { customers, getCustomersByFilter } = useCustomers()
  const { data, error, mutate, loading } = customers
  const [currentPage, setCurrentPage] = useState(1)
  const [customersPerPage, setCustomersPerPage] = useState(10)

  if (loading) return <CircularProgress />

  const indexOfLastCustomer = currentPage * customersPerPage
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
  const currentCustomers = data.slice(indexOfFirstCustomer, indexOfLastCustomer)

  function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber)
  }

  function handleFilterCustomers(value) {
    mutate(getCustomersByFilter(value), false)
  }

  return (
    <StyledMain>
      <StyledFilterContainer>
        <Filter
          name="customers"
          title="Filter by type: "
          options={FILTER_TYPES}
          handleChange={handleFilterCustomers}
        />
      </StyledFilterContainer>
      <StyledBodyContainer>
        <Showcase>
          {currentCustomers.length === 0 ?
            <Heading variant="h6" text="There's no customers for this type" /> :
            currentCustomers.map((customer, idx) => {
              return <Card key={idx} data={customer} />
          })}
        </Showcase>
        <Pagination count={customersPerPage} onChange={(_, page) => handleChangePage(page)} />
      </StyledBodyContainer>
    </StyledMain>
  )
}
