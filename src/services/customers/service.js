import axios from 'axios'

export const CustomerService = {
  getCustomers(params) {
    return axios
      .get('/api/customers', { params })
      .then(response => response.data)
  }
}
