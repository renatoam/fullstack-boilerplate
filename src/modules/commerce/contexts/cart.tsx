import { createContext, useContext } from 'react'
import { GenericChildrenProps } from 'src/common/types/interfaces'

interface CartShape {
  cart: any
  dispatch: ({ type, payload }: any) => void
}

const initialContextState: CartShape = {
  cart: [],
  dispatch: () => {}
}

// interface CartState {
//   cart: ProductDataArray
// }

// const initialState: CartState = {
//   cart: []
// }

export const CartContext = createContext<CartShape>(initialContextState)

export const CartProvider = ({ children }: GenericChildrenProps) => {
  // const [cart, dispatch] = useReducer(cartReducer, initialState)
  // return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
