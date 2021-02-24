import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { productUseCases } from '../services/products';

export const ProductContext = createContext({
  products: [],
  getProducts: () => {}
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  async function getProducts(filter) {
    const response = await productUseCases.getProducts(filter)

    setProducts(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.element
}

export const useProducts = () => useContext(ProductContext)
