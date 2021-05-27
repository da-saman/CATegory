import { BASE_URL } from "../constant";
import { CategoryType } from "../types";

export const fetcher = (route: string) => (): Promise<CategoryType> =>
  fetch(`${BASE_URL}${route}`).then((response) => response.json());
