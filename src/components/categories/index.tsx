import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allCategoriesSelector } from "../../store/selectors";
import { fetchCategories } from "../../store/actions";

const Categories = () => {
  const allCategories = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ul>
        {allCategories.map((category: any) => (
          // <p
          //   onClick={() => dispatch(fetchTheCategory(category.id))}
          //   key={category.id}
          // >
          //   {category.name}
          // </p>
          <li key={category.id}>
            <Link to={`/cats/${category.id}`}>{category.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Categories;
