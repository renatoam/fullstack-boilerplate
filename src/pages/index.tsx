import Card from '@components/DataDisplay/Card'
import Logo from '@components/DataDisplay/Logo'
import Showcase from '@components/DataDisplay/Showcase'
import SearchField from '@components/DataEntry/SearchField'
import Button from '@components/Foundation/Button'
import Container from '@components/Foundation/Container'
import Heading from '@components/Foundation/Heading'
import { FEATURED_PRODUCTS } from '@constants/global'
import { ProductDataArray } from '@helpers/types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { backendAxios as axios } from '@services/axios'
import { StyledSection } from '@styles/pages/home'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import PropTypes from 'prop-types'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await axios.get('/products').then(response => response.data)

  if (!products) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      products
    }
  }
}

export default function Home({ products }: { products: ProductDataArray }) {
  const featuredProducts = [...products]
  featuredProducts.length = 5

  if (!products) return <CircularProgress />

  return (
    <Container direction="column">
      <Heading variant="h1">
        <Logo
          src={process.env.NEXT_PUBLIC_LOGOTIPO_PATH}
          width={500}
          height={'auto'}
          alt={process.env.NEXT_PUBLIC_COMPANY_NAME}
          href={process.env.NEXT_PUBLIC_COMPANY_LINK}
        />
      </Heading>

      <StyledSection>
        <SearchField options={products} />

        <Button color="primary" size="large" className="centered margin">
          <Link href="/products">
            <a>View all products</a>
          </Link>
        </Button>
      </StyledSection>

      <Showcase justify="flex-start">
        <Heading variant="h2">{FEATURED_PRODUCTS}</Heading>
        {featuredProducts.length &&
          featuredProducts.map((product, idx) => {
            return <Card key={idx} data={product} />
          })}
      </Showcase>
    </Container>
  )
}

Home.propTypes = {
  products: PropTypes.array
}
