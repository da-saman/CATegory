import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ALL_CATEGORIES_REQUESTED } from "../actionTypes";
import { storeCategories, fetchCategoriesFailed } from "../actions";
import { CategoryType } from "../../types";
import { fetcher } from "../../helper";

export function* fetchCategories(): Generator<any, any, any> {
  try {
    const categories: Array<CategoryType> = yield call(fetcher("/categories"));
    yield put(storeCategories(categories));
  } catch (e) {
    yield put(fetchCategoriesFailed(e.message));
  }
}

function* fetchAllCategoriesSaga() {
  yield takeEvery(GET_ALL_CATEGORIES_REQUESTED, fetchCategories);
}
export default fetchAllCategoriesSaga;
