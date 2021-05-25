import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catImagesSelector } from "../../store/selectors";
import { CatImage } from "./index.style";
import { useParams } from "react-router-dom";
import { fetchCatImages } from "../../store/actions";
import { Cat } from "../../types/category";

const Cats = () => {
  const catImages = useSelector(catImagesSelector);
  let params: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id) {
      dispatch(fetchCatImages(params.id));
    }
  }, [dispatch, params.id]);

  return (
    <div>
      {catImages.map((catImage: Cat) => (
        <CatImage
          key={catImage.id}
          src={catImage.url}
          width={catImage.width}
          height={catImage.height}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Cats;
