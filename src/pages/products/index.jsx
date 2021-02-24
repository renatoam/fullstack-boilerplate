import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import { useState, useEffect, useCallback } from 'react';
import Card from '../../components/DataDisplay/Card';
import Showcase from '../../components/DataDisplay/Showcase';
import Filter from '../../components/DataEntry/Filter';
import Heading from '../../components/Foundation/Heading';
import { EMPTY_SEARCH, PRODUCTS_PER_PAGE } from '../../constants/global';
import { useProducts } from '../../context/products';
import { usePagination } from '../../hooks/usePagination';
import { brandUseCases } from '../../services/brands'
import {
  StyledBodyContainer,
  StyledMain
} from '../../styles/pages/products';

export default function Products(props) {
  const [filterOptions, setFilterOptions] = useState([])
  const { products, getProducts } = useProducts()
  const [currentProducts, handleChangePage] = usePagination(products, PRODUCTS_PER_PAGE)

  if (!products) return <CircularProgress />

  function handleFilterCustomers(value) {
    const filter = value !== 'Todos' ? value : ''
    getProducts(filter)
  }

  const getInitialBrands = useCallback(() => {
    brandUseCases.getBrands()
      .then(response => setFilterOptions([...response, 'Todos']))
  }, [])

  useEffect(() => {
    getInitialBrands()
  }, [])

  return (
    <StyledMain>
      <Filter
        name="products"
        title="Filter by brand: "
        options={filterOptions}
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
