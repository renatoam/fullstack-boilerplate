import { GetProductsType } from '@helpers/types'
import { frontendAxios } from '../axios'

const axios = frontendAxios()

export const ProductService: GetProductsType = {
  async getProducts(filter: string | undefined) {
    // const { response, error } = yield call(fetchProductsApi)
    // Uma outra forma de pegar o erro de uma request (além do try/catch),
    // caso de um objeto erro já vir do backend, é desestruturar a resposta
    // E aqui no serviço, eu teria que usar o .catch(error => ({ error }))
    return axios.get('/api/products', { params: { filter } }).then(response => response.data)
  }
}
