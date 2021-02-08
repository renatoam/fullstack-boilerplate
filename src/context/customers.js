import { createContext, useContext } from 'react';
import useSWR from 'swr';
import { customerUseCases } from "../services/customers";

export const CustomersContext = createContext({
  customers: [],
  getCustomersByFilter: () => {}
})

export const CustomersProvider = ({ children }) => {
  const { data, error, mutate } = useSWR('customers', getCustomersByFilter, { revalidateOnFocus: false })

  async function getCustomersByFilter(filter) {
    return await customerUseCases
        .getCustomers(filter)
  }

  return (
    <CustomersContext.Provider value={{ customers: { loading: !data && !error, data, error, mutate }, getCustomersByFilter }}>
      {children}
    </CustomersContext.Provider>
  )
}

export const useCustomers = () => useContext(CustomersContext)
