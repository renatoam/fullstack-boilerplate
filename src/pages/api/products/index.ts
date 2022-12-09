import GetAllProductsController from '@modules/commerce/server/controllers/GetAllProductsController';
import { NextApiRequest, NextApiResponse } from 'next';

export default new GetAllProductsController<NextApiRequest, NextApiResponse>().run
