import initAxiosInstance from '../axios'

const axios = initAxiosInstance('frontend')

export const ProductService = {
  getProducts(filter) {
    return axios
      .get('/api/products', { params: { filter } })
      .then(response => response.data)
  }
}
