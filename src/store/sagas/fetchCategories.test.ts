import { cloneableGenerator } from "@redux-saga/testing-utils";
import { fetchCategories as fetchCategoriesSaga } from "./fetchCategories";
import { storeCategories, fetchCategoriesFailed } from "../actions";
import { call, put } from "redux-saga/effects";
import { mockCategories } from "../../mock";

describe("fetch all categories saga testing", () => {
  const generator = cloneableGenerator(fetchCategoriesSaga)();
  it("calls the API", () => {
    const result = generator.next().value;
    expect(JSON.stringify(result)).toEqual(JSON.stringify(call(() => {})));
  });


  describe("and the request is successful", () => {
    let clone: any;

    beforeAll(() => {
      clone = generator.clone();
    });

    it("put the resolved categories", () => {
      const result = clone.next(mockCategories).value;
      expect(result).toEqual(put(storeCategories(mockCategories)));
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
      expect(result).toEqual(put(fetchCategoriesFailed("404 Not Found")));
    });

    it("performs no further work", () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });

});
