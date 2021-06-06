import { NextApiRequest, NextApiResponse } from 'next'

export default function getCategoryById(request: NextApiRequest, response: NextApiResponse) {
  response.send({ route: 'getCategoryById', categoryById: request.query.id })
}
