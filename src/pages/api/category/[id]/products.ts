import { NextApiRequest, NextApiResponse } from 'next'

export default function getProductsByCategory(request: NextApiRequest, response: NextApiResponse) {
  response.send({ route: 'getProductsByCategory', categoryById: request.query.id })
}
