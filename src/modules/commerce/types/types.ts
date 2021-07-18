import { ProductData } from './interfaces'

export type ActionType = 'ADD' | 'REMOVE' | 'REMOVEALL'

export type ProductDataArray = ProductData[]

export type GetBrandsType = {
  getBrands: () => string[]
}

export type GetProductsType = {
  getProducts: (filter?: string) => Promise<ProductDataArray>
}
