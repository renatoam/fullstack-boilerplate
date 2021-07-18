import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDataArray, RequestErrors } from 'src/common/types/types'
import { RootState } from '../../../common/store'

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
