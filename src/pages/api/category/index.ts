import { NextApiRequest, NextApiResponse } from 'next'

export default function getCategories(request: NextApiRequest, response: NextApiResponse) {
  response.send({ method: request.method })
}
