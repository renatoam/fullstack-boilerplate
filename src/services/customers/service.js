import initAxiosInstance from '../axios'

const axios = initAxiosInstance('frontend')

export const CustomerService = {
  getCustomers(params) {
    return axios
      .get('/api/customers', { params })
      .then(response => response.data)
  }
}
