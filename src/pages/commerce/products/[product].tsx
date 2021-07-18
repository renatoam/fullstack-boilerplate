import Container from 'src/common/components/Foundation/Container'
import { ProductData } from 'src/modules/commerce/types/interfaces'

// PARECE QUE SÓ CONSIGO TESTAR ESSAS COISAS RODANDO O BUILD
// MAS O BUILD TÁ DANDO ERRO, VERIFICAR

// export async function getStaticPaths(context: any) {
//   const { authToken: token } = parseCookies(context)

//   console.log('getStaticPaths', { token })

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false
//       }
//     }
//   }

//   const axios = backendAxios()
//   const products = await axios.get('/products').then(response => response.data)
//   const filteredProducts = products.filter((product: ProductData) => product.brand === 'Samsung')
//   const productsPaths = filteredProducts.map((product: ProductData) => `/products/${product.id}`)

//   return {
//     paths: productsPaths,
//     fallback: 'blocking'
//   }
// }

// export async function getStaticProps(context: any) {
//   const id = context?.params?.product
//   const axios = backendAxios(context)
//   const products = await axios.get('/products').then(response => response.data)
//   const currentProduct = products.find((product: ProductData) => product.id.toString() === id)

//   return {
//     props: {
//       currentProduct
//     }
//   }
// }

export default function ProductDetails({ currentProduct }: { currentProduct: ProductData }) {
  // const { dispatch } = useCart()
  // const [value, setValue] = useState(0)
  // const [error, setError] = useState('')
  // const customStyle = {
  //   display: 'flex',
  //   gap: 20,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   margin: '20px 0'
  // }

  // function handleDispatchAction(action: string) {
  //   const newValue = action === 'ADD' ? value + 1 : value - 1
  //   dispatch({ type: action, payload: currentProduct })
  //   setValue(newValue)
  // }

  // function handleValueByInput(value: number) {
  //   dispatch({
  //     type: 'CHANGE',
  //     payload: {
  //       ...currentProduct,
  //       newQuantity: value
  //     }
  //   })
  //   setValue(value)
  // }

  // function handleAddingItems(idAction: string) {
  //   const action = idAction.toUpperCase()

  //   if (currentProduct.stock === 0) {
  //     setError('Estoque zerado')
  //     return
  //   }

  //   handleDispatchAction(action)
  // }

  // function handleRemovingItems(idAction: string) {
  //   const action = idAction.toUpperCase()

  //   if (currentProduct.currentQuantity === 0) return

  //   handleDispatchAction(action)
  // }

  // if (!currentProduct) return <p>Loading...</p>

  return (
    <Container>
      <h1>[product]</h1>
      {/* <StyledSection className="wrapper">
        <StyledSection className="image">
          <Image src={FALLBACK_IMAGEBIG} width={500} height={500} />
        </StyledSection>
        <StyledSection className="info">
          <div>
            <h2>{currentProduct.title}</h2>
            <small>{currentProduct.id}</small>
          </div>
          <div style={customStyle}>
            <p>{convertToCurrency(currentProduct.price)}</p>
            <ControlButton
              value={value}
              error={error}
              handleAddingItems={handleAddingItems}
              handleRemovingItems={handleRemovingItems}
              handleChange={handleValueByInput}
            />
          </div>
        </StyledSection>
        <StyledSection className="description">
          <p>{currentProduct.description}</p>
        </StyledSection>
      </StyledSection> */}
    </Container>
  )
}
