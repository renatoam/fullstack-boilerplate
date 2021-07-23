import { getProducts as fetchProducts } from '@database/getProducts'
import { handleNormalizeObject as normalizer } from '@helpers/handleObject'
import HandleProducts from './handleGetProducts'

export const handleProducts = new HandleProducts({ fetchProducts, normalizer })
