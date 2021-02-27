import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import Card from '../../components/DataDisplay/Card';
import Showcase from '../../components/DataDisplay/Showcase';
import Filter from '../../components/DataEntry/Filter';
import Heading from '../../components/Foundation/Heading';
import { EMPTY_SEARCH, PRODUCTS_PER_PAGE } from '../../constants/global';
import { usePagination } from '../../hooks/usePagination';
import axiosInstance from '../../services/axios'
import {
  StyledBodyContainer,
  StyledMain
} from '../../styles/pages/products';

export async function getServerSideProps(context) {
  const axios = axiosInstance('backend')
  const filter = context.query.filter

  const rawProducts = await axios.get('/').then(response => response.data.products)
  const rawBrands = rawProducts.map(product => product.brand)

  const brands = [...new Set(rawBrands)]
  const products = filter
    ? rawProducts.filter(product => product.brand === filter)
    : rawProducts

  return {
    props: {
      brands: [...brands, 'Todos'],
      products
    }
  }
}

export default function Products({ brands, products }) {
  const router = useRouter()
  const [currentProducts, handleChangePage] = usePagination(products, PRODUCTS_PER_PAGE)

  if (!products) return <CircularProgress />

  function handleFilterCustomers(value) {
    const filter = value !== 'Todos' ? `?filter=${value}` : ''
    router.push(`/products${filter}`)
  }

  return (
    <StyledMain>
      <Filter
        name="products"
        title="Filter by brand: "
        options={brands}
        handleChange={handleFilterCustomers}
      />
      <StyledBodyContainer>
        <Showcase>
          {currentProducts.length <= 0 ? (
            <Heading variant="h2" text={EMPTY_SEARCH} />
          ) : (
            currentProducts.map((product, idx) => {
              return <Card key={idx} data={product} />
            })
          )}
        </Showcase>
        <Pagination count={PRODUCTS_PER_PAGE} onChange={(_, page) => handleChangePage(page)} />
      </StyledBodyContainer>
    </StyledMain>
  )
}

Products.propTypes = {
  brands: PropTypes.array,
  products: PropTypes.array
}
