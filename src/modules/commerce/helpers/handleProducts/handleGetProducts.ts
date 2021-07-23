type TFetchProducts<T> = (limit: number) => T
type TNormalizer = (mongoObject: { [key: string]: any }) => Record<string, unknown>[]

interface IHandleProducts<T> {
  fetchProducts: TFetchProducts<T>
  normalizer: TNormalizer
}

class HandleProducts<T> {
  fetchProducts: TFetchProducts<T>
  normalizer: TNormalizer

  constructor({ fetchProducts, normalizer }: IHandleProducts<T>) {
    this.fetchProducts = fetchProducts
    this.normalizer = normalizer
  }

  async getProducts(limit: number) {
    const products = await this.fetchProducts(limit)
    return this.normalizer(products)
  }
}

export default HandleProducts
