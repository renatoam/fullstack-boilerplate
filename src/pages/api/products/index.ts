import GetAllProductsController from '@modules/commerce/server/products/getAllProducts/GetAllProductsController';
import { NextApiRequest, NextApiResponse } from 'next';

export default new GetAllProductsController<NextApiRequest, NextApiResponse>().run
