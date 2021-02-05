import { CustomerService } from './service'
import CustomerUseCases from './useCase'

export const customerUseCases = new CustomerUseCases({
  CustomerService
})
