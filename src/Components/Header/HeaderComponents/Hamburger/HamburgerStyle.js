import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HamburgerMenuElement = styled(NavLink).attrs()`
      font-family: 'Exo 2', 'Calibri', sans-serif;
      font-size: 24px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  text-decoration:none;
  text-decoration: none;
`;
export const HamburgerMenu = styled.div`
    position:absolute;
    padding-top:32px;
    padding-left:32px;
`;
export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;
