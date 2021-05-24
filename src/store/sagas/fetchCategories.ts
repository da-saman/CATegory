import { call, put, takeEvery } from 'redux-saga/effects'
import {
  GET_ALL_CATEGORIES_REQUESTED,
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_ALL_CATEGORIES_FAILED
} from '../actionTypes';
import { storeCategories } from '../actions'

function* fetchCategories(): Generator<
  any,
  any,
  any
> {
  try {
    const categories: any = yield call((): any =>
      fetch('https://api.thecatapi.com/v1/categories')
        .then(response => response.json())
    );
    yield put(storeCategories(categories));
  } catch (e) {
    yield put({ type: GET_ALL_CATEGORIES_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(GET_ALL_CATEGORIES_REQUESTED, fetchCategories);
}
export default mySaga;