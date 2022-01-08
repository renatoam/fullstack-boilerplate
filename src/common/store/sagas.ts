import { call, put, takeEvery } from 'redux-saga/effects';
import { ProductData } from 'src/common/types/interfaces';

import { ProductService } from '@modules/commerce/services/products/service';

import {
    fetchProductsFailure, fetchProductsSuccess
} from '../../modules/commerce/store/productsSlice';

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
