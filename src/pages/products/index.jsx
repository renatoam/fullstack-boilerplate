import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import Card from '../../components/DataDisplay/Card';
import Showcase from '../../components/DataDisplay/Showcase';
import Filter from '../../components/DataEntry/Filter';
import Heading from '../../components/Foundation/Heading';
import { FILTER_TYPES } from '../../constants/filter';
import { EMPTY_SEARCH, PRODUCTS_PER_PAGE } from '../../constants/global';
import { useProducts } from '../../context/products';
import { usePagination } from '../../hooks/usePagination';
import {
  StyledBodyContainer,
  StyledFilterContainer,
  StyledMain
} from '../../styles/pages/products';

export default function Customer(props) {
  const { products } = useProducts()
  const [currentProducts, handleChangePage] = usePagination(products, PRODUCTS_PER_PAGE)

  console.log({ products, currentProducts })

  if (!products) return <CircularProgress />

  function handleFilterCustomers(value) {
    // filtragem
  }

  return (
    <StyledMain>
      <StyledFilterContainer>
        <Filter
          name="products"
          title="Filter by brand: "
          options={FILTER_TYPES}
          handleChange={handleFilterCustomers}
        />
      </StyledFilterContainer>
      <StyledBodyContainer>
        <Showcase>
          {currentProducts.length === 0
            ? <Heading variant="h6" text={EMPTY_SEARCH} />
            : currentProducts.map((product, idx) => {
              return <Card key={idx} data={product} />
            })}
        </Showcase>
        <Pagination count={PRODUCTS_PER_PAGE} onChange={(_, page) => handleChangePage(page)} />
      </StyledBodyContainer>
    </StyledMain>
  )
}
