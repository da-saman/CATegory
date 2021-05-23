import { GET_ALL_CATEGORIES } from '../actionTypes';
import {categories} from '../../mock/catdata'
const initialState = {
  categories: [],
  cats: [],
  selectedCategory: null
}


const reducer = function (state: any = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        categories : categories
      }
    }
  }
}

export default reducer;