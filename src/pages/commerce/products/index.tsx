import { StyledMain } from 'src/app/styles/pages/products'

import { CircularProgress } from '@material-ui/core'
import { handleProducts } from '@modules/commerce/helpers/handleProducts'
import { ProductDataArray } from '@modules/commerce/types/types'

export interface ProductPageProps {
  products: ProductDataArray
}

export async function getServerSideProps() {
  const products = await handleProducts.getProducts(10)

  return {
    props: {
      products
    }
  }
}

export default function Products(props: ProductPageProps) {
  const { products } = props

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
