import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Search = styled.div`
    position: absolute;
    top: 168px;
    z-index: 450;
    left: 24px;
    width: 400px;
    background-color: white;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 300px;
    }
    @media (max-width: 800px) {
      top: 396px;
    }
}
`;
export const Container = styled.div`
position:relative;
`;
export const ContainerDane = styled.div`
  background-color: #3f51b5;
  padding-top: 24px;
  padding-left: 24px;
`;
export const Dane = styled.div`
  color: white;
  font-size: 20px;
  color: #feffff;
  font-family: "Exo 2", "Calibri", sans-serif;
  z-index:600;
`;
export const Menu = styled.ul`
display: flex;
    position: absolute;
    top: 110px;
    z-index: 450;
    left:24px;


`;
export const MenuElement = styled.li`
     &:nth-child(2) a{
      background-color: #3f51b5;
  color:white;
  border-radius:2px;
  margin-right: 4px;
  margin-left: 4px;
      }
`;
export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  padding:8px 16px 8px 16px;
  text-decoration: none;
  color:#1f2961;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  font-family: 'Exo 2','Calibri',sans-serif;
  border-radius: 2px;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14);
    background-color: white;
;
`;
export const DaneContent = styled.div`
  display:flex;
`;
export const Dana = styled.div`
  height:32px;
`;

export const DanePolowa = styled.div`
display:flex;
flex-direction:column;
margin-right:36px;
`;