import { cloneableGenerator } from "@redux-saga/testing-utils";
import { fetchCatImages as fetchCatImagesSaga } from "./fetchCatImages";
import { GET_CAT_IMAGES_REQUESTED } from "../actionTypes";
import { storeTheCategory, fetchCatImagesFailed } from "../actions";
import { call, put, select } from "redux-saga/effects";
import { mockCatImages } from "../../mock";
import { pageSelector } from "../selectors";

describe("fetch cat images saga testing", () => {
  const generator = cloneableGenerator(fetchCatImagesSaga)(({
    type: GET_CAT_IMAGES_REQUESTED,
    payload: {
      id: 2,
      isMore: true,
    },
  }));

  it("get cats pages number", () => {
    const result = generator.next().value;
    expect(result).toEqual(select(pageSelector));
  });
  it("calls the API", () => {
    const result = generator.next().value;
    expect(JSON.stringify(result)).toEqual(JSON.stringify(call(() => {})));
  });
  describe("and the request is successful", () => {
    let clone: any;

    beforeAll(() => {
      clone = generator.clone();
    });

    it("put the resolved cats", () => {
      const result = clone.next(mockCatImages).value;
      expect(result).toEqual(put(storeTheCategory(mockCatImages, true)));
    });

    it("performs no further work", () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
  describe("and the request fails", () => {
    let clone: any;

    beforeAll(() => {
      clone = generator.clone();
    });

    it("raises failed action", () => {
      const error = new Error("404 Not Found");
      const result = clone.throw(error).value;
      expect(result).toEqual(put(fetchCatImagesFailed("404 Not Found")));
    });

    it("performs no further work", () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
