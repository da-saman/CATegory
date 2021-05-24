import { GET_ALL_CATEGORIES_SUCCEEDED, GET_THE_CATEGORY_SUCCEEDED } from '../actionTypes';
const initialState = {
  categories: [{ "id": 5, "name": "boxes" }, { "id": 15, "name": "clothes" }],
  cats: [],
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
    case GET_THE_CATEGORY_SUCCEEDED: {
      const { theCategory} = action.payload;
      return { 
        ...state,
        selectedCategory: theCategory
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;