import { GetBrandsType } from '@helpers/types'

interface IBrandService {
  getBrands(): Promise<GetBrandsType[]>
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
