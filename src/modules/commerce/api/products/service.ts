import axios from '../../../common/services/axios'
import { GetProductsType } from '../../types/types'

export const ProductService: GetProductsType = {
  async getProducts(filter: string | undefined) {
    // const { response, error } = yield call(fetchProductsApi)
    // Essa é uma outra forma de pegar o erro de uma request (além do try/catch),
    // caso de um objeto erro já vir do backend, é desestruturar a resposta
    // E aqui no serviço, eu teria que usar o .catch(error => ({ error }))
    return axios.get('/api/products', { params: { filter } }).then(response => response.data)
  }
}
