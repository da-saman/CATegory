import { all } from "redux-saga/effects";

import fetchAllCategoriesSaga from "./fetchCategories";
import fetchCatImagesSaga from "./fetchCatImages";

export default function* rootSaga(): any {
  yield all([fetchAllCategoriesSaga(), fetchCatImagesSaga()]);
}
