import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  allCategoriesSelector,
  theCategorySelector,
} from "../src/store/selectors";
import { fetchCategories, fetchTheCategory } from "../src/store/actions";
import { Layout, CatImage } from "./App.style";

function App() {
  const allCategories = useSelector(allCategoriesSelector);
  const theCategory = useSelector(theCategorySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Layout>
      <div>
        {allCategories.map((category: any) => (
          <p
            onClick={() => dispatch(fetchTheCategory(category.id))}
            key={category.id}
          >
            {category.name}
          </p>
        ))}
      </div>
      <div>
        {theCategory.map((category: any) => (
          <CatImage src={category.url} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
