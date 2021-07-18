import { GetBrandsType } from 'src/common/types/types'

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
