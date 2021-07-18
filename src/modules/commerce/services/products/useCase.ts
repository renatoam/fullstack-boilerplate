import { GetProductsType } from 'src/common/types/types'

export default class ProductUseCases {
  productService: GetProductsType

  constructor({ ProductService }: { ProductService: GetProductsType }) {
    this.productService = ProductService
  }

  async getProducts(filter?: string) {
    // const { response, error } = yield call(fetchProductsApi)
    // Uma outra forma de pegar o erro de uma request (além do try/catch),
    // caso de um objeto erro já vir do backend, é desestruturar a resposta
    return this.productService.getProducts(filter)
  }
}
