import { StateType } from "../../types";

export const allCategoriesSelector = (store: StateType) => store.categories;

export const catImagesSelector = (store: StateType) => store.catImages;

export const pageSelector = (store: StateType) => store.page;
