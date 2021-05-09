import { frontendAxios as axios } from '../axios'

export const ProductService = {
  getProducts(filter: string) {
    return axios.get('/api/products', { params: { filter } }).then(response => response.data)
  }
}
