import { ProductService } from './service'
import ProductUseCases from './useCase'

// O nome desse pattern é Dependency Injection
// E essa técnica do use cases é chamado de Constructor Injection
export const productUseCases = new ProductUseCases({
  ProductService
})
