import { CartShape, GenericChildrenProps } from '@helpers/interfaces';
import { cartReducer } from '@helpers/reducers';
import { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext<CartShape>({
  cart: [],
  dispatch: () => {}
})

export const CartProvider = ({ children }: GenericChildrenProps) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
