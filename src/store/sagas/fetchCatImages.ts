import { call, put, takeEvery } from 'redux-saga/effects'
import {
  GET_CAT_IMAGES_REQUESTED,
  // GET_CAT_IMAGES_SUCCEEDED,
  GET_CAT_IMAGES_FAILED
} from '../actionTypes';
import { storeTheCategory } from '../actions'

function* fetchCatImages(action: any): Generator<any, any, any> {
  try {
    const category: any = yield call((): any =>
      fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids${action.payload.id}`)
        .then(response => response.json())
    );
    yield put(storeTheCategory(category));
  } catch (e) {
    yield put({ type: GET_CAT_IMAGES_FAILED, message: e.message });
  }
}

function* fetchCatImagesSaga() {
  yield takeEvery(GET_CAT_IMAGES_REQUESTED, fetchCatImages);
}
export default fetchCatImagesSaga;