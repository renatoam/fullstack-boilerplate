import { getProducts } from '@database/getProducts'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function products(request: NextApiRequest, response: NextApiResponse) {
  try {
    const products = await getProducts(20)

    response.status(200).json(products)
  } catch (error) {
    response.status(500).json({ error })
  }
}
