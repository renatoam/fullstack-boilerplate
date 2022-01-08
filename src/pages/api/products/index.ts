import { NextApiRequest, NextApiResponse } from 'next';

import { handleProducts } from '@modules/commerce/helpers/handleProducts';

export default async function products(request: NextApiRequest, response: NextApiResponse) {
  try {
    const products = await handleProducts.getProducts(20)

    response.status(200).json(products)
  } catch (error) {
    response.status(500).json({ error })
  }
}
