import axiosInstance from '../../services/axios'
const axios = axiosInstance('backend')

export default async function brands(req, res) {
  const response = await axios
    .get('/brands')
    .then(resp => resp.data.products)

  const rawBrands = response.map(product => product.brand)
  const brands = [...new Set(rawBrands)]

  return res.status(200).send(brands)
}
