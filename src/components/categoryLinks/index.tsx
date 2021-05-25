import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allCategoriesSelector } from "../../store/selectors";
import { fetchCategories } from "../../store/actions";

const CategoryLinks = () => {
  const allCategories = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ul>
        {allCategories.map((category: any) => (
          <li key={category.id}>
            <Link to={`/cats/${category.id}`}>{category.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default CategoryLinks;
