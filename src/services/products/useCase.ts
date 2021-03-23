import { GetProductsType } from '@helpers/types'

export default class ProductUseCases {
  productService: GetProductsType

  constructor({ ProductService }: { ProductService: GetProductsType }) {
    this.productService = ProductService
  }

  async getProducts(filter: string) {
    return this.productService.getProducts(filter)
  }
}
