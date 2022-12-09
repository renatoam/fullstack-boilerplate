import { StyledMain } from '@styles/pages/products'

import { CircularProgress } from '@material-ui/core'
import { productUseCases } from '@modules/commerce/api/products'
import { ProductDataArray } from '@modules/commerce/types/types'
import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState<ProductDataArray>([])

  async function fetchProducts() {
    const response = await productUseCases.getProducts()

    setProducts(response)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (!products.length) return <CircularProgress />

  return (
    <StyledMain>
      {products?.map(product => {
        return (
          <section key={product.productid}>
            <ul>
              {Object.values(product).map(key => {
                return <li key={key}>{key}</li>
              })}
            </ul>
          </section>
        )
      })}
    </StyledMain>
  )
}
