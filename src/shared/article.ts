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
`;

export const Article = styled.article`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ArticleHeading = styled.h3`
  ${HeadingTwo}
  margin-bottom: 32px;
  color: #000;
`;

export const Description = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 40px;
`;

export const ArticleImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 8px;
`;

export const Subheading = styled.h4`
  color: #d87d4a;
  ${Body}
  margin-bottom: 16px;
`;
