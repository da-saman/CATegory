import { GET_ALL_CATEGORIES, GET_THE_CATEGORY } from '../actionTypes';
const initialState = {
  categories: [],
  cats: [],
  selectedCategory: null
}


const reducer = function (state: any = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      const { categories } = action.payload;
      return {
        ...state,
        categories: categories
      }
    }
  }
}

export default reducer;