import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductData } from 'src/common/types/interfaces'
import { ProductDataArray } from 'src/common/types/types'
import { RootState } from '../../../common/store'

/**
 * Todo arquivo de slice deve definir um tipo para o seu estado inicial
 * dessa forma, o createSlice pode inferir o tipo corretamente
 */
interface CartShape {
  cart: ProductDataArray
}

const initialState: CartShape = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const newProduct = {
        ...action.payload,
        stock: action.payload.quantity - 1,
        currentQuantity: 1
      }

      state.cart.push(newProduct)
    },
    removeFromCart: (state, action: PayloadAction<ProductData>) => {
      state.cart.filter(product => product.id !== action.payload.id)
    },
    increment: (state, action: PayloadAction<ProductData>) => {
      const currentProductIndex = state.cart.findIndex(product => {
        return product.id === action.payload.id
      })

      if (currentProductIndex < 0) return state
      if (state.cart[currentProductIndex].stock === 0) return state

      state.cart[currentProductIndex].currentQuantity += 1
      state.cart[currentProductIndex].stock -= 1
    },
    decrement: (state, action: PayloadAction<ProductData>) => {
      const currentProductIndex = state.cart.findIndex(product => {
        return product.id === action.payload.id
      })

      if (state.cart[currentProductIndex].currentQuantity <= 1) {
        state.cart.splice(currentProductIndex, 1)
      }
    },
    changeAmount: (state, action: PayloadAction<ProductData>) => {
      const currentProductIndex = state.cart.findIndex(product => {
        return product.id === action.payload.id
      })
      const currentProduct = state.cart[currentProductIndex]
      const newQuantity = action.payload.newQuantity

      if (newQuantity > currentProduct.stock) return state
      if (newQuantity === 0) return state

      currentProduct.stock = currentProduct.quantity - newQuantity
      currentProduct.currentQuantity = newQuantity
    }
  }
})

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
