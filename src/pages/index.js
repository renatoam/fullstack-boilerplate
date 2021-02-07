import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { customerUseCases } from "../services/customers";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  const [customers, setCustomers] = useState([])

  async function getCustomersByFilter(filter) {
    const response = await customerUseCases
        .getCustomers("normal")

    setCustomers(response)
  }

  // trocar pra getInitialProps e usar SWR
  useEffect(() => getCustomersByFilter(), [])

  return (
    <>
      {customers &&
        customers.map((customer, idx) => {
          return <Title key={idx}>{customer.name?.first}</Title>
        })}
    </>
  )
}
