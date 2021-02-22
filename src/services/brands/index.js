import { BrandService } from './service'
import BrandUseCases from './useCase'

export const brandUseCases = new BrandUseCases({
  BrandService
})
