import styled from "styled-components";
import { Body, HeadingTwo, Subtitle } from "./typography";

export const ArticleContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    gap: 52px;
    justify-content: flex-start;
    align-items: center;
    max-width: 689px;
    width: 100%;

    &:nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`;

export const Article = styled.article`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1240px) {
    max-width: unset;
  }
`;

export const ArticleHeading = styled.h3`
  ${HeadingTwo}
  margin-bottom: 32px;
  color: #000;
  @media (max-width: 1240px) {
    text-align: center;
    width: 100%;
  }
`;

export const Description = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: ${({ product }: { product: boolean }) =>
    product ? "32px" : "40px"};

  @media (max-width: 1240px) {
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const ArticleImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 8px;
  @media (max-width: 1240px) {
    width: 100%;
  }
`;

export const Subheading = styled.h4`
  color: #d87d4a;
  ${Body}
  margin-bottom: 16px;
  @media (max-width: 1240px) {
    text-align: center;
  }
`;
