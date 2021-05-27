import { call, put, takeEvery, select } from "redux-saga/effects";
import { GET_CAT_IMAGES_REQUESTED } from "../actionTypes";
import { storeCatImages, fetchCatImagesFailed } from "../actions";
import { pageSelector } from "../selectors";
import { CatImageType, ActionType } from "../../types";
import { fetcher } from "../../helper";

export function* fetchCatImages(action: ActionType): Generator<any, any, any> {
  try {
    const page = yield select(pageSelector);
    const { isMore } = action.payload;
    const catImages: Array<CatImageType> = yield call(
      fetcher(
        `/images/search?limit=10&page=${isMore ? page + 1 : 0}&category_ids${
          action.payload.id
        }`
      )
    );
    yield put(storeCatImages(catImages, isMore));
  } catch (e) {
    yield put(fetchCatImagesFailed(e.message));
  }
}

function* fetchCatImagesSaga() {
  yield takeEvery(GET_CAT_IMAGES_REQUESTED, fetchCatImages);
}
export default fetchCatImagesSaga;
