import styled from "styled-components";
import kropki from "../../Assets/kropki-dol-kompresja.svg"

export const BrzmiContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-image:url(${kropki});
    background-size:cover;
    font-family: 'Exo 2', 'Calibri', sans-serif;
    align-items: center;
`;
export const BrzmiHeader = styled.h2`
    margin-top:96px;
    margin-bottom:80px;
    font-size: 64px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #3f51b5;
    @media (max-width: 600px) {
        font-size: 40spx;
  }
`;
export const BrzmiButton = styled.button`
    font-size: 18px;
    border:none;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    border-radius: 4px;
    background-color: #3f51b5;
    padding-top:12px;
    padding-bottom:12px;
    padding-right:24px;
    padding-left:24px;
    max-width:303px;
    margin-bottom:92px;
`;