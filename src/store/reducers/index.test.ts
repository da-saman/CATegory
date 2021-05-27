import reducer from "./index";
import { mockCategories, mockCatImages } from "../../mock";
import { storeCategories, storeCatImages } from "../actions";
import { initialState } from "./index";

describe("Cats reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ALL_CATEGORIES_SUCCEEDED", () => {
    expect(reducer(undefined, storeCategories(mockCategories))).toEqual({
      ...initialState,
      categories: mockCategories,
    });
  });

  it("should handle GET_CAT_IMAGES_SUCCEEDED when new category", () => {
    expect(reducer(undefined, storeCatImages(mockCatImages, false))).toEqual({
      ...initialState,
      catImages: mockCatImages,
      page: 0,
    });
  });

  it("should handle GET_CAT_IMAGES_SUCCEEDED when select more image", () => {
    expect(reducer(undefined, storeCatImages(mockCatImages, true))).toEqual({
      ...initialState,
      catImages: mockCatImages,
      page: 1,
    });
  });

  it("should handle GET_CAT_IMAGES_SUCCEEDED when select more image and there were images", () => {
    expect(
      reducer(
        { ...initialState, catImages: mockCatImages, page: 1 },
        storeCatImages(mockCatImages, true)
      )
    ).toEqual({
      ...initialState,
      catImages: [...mockCatImages,...mockCatImages],
      page: 2,
    });
  });
});
