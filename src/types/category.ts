export interface Category {
  id: number;
  name: string;
}

export interface Cat {
  breeds: [];
  categories: Array<Category>;
  id: string;
  url: string;
  width: number;
  height: number;
}
