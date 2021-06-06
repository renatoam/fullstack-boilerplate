import { ProductData } from '@helpers/interfaces'
import { ProductService } from '@services/products/service'
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchProductsFailure, fetchProductsSuccess } from './productsSlice'

function* fetchProductsSaga(action: any) {
  try {
    const response: ProductData[] = yield call(ProductService.getProducts, action?.payload)

    yield put(fetchProductsSuccess(response))
  } catch (error) {
    console.log({ error })
    yield put(fetchProductsFailure(error))
  }
}

function* sagas() {
  yield takeEvery(fetchProductsSuccess.type, fetchProductsSaga)
}

export default sagas
