import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ALL_CATEGORIES_REQUESTED } from "../actionTypes";
import { storeCategories, fetchCategoriesFailed } from "../actions";

export function* fetchCategories(): Generator<any, any, any> {
  try {
    const categories: any = yield call((): any =>
      fetch("https://api.thecatapi.com/v1/categories").then((response) =>
        response.json()
      )
    );
    yield put(storeCategories(categories));
  } catch (e) {
    yield put(fetchCategoriesFailed(e.message));
  }
}

function* fetchAllCategoriesSaga() {
  yield takeEvery(GET_ALL_CATEGORIES_REQUESTED, fetchCategories);
}
export default fetchAllCategoriesSaga;
