import Card from '@components/DataDisplay/Card'
import Showcase from '@components/DataDisplay/Showcase'
import Filter from '@components/DataEntry/Filter'
import Heading from '@components/Foundation/Heading'
import { EMPTY_SEARCH, PRODUCTS_PER_PAGE } from '@constants/global'
import { ProductData } from '@helpers/interfaces'
import { usePagination } from '@hooks/usePagination'
import CircularProgress from '@material-ui/core/CircularProgress'
import Pagination from '@material-ui/lab/Pagination'
import axiosInstance from '@services/axios'
import { StyledBodyContainer, StyledMain } from '@styles/pages/products'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const axios = axiosInstance('backend')
  const filter = context.query.filter

  const rawProducts = await axios.get('/').then(response => response.data.products)
  const rawBrands = rawProducts.map((product: ProductData) => product.brand)

  const brands = [...new Set(rawBrands)]
  const products = filter ? rawProducts.filter((product: ProductData) => product.brand === filter) : rawProducts

  return {
    props: {
      brands: [...brands, 'Todos'],
      products
    }
  }
}

export default function Products({ brands, products }: { brands: string[]; products: ProductData[] }) {
  const router = useRouter()
  const [currentProducts, handleChangePage] = usePagination<ProductData>({
    items: products,
    itemsPerPage: PRODUCTS_PER_PAGE
  })

  if (!products) return <CircularProgress />

  function handleFilterCustomers(value: string) {
    const filter = value !== 'Todos' ? `?filter=${value}` : ''
    router.push(`/products${filter}`)
  }

  return (
    <StyledMain>
      <Filter name="products" title="Filter by brand: " options={brands} handleChange={handleFilterCustomers} />
      <StyledBodyContainer>
        <Showcase>
          {currentProducts.length <= 0 ? (
            <Heading variant="h2">{EMPTY_SEARCH}</Heading>
          ) : (
            currentProducts.map((product: ProductData, idx: number) => {
              return <Card key={idx} data={product} />
            })
          )}
        </Showcase>
        <Pagination count={PRODUCTS_PER_PAGE} onChange={(_, page) => handleChangePage(page)} />
      </StyledBodyContainer>
    </StyledMain>
  )
}
