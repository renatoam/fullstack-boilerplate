import { mongoConnection } from "@database/connection";
import { Request, Response } from "../../protocols/http";
import { GetProductRequest } from "./GetProductByIdProtocols";

class GetProductByIdController<
  IRequest extends Request,
  IResponse extends Response
> {
  async run(request: IRequest, response: IResponse) {
    const { id } = request.query as unknown as GetProductRequest
    const connection = await mongoConnection()
    const productsCollection = connection?.products

    if (!id) {
      return response.status(400).json({ message: 'ID is required.' })
    }

    const product = await productsCollection?.find({ productID: id }).toArray()

    if (!product || !product.length) {
      return response.status(404).json({ message: 'Product not found.' })
    }

    return response.status(200).json(product[0])
  }
}

export default GetProductByIdController
