import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface CatImgProp {
  width: number;
  height: number;
}
export const CatImage = styled.img<CatImgProp>`
  width: ${({ height, width }) => (width / height) * 25}vh;
  height: 25vh;
  margin: 10px;
`;

export const LoadMoreButton = styled.button`
  height: 30px;
  background-color: blue;
  color: white;
  font-size: 18px;
`;
