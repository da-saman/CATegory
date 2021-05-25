import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { theCategorySelector } from "../../store/selectors";
import { CatImage } from "./index.style";
import { useParams } from "react-router-dom";
import { fetchTheCategory } from "../../store/actions";
import { Cat } from '../../types/category'

const Cats = () => {
  const theCategory = useSelector(theCategorySelector);
  let params: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id) {
      dispatch(fetchTheCategory(params.id));
    }
  }, [dispatch,params.id]);

  return (
    <div>
      {theCategory.map((category: Cat) => (
        <CatImage key={category.id} src={category.url} />
      ))}
    </div>
  );
};

export default Cats;
