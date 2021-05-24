import { call, put, takeEvery } from 'redux-saga/effects'
import {
  GET_THE_CATEGORY_REQUESTED,
  // GET_THE_CATEGORY_SUCCEEDED,
  GET_THE_CATEGORY_FAILED
} from '../actionTypes';
import { storeTheCategory } from '../actions'

function* fetchCategory(action: any): Generator<any, any, any> {
  try {
    const category: any = yield call((): any =>
      fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids${action.payload.id}`)
        .then(response => response.json())
    );
    yield put(storeTheCategory(category));
  } catch (e) {
    yield put({ type: GET_THE_CATEGORY_FAILED, message: e.message });
  }
}

function* fetchCategorySaga() {
  yield takeEvery(GET_THE_CATEGORY_REQUESTED, fetchCategory);
}
export default fetchCategorySaga;