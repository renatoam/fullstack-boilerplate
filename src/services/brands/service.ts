import initAxiosInstance from '../axios'

const axios = initAxiosInstance('frontend')

export const BrandService = {
  getBrands() {
    return axios.get('/api/brands').then(response => response.data)
  }
}
