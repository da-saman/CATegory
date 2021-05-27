import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catImagesSelector } from "../../store/selectors";
import { MainWrapper, CatWrapper, CatImage, LoadMoreButton } from "./index.style";
import { useParams } from "react-router-dom";
import { fetchCatImages } from "../../store/actions";
import { CatImageType } from "../../types/category";

const Cats = () => {
  const catImages = useSelector(catImagesSelector);
  let params: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatImages(params.id, false));
  }, [dispatch, params.id]);

  return (
    <MainWrapper>
      <CatWrapper>
        {catImages.map((catImage: CatImageType) => (
          <CatImage
            key={catImage.id}
            src={catImage.url}
            width={catImage.width}
            height={catImage.height}
            loading="lazy"
          />
        ))}
      </CatWrapper>

      <LoadMoreButton onClick={() => dispatch(fetchCatImages(params.id, true))}>
        Load More
      </LoadMoreButton>
    </MainWrapper>
  );
};

export default Cats;
