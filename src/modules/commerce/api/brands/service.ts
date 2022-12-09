import axios from '../../../common/services/axios';

export const BrandService = {
  async getBrands(): Promise<any[]> {
    return axios.get('/api/brands').then(response => response.data)
  }
}
