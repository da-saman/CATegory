import {
  storeCategories,
  fetchCategories,
  fetchCatImages,
  storeTheCategory,
} from "./index";
import {
  GET_ALL_CATEGORIES_REQUESTED,
  GET_ALL_CATEGORIES_SUCCEEDED,
  GET_CAT_IMAGES_REQUESTED,
  GET_CAT_IMAGES_SUCCEEDED,
} from "../actionTypes";
import {mockCategories,mockCatImages} from '../../mock'
// import { CatImageType } from "../../types";


describe("create actions", () => {
  it("should create an action to fetch categories", () => {
    const expectedAction = {
      type: GET_ALL_CATEGORIES_REQUESTED,
    };
    expect(fetchCategories()).toEqual(expectedAction);
  });

  it("should create an action to store categories", () => {
    const categories = mockCategories;
    const expectedAction = {
      type: GET_ALL_CATEGORIES_SUCCEEDED,
      payload: {
        categories: categories,
      },
    };
    expect(storeCategories(categories)).toEqual(expectedAction);
  });

  it("should create an action to fetch cats", () => {
    const expectedAction = {
      type: GET_CAT_IMAGES_REQUESTED,
      payload: {
        id: 2,
        isMore: true,
      },
    };
    expect(fetchCatImages(2, true)).toEqual(expectedAction);
  });

  it("should create an action to store cat images", () => {
    const catImages = mockCatImages;
    const expectedAction = {
      type: GET_CAT_IMAGES_SUCCEEDED,
      payload: {
        images: catImages,
        isMore: true,
      },
    };
    expect(storeTheCategory(mockCatImages, true)).toEqual(expectedAction);
  });
});
