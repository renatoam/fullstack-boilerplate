export default class ProductUseCases {
  constructor({ ProductService }) {
    this.productService = ProductService
  }

  async getProducts() {
    return await this.productService.getProducts()
  }
}
