import { call, put, takeEvery } from 'redux-saga/effects';

import { ProductService } from '@modules/commerce/api/products/service';

import {
    fetchProductsFailure, fetchProductsSuccess
} from '../../commerce/store/productsSlice';

function* fetchProductsSaga(action: any) {
  try {
    const response: any[] = yield call(ProductService.getProducts, action?.payload)

    yield put(fetchProductsSuccess(response))
  } catch (error) {
    console.log({ error })
    yield put(fetchProductsFailure({error: String(error)}))
  }
}

function* sagas() {
  yield takeEvery(fetchProductsSuccess.type, fetchProductsSaga)
}

export default sagas
