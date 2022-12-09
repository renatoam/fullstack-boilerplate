import { handleProducts } from "@modules/commerce/helpers/handleProducts"

type Request = {
  method?: string | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

type Response = {
  status: (statusCode: number) => Response
  json: (body: any) => void
}

class GetAllProductsController<
  IRequest extends Request,
  IResponse extends Response
> {
  async run(request: IRequest, response: IResponse) {
    if (request.method !== 'GET') {
      return response.status(400).json({ message: 'This route only accepts GET method.' })
    }
  
    try {
      const products = await handleProducts.getProducts(20)
  
      return response.status(200).json(products)
    } catch (error) {
      return response.status(500).json({ error })
    }
  }
}

export default GetAllProductsController
