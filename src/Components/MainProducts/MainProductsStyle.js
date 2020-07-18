import styled from "styled-components";

export const ContainerProduct = styled.div`
    display:flex;
    flex-direction:row;
    font-family: 'Exo 2', 'Calibri', sans-serif;
    background-color: #f6f6f6;
    @media (max-width: 600px) {
        flex-direction:column;
        padding-top:40px;
  }
    
`;
export const ContainerProductRev = styled.div`
    display:flex;
    flex-direction:row;
    font-family: 'Exo 2', 'Calibri', sans-serif;
    background-color: #f6f6f6;
    @media (max-width: 600px) {
        flex-direction:column-reverse;
        padding-top:40px;
  }
    
`;
export const ProductImage = styled.img`
    width:50%;
    @media (max-width: 600px) {
        width:100%;
  }
`;
export const ProductDescription = styled.div`
    width:50%;
    padding-bottom:40px;
    padding-top:64px;
    @media (max-width: 1280px) {
    padding-bottom:24px;
    padding-top:40px;
  }
  @media (max-width: 680px) {
    padding-bottom:12px;
    padding-top:16px;
  }
  @media (max-width: 600px) {
        width:100%;
  }
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
    @media (max-width: 1280px) {
    font-size: 26px;
    margin-bottom:24px;
    padding-left:32px;
    padding-right:144px;
  }
  @media (max-width: 1080px) {
    font-size: 20px;
    margin-bottom:24px;
    padding-left:32px;
    padding-right:80px;
  }
  @media (max-width: 860px) {
    font-size: 16px;
    margin-bottom:16px;
    padding-left:24px;
    padding-right:40px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
    margin-bottom:12px;
    padding-left:12px;
    padding-right:16px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }

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
    @media (max-width: 1280px) {
    font-size: 16px;
    padding-left:32px;
    padding-right:144px;
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    padding-left:32px;
    padding-right:80px;
  }
  @media (max-width: 860px) {
    font-size: 12px;
    padding-left:24px;
    padding-right:40px;
  }
  @media (max-width: 680px) {
    font-size: 12px;
    padding-left:12px;
    padding-right:16px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
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
    @media (max-width: 1280px) {
    font-size: 26px;
    margin-bottom:24px;
    padding-left:144px;
    padding-right:32px;
  }
  @media (max-width: 1080px) {
    font-size: 20px;
    margin-bottom:24px;
    padding-left:80px;
    padding-right:32px;
  }
  @media (max-width: 860px) {
    font-size: 16px;
    margin-bottom:16px;
    padding-left:40px;
    padding-right:24px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
    margin-bottom:12px;
    padding-left:16px;
    padding-right:12px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
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
    @media (max-width: 1280px) {
    font-size: 16px;
    padding-left:144px;
    padding-right:32px;
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    padding-left:80px;
    padding-right:32px;
  }
  @media (max-width: 860px) {
    font-size: 12px;
    padding-left:40px;
    padding-right:24px;
  }
  @media (max-width: 680px) {
    font-size: 12px;
    padding-left:16px;
    padding-right:12px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
    
`;