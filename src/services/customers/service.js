import axios from '../axios'

export const CustomerService = {
  getCustomers(params) {
    return axios
      .get('/api/customer', { params })
      .then(response => response.data)
  }
}
