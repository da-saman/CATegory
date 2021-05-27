import {
  GET_ALL_CATEGORIES_REQUESTED,
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_CAT_IMAGES_REQUESTED,
  GET_CAT_IMAGES_SUCCEEDED,
} from "../actionTypes";
import {CatImageType} from '../../types'
export const fetchCategories = () => ({
  type: GET_ALL_CATEGORIES_REQUESTED,
});
export const storeCategories = (categories: any) => ({
  type: GET_ALL_CATEGORIES_SUCCEEDED,
  payload: {
    categories: categories,
  },
});

export const fetchCatImages = (id: number, isMore: boolean) => ({
  type: GET_CAT_IMAGES_REQUESTED,
  payload: {
    id: id,
    isMore: isMore,
  },
});
export const storeTheCategory = (images: Array<CatImageType>, isMore: boolean) => ({
  type: GET_CAT_IMAGES_SUCCEEDED,
  payload: {
    images: images,
    isMore: isMore,
  },
});
