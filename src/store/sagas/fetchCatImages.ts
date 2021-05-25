import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  GET_CAT_IMAGES_REQUESTED,
  // GET_CAT_IMAGES_SUCCEEDED,
  GET_CAT_IMAGES_FAILED,
} from "../actionTypes";
import { storeTheCategory } from "../actions";
import { pageSelector } from "../selectors";

function* fetchCatImages(action: any): Generator<any, any, any> {
  try {
    const page = yield select(pageSelector);
    const { isMore } = action.payload;
    const catImages: any = yield call((): any =>
      fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${
          isMore ? page + 1 : 0
        }&category_ids${action.payload.id}`
      ).then((response) => response.json())
    );
    yield put(storeTheCategory(catImages, isMore));
  } catch (e) {
    yield put({ type: GET_CAT_IMAGES_FAILED, message: e.message });
  }
}

function* fetchCatImagesSaga() {
  yield takeEvery(GET_CAT_IMAGES_REQUESTED, fetchCatImages);
}
export default fetchCatImagesSaga;
