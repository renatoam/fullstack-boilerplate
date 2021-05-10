import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

// Exportando os tipos RootState e Dispatch pra poder usá-los depois
// Importamos daqui pra que não tenhamos que importar da fonte toda vez

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {cart: cartReducer}
export type AppDispatch = typeof store.dispatch
