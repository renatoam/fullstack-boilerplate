import { WithId } from "mongodb"

type TFetchProducts = (limit: number) => any
type TNormalizer = (mongoObject: WithId<Document>[]) => Record<string, unknown>[]

interface IHandleProducts {
  fetchProducts: TFetchProducts
  normalizer: TNormalizer
}

class HandleProducts {
  fetchProducts: TFetchProducts
  normalizer: TNormalizer

  constructor({ fetchProducts, normalizer }: IHandleProducts) {
    this.fetchProducts = fetchProducts
    this.normalizer = normalizer
  }

  async getProducts(limit: number = 0) {
    const products = await this.fetchProducts(limit)
    return this.normalizer(products)
  }
}

export default HandleProducts
