export default class CustomerUseCases {
  constructor({ CustomerService }) {
    this.customerService = CustomerService
  }

  async getCustomers(filter) {
    const params = { filter }
    return await this.customerService.getCustomers(params)
  }
}
