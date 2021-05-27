import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 98vh;
  min-width: 80vw;
  margin-left: 160px;
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
  background-color: #818181
`;

export const LoadMoreButton = styled.button`
  height: 40px;
  background-color: #007af5;
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  bottom:0
`;
