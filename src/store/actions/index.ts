import {
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_ALL_CATEGORIES_REQUESTED,
  GET_THE_CATEGORY_SUCCEEDED,
  GET_THE_CATEGORY_REQUESTED
} from '../actionTypes';


export const fetchCategories = () => ({
  type: GET_ALL_CATEGORIES_REQUESTED
})
export const storeCategories = (categories: any) => ({
  type: GET_ALL_CATEGORIES_SUCCEEDED,
  payload: {
    categories: categories
  }
});

export const fetchTheCategory = (id: number) => ({
  type: GET_THE_CATEGORY_REQUESTED,
  payload: {
    id: id
  }
})
export const storeTheCategory = (category: any) => ({
  type: GET_THE_CATEGORY_SUCCEEDED,
  payload: {
    category: category
  }
})