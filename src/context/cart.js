import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../helpers/reducers'

export const CartContext = createContext({
  cart: [],
  dispatch: () => {}
})

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.element
}

export const useCart = () => useContext(CartContext)
