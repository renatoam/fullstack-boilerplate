import GetProductByIdController from '@modules/commerce/server/products/getProductById/GetProductByIdController'
import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    return new GetProductByIdController().run(request, response)
  }

  return response.status(400).json({ message: 'Only GET method allowed to this endpoint.' })
}
