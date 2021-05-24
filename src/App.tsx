import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  allCategoriesSelector,
  theCategorySelector,
} from "../src/store/selectors";
import { fetchCategories, fetchTheCategory } from "../src/store/actions";

function App() {
  const allCategories = useSelector(allCategoriesSelector);
  const theCategory = useSelector(theCategorySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="App">
      {allCategories.map((category: any) => (
        <p
          onClick={() => dispatch(fetchTheCategory(category.id))}
          key={category.id}
        >
          {category.name}
        </p>
      ))}

      {theCategory.map((category: any) => (
        <img src={category.url}></img>
      ))}
    </div>
  );
}

export default App;
