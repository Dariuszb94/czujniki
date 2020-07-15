import styled from "styled-components";

export const ContainerProduct = styled.div`
    display:flex;
    flex-direction:row;
    font-family: 'Exo 2', 'Calibri', sans-serif;
    background-color: #f6f6f6;
`;
export const ProductImage = styled.img`
    width:50%;
`;
export const ProductDescription = styled.div`
    width:50%;
    
    padding-top:64px;
`;
export const ProductHeader = styled.h2`
    font-size: 30px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #3f51b5;
    margin-bottom:32px;
    padding-left:48px;
    padding-right:176px;
`;
export const ProductContent = styled.p`
    padding-left:48px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    color: #1f2961;
    padding-right:176px;
`;
export const ProductHeaderRev = styled.h2`
    font-size: 30px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #3f51b5;
    margin-bottom:32px;
    padding-left:176px;
    padding-right:48px;
`;
export const ProductContentRev = styled.p`
    padding-left:176px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    color: #1f2961;
    padding-right:48px;
`;