import { GET_ALL_CATEGORIES_SUCCEEDED, GET_CAT_IMAGES_SUCCEEDED } from '../actionTypes';
const initialState = {
  categories: [],
  catImages: [],
  selectedCategory: null
}


const reducer = function (state: any = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCEEDED: {
      const { categories } = action.payload;
      return {
        ...state,
        categories: categories
      }
    }
    case GET_CAT_IMAGES_SUCCEEDED: {
      const { category } = action.payload;
      return {
        ...state,
        catImages: category
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;