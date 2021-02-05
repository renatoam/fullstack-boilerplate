export default class CustomerUseCases {
  constructor({ CustomerService }) {
    this.customerService = CustomerService
  }

  async getCustomers(params) {
    return await this.customerService.getCustomers(params)
  }
}
