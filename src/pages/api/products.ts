import { ProductData } from '@helpers/interfaces'
import axiosInstance from '@services/axios'
import { NextApiRequest, NextApiResponse } from 'next'
const axios = axiosInstance('backend')

export default async function products(request: NextApiRequest, response: NextApiResponse) {
  const filter = request.query.filter
  const products = await axios
    .get('/')
    .then(resp => resp.data.products)

  if (filter) {
    const filteredData = products.filter((products: ProductData) => {
      return products.brand === filter
    })

    return response.status(200).send(filteredData)
  }

  return response.status(200).send(products)
}
