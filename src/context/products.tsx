import { useAuth } from '@context/auth'
import { GenericChildrenProps, ProductData } from '@helpers/interfaces'
import { ProductDataArray } from '@helpers/types'
import { productUseCases } from '@services/products'
import { createContext, useContext, useEffect, useState } from 'react'

export interface ProductContextShape {
  products: ProductDataArray
}

export const ProductContext = createContext<ProductContextShape>({
  products: []
})

export const ProductsProvider = ({ children }: GenericChildrenProps) => {
  const [products, setProducts] = useState<ProductData[]>([])
  const { isAuthenticated } = useAuth()

  async function getProducts(filter?: string) {
    const response = await productUseCases.getProducts(filter)

    setProducts(response)
  }

  useEffect(() => {
    if (isAuthenticated) getProducts()
  }, [])

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)
