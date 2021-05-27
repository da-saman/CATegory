import { CategoryType } from "../types";

export const BASE_URL = "https://api.thecatapi.com/v1";

export const fetcher = (route: string) => (): Promise<CategoryType> =>
  fetch(`${BASE_URL}${route}`).then((response) => response.json());
