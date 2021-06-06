import { ProductPageProps } from '@helpers/interfaces'
import { StyledMain } from '@styles/pages/products'

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { authToken: token } = parseCookies(context)

//   console.log('getServerSideProps', { token })

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   console.log('Será?')

//   const axios = backendAxios(context)
//   const filter = context.query.filter

//   // configurar Redux (saga?) aqui pra abstrair essa requisição e usar aqui e no back
//   const rawProducts = await axios.get('/products').then(response => response.data)
//   const rawBrands = rawProducts.map((product: ProductData) => product.brand)

//   const brands = [...new Set(rawBrands)]
//   const products = filter
//     ? rawProducts.filter((product: ProductData) => product.brand === filter)
//     : rawProducts

//   return {
//     props: {
//       brands: [...brands, 'Todos'],
//       products
//     }
//   }
// }

export default function Products(props: ProductPageProps) {
  // const { brands, products } = props

  // const router = useRouter()
  // const [currentProducts, handleChangePage] = usePagination<ProductData>({
  //   items: products,
  //   itemsPerPage: PRODUCTS_PER_PAGE
  // })

  // function handleFilterCustomers(value: string) {
  //   const filter = value !== 'Todos' ? `?filter=${value}` : ''
  //   router.push(`/products${filter}`)
  // }

  // if (!products) return <CircularProgress />

  return (
    <StyledMain>
      <h1>Prodcut</h1>
      {/* <Filter
        name="products"
        title="Filter by brand: "
        options={brands}
        handleChange={handleFilterCustomers}
      />
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
      </StyledBodyContainer> */}
    </StyledMain>
  )
}
