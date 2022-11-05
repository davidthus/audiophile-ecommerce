import styled from "styled-components";
import { HeadingTwo, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  border-radius: 8px;
`;

export const Heading = styled.h2`
  ${HeadingTwo}
  color: #000;
`;

export const Emphasis = styled.em`
  ${HeadingTwo}
  color: #D87D4A;
  font-style: normal;
`;

export const Description = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 40%;
`;
