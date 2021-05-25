import {
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_ALL_CATEGORIES_REQUESTED,
  GET_CAT_IMAGES_SUCCEEDED,
  GET_CAT_IMAGES_REQUESTED
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

export const fetchCatImages = (id: number) => ({
  type: GET_CAT_IMAGES_REQUESTED,
  payload: {
    id: id
  }
})
export const storeTheCategory = (category: any) => ({
  type: GET_CAT_IMAGES_SUCCEEDED,
  payload: {
    category: category
  }
})