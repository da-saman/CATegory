import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allCategoriesSelector } from "../../store/selectors";
import { fetchCategories } from "../../store/actions";
import { SideBar, NavItems } from "./index.style";
import {CategoryType} from "../../types"
const CategoryLinks = () => {
  const allCategories = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <SideBar>
      {allCategories.map((category: CategoryType) => (
        <NavItems key={category.id}>
          <Link to={`/cats/${category.id}`}>{category.name}</Link>
        </NavItems>
      ))}
    </SideBar>
  );
};

export default CategoryLinks;
