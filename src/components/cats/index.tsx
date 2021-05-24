import React from "react";
import { useSelector } from "react-redux";
import { theCategorySelector } from "../../store/selectors";
import { CatImage } from "./index.style";

const Cats = () => {
  const theCategory = useSelector(theCategorySelector);

  return (
    <div>
      {theCategory.map((category: any) => (
        <CatImage src={category.url} />
      ))}
    </div>
  );
};

export default Cats;
