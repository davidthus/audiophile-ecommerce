import styled from "styled-components";
import { HeadingFive, HeadingThree } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
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
`;

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ProductImage = styled.img`
  border-radius: 8px;
  margin-bottom: 40px;
  height: 318px;
  width: auto;
`;

export const ProductName = styled.h5`
  ${HeadingFive}
  color: #000;
  margin-bottom: 2rem;
`;
