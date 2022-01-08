import { createContext, useContext, useEffect, useState } from 'react'
import { GenericChildrenProps, ProductData } from 'src/common/types/interfaces'
import { ProductDataArray } from 'src/common/types/types'

import { useAuth } from '@modules/auth/contexts/auth'
import { productUseCases } from '@modules/commerce/services/products'

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
