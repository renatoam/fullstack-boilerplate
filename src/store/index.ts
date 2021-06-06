import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(sagas)

// Exportando os tipos RootState e Dispatch pra poder usá-los depois
// Importamos daqui pra que não tenhamos que importar da fonte toda vez

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {cart: cartReducer, products: productsReducer}
export type AppDispatch = typeof store.dispatch
