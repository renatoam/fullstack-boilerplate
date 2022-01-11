
interface IBrandService {
  getBrands(): Promise<any[]>
}
export default class BrandUseCases {
  brandService: IBrandService
  constructor({ BrandService }: { BrandService: IBrandService }) {
    this.brandService = BrandService
  }

  async getBrands() {
    return this.brandService.getBrands()
  }
}
