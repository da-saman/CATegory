import {
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_CAT_IMAGES_SUCCEEDED,
} from "../actionTypes";
import { CatImageType, StateType } from "../../types";

export const initialState: StateType = {
  categories: [],
  catImages: [],
  page: 0,
};

const reducer = function (state: StateType = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCEEDED: {
      const { categories } = action.payload;
      return {
        ...state,
        categories: categories,
      };
    }
    case GET_CAT_IMAGES_SUCCEEDED: {
      const catImages : Array<CatImageType> = action.payload.images;
      const { isMore } = action.payload;
      return {
        ...state,
        catImages: isMore ? [...state.catImages, ...catImages] : [...catImages],
        page: isMore ? state.page + 1 : 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
