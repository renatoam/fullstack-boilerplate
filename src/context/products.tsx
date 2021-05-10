import { GenericChildrenProps, ProductData, ProductShape } from '@helpers/interfaces'
import { productUseCases } from '@services/products'
import { createContext, useContext, useEffect, useState } from 'react'

export const ProductContext = createContext<ProductShape>({
  products: [],
  getProducts: () => {}
})

export const ProductsProvider = ({ children }: GenericChildrenProps) => {
  const [products, setProducts] = useState<ProductData[]>([])

  async function getProducts(filter?: string) {
    const response = await productUseCases.getProducts(filter)

    setProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, getProducts }}>{children}</ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
