import {
  GET_ALL_CATEGORIES_REQUESTED,
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_ALL_CATEGORIES_FAILED,
  GET_CAT_IMAGES_REQUESTED,
  GET_CAT_IMAGES_SUCCEEDED,
  GET_CAT_IMAGES_FAILED,
} from "../actionTypes";
import { CatImageType, CategoryType } from "../../types";

export const fetchCategories = () => ({
  type: GET_ALL_CATEGORIES_REQUESTED,
});

export const storeCategories = (categories: Array<CategoryType>) => ({
  type: GET_ALL_CATEGORIES_SUCCEEDED,
  payload: {
    categories: categories,
  },
});

export const fetchCategoriesFailed = (message: string) => ({
  type: GET_ALL_CATEGORIES_FAILED,
  payload: {
    err: message,
  },
});

export const fetchCatImages = (id: number, isMore: boolean) => ({
  type: GET_CAT_IMAGES_REQUESTED,
  payload: {
    id: id,
    isMore: isMore,
  },
});
export const storeTheCategory = (
  images: Array<CatImageType>,
  isMore: boolean
) => ({
  type: GET_CAT_IMAGES_SUCCEEDED,
  payload: {
    images: images,
    isMore: isMore,
  },
});

export const fetchCatImagesFailed = (message: string) => ({
  type: GET_CAT_IMAGES_FAILED,
  payload: {
    err: message,
  },
});
