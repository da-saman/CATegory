export interface CategoryType {
  id: number;
  name: string;
}

export interface CatImageType {
  breeds: [];
  // categories: Array<Category>;
  id: string;
  url: string;
  width: number;
  height: number;
}
