import initAxiosInstance from '../axios'

const axios = initAxiosInstance('frontend')

export const ProductService = {
  getProducts() {
    return axios
      .get('/api/products')
      .then(response => response.data)
  }
}
