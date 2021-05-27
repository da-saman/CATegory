export interface CategoryType {
  id: number;
  name: string;
}

export interface CatImageType {
  breeds: [];
  categories: Array<CategoryType>;
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface StateType {
  categories: Array<CategoryType>;
  catImages: Array<CatImageType>;
  page: number;
}

export interface ActionType {
  type: string;
  payload: any;
}