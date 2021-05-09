import { GetBrandsType } from '@helpers/types'
import { frontendAxios as axios } from '../axios'

export const BrandService = {
  async getBrands(): Promise<GetBrandsType[]> {
    return axios.get('/api/brands').then(response => response.data)
  }
}
