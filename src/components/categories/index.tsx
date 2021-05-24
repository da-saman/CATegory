import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { allCategoriesSelector } from "../../store/selectors";
import { fetchCategories, fetchTheCategory } from "../../store/actions";

const Categories = () => {
  const allCategories = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ul>
      <li>
        {allCategories.map((category: any) => (
          // <p
          //   onClick={() => dispatch(fetchTheCategory(category.id))}
          //   key={category.id}
          // >
          //   {category.name}
          // </p>
          <Link to="/cats">Home</Link>
        ))}
      </li>
    </ul>
  );
};

export default Categories;
