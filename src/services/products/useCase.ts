import { ProductData } from '@helpers/interfaces'

type GetProductsType = {
  getProducts: (filter?: string) => Promise<ProductData[]>
}

export default class ProductUseCases {
  productService: GetProductsType

  constructor({ ProductService }: { ProductService: GetProductsType }) {
    this.productService = ProductService
  }

  async getProducts(filter?: string) {
    return this.productService.getProducts(filter)
  }
}
