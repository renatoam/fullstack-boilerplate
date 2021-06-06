import { NextApiRequest, NextApiResponse } from 'next'

export default function getProductById(request: NextApiRequest, response: NextApiResponse) {
  response.send({ route: 'getProductById', productId: request.query.id })
}
