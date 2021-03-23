import { ProductData } from '@helpers/interfaces'
import axiosInstance from '@services/axios'
import { NextApiRequest, NextApiResponse } from 'next'

const axios = axiosInstance('backend')

export default async function brands(request: NextApiRequest, response: NextApiResponse) {
  const products = await axios.get('/').then(resp => resp.data.products)

  const rawBrands: string[] = products.map((product: ProductData) => product.brand)
  const brands = [...new Set(rawBrands)]

  return response.status(200).send(brands)
}
