import styled from "styled-components";
import { HeadingFive, HeadingThree } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  @media (max-width: 1240px) {
    gap: 56px;
  }
  @media (max-width: 690px){
    margin-bottom: 120px;
    gap: 40px;
  }
`;

export const Heading = styled.h3`
  ${HeadingThree}
  color: #000;
  text-align: center;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  @media (max-width: 1240px){
    gap: 11px;
  }
  @media (max-width: 690px){
   gap: 56px;
   grid-template: 1fr 1fr 1fr / 1fr; 
  }
`;

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ProductImage = styled.div`
  border-radius: 8px;
  margin-bottom: 40px;
  height: 318px;
  width: 100%;
  background-image: url(${({desktop}: {desktop: string}) => require("../../assets/" + desktop)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1240px){
    background-image: url(${({tablet}: {tablet: string}) => require("../../assets/" + tablet)});
  }
  @media (max-width: 690px){
    margin-bottom: 32px;
    height: 120px;
    background-size: cover;
    background-image: url(${({mobile}: {mobile: string}) => require("../../assets/" + mobile)});
  }
`;

export const ProductName = styled.h5`
  ${HeadingFive}
  color: #000;
  margin-bottom: 2rem;
`;
