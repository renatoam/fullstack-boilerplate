export default class ProductUseCases {
  constructor({ ProductService }) {
    this.productService = ProductService
  }

  async getProducts(filter) {
    return await this.productService.getProducts(filter)
  }
}
