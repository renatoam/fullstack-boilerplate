import PropTypes from 'prop-types'
import DefaultHome from './home/_index'
import axiosInstance from '../services/axios';

export async function getServerSideProps(context) {
  const axios = axiosInstance('backend')
  const products = await axios.get('/').then(response => response.data.products)

  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {
  return (
    <DefaultHome products={products} />
  )
}

Home.propTypes = {
  products: PropTypes.array
}
