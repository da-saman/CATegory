import { all } from 'redux-saga/effects';


import fetchAllCategoriesSaga from './fetchCategories'
import fetchCategorySaga  from './fetchCategory'

export default function* rootSaga(): any {
  yield all([
    fetchAllCategoriesSaga(),
    fetchCategorySaga(),

  ]);
}
