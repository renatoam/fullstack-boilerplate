import { ProductDataArray, RequestErrors } from '@helpers/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface ProductsShape {
  data: ProductDataArray | undefined
  errors: RequestErrors | undefined
}

const initialState: ProductsShape = {
  data: [],
  errors: {}
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsSuccess: (state, action?: PayloadAction<ProductDataArray>) => {
      state.data = action?.payload
    },
    fetchProductsFailure: (state, action?: PayloadAction<RequestErrors>) => {
      state.errors = action?.payload
    }
  }
})

export const { fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions

export const getProducts = (state: RootState) => state.products

export default productsSlice.reducer
