export default class BrandUseCases {
  constructor({ BrandService }) {
    this.brandService = BrandService
  }

  async getBrands() {
    return await this.brandService.getBrands()
  }
}
