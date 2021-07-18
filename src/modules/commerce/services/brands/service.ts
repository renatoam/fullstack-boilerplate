import { GetBrandsType } from 'src/common/types/types'
import axios from '../../../../common/services/axios'

export const BrandService = {
  async getBrands(): Promise<GetBrandsType[]> {
    return axios.get('/api/brands').then(response => response.data)
  }
}
