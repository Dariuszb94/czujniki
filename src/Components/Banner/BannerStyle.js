import styled from "styled-components";
import kropki from "../../Assets/kropki-baner-kompresja.svg"

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:12.2%;
    background-color:#3f51b5;
    background-size:cover;
    background-image: url(${kropki});
    font-family: 'Exo 2', 'Calibri', sans-serif;
    @media (max-width: 860px) {
        padding-left:4%;
  }


`;
export const Header = styled.div`
    margin-top:152px;
    margin-bottom:8px;
    font-size: 64px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 1000px) {
    font-size: 40px;
    margin-top:140px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
    margin-top:136px;
  }
`;
export const Subheader = styled.div`
    margin-bottom:48px;
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom:40px;
  }
`;
export const ContactButton = styled.button`
    padding-top:12px;
    border:0;
    padding-bottom:12px;
    width:304px;
    display:flex;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #1f2961;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #ffffff;
    margin-bottom:168px;
    font-family:inherit;
    @media (max-width: 1000px) {
        margin-bottom:124px;
  }
  @media (max-width: 600px) {
    margin-bottom:96px;
  }
`;
