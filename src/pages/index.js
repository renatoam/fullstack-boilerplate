import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchField from '../components/DataEntry/SearchField';
import Button from '../components/Foundation/Button';
import Showcase from '../components/DataDisplay/Showcase';
import Card from '../components/DataDisplay/Card';
import Heading from '../components/Foundation/Heading';
import Container from '../components/Foundation/Container';
import { FEATURED_PRODUCTS } from '../constants/global'
import { StyledSection } from '../styles/pages/home'
import axiosInstance from '../services/axios';

export async function getServerSideProps(context) {
  const axios = axiosInstance('backend')
  const products = await axios.get('/').then(response => response.data.products)

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

export default function Home({ products }) {
  console.log('products', products)

  const featuredProducts = [...products]
  featuredProducts.length = 5

  if (!products) return <CircularProgress />

  return (
    <Container direction="column">
      <Heading variant="h1" className="centered children">
        <Image
          src="/images/just-logo.png"
          width={200}
          height={50}
          alt="Just Digital"
        />
      </Heading>

      <StyledSection>
        <SearchField
          options={products}
        />

        <Button
          color="primary"
          size="large"
          className="centered margin"
        >
          <Link href="/products">
            <a>
              View all products
            </a>
          </Link>
        </Button>
      </StyledSection>

      <Showcase className="centered" justify="flex-start">
        <Heading variant="h2">
          {FEATURED_PRODUCTS}
        </Heading>
        {featuredProducts.length && featuredProducts.map((product, idx) => {
          return <Card key={idx} data={product} />
        })}
      </Showcase>
  </Container>
  )
}

Home.propTypes = {
  products: PropTypes.array
}
