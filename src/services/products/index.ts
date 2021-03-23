import { ProductService } from './service'
import ProductUseCases from './useCase'

export const productUseCases = new ProductUseCases({
  ProductService
})
