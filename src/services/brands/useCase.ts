import { GetBrandsType } from '@helpers/types'

export default class BrandUseCases {
  brandService: GetBrandsType
  constructor({ BrandService }: { BrandService: GetBrandsType }) {
    this.brandService = BrandService
  }

  async getBrands() {
    return this.brandService.getBrands()
  }
}
