import styled from "styled-components";


export const CatWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface CatImgProp {
  width: number;
  height: number;
}
export const CatImage = styled.img<CatImgProp>`
  width:  ${({ height, width }) => (width/height) * 200}px;
  height:200px;
  margin: 10px;
`;
