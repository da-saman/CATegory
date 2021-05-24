import { GET_ALL_CATEGORIES_SUCCEEDED, GET_THE_CATEGORY_SUCCEEDED } from '../actionTypes';

export const getAllCategories = (categories: any) => ({
  type: GET_ALL_CATEGORIES_SUCCEEDED,
  payload: {
    categories: categories
  }
});

export const getTheCategory = (category: any) => ({
  type: GET_THE_CATEGORY_SUCCEEDED,
  payload: {
    category: category
  }
})