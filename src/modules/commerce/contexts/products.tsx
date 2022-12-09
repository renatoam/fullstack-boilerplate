import { GenericChildrenProps } from '@modules/common/types/interfaces'
import { createContext, useContext, useEffect, useState } from 'react'

import { useAuth } from '@modules/auth/contexts/auth'
import { productUseCases } from '@modules/commerce/api/products'

export interface ProductContextShape {
  products: any
}

export const ProductContext = createContext<ProductContextShape>({
  products: []
})

export const ProductsProvider = ({ children }: GenericChildrenProps) => {
  const [products, setProducts] = useState<any[]>([])
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
