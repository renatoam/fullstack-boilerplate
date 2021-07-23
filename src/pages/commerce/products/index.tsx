import { CircularProgress } from '@material-ui/core'
import { StyledMain } from 'src/app/styles/pages/products'
import { handleProducts } from 'src/modules/commerce/helpers/handleProducts'
import { ProductDataArray } from 'src/modules/commerce/types/types'

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
              {Object.keys(product).map(key => {
                return <li key={key}>{key}</li>
              })}
            </ul>
          </section>
        )
      })}
    </StyledMain>
  )
}
