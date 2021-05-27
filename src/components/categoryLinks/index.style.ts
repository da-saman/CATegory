import styled from "styled-components";

export const SideBar = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const NavItems = styled.div`
  padding: 6px 8px 6px 10px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  a {
    color: #818181;
    text-decoration: none;
  }
`;
