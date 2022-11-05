import styled from "styled-components";
import heroImgSrc from "../../assets/home/desktop/image-hero.jpg";

import { Body, HeadingOne, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -86px;
    right: 0;
    background: url(${heroImgSrc}) center top 3rem / contain no-repeat;
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleWrapper = styled.article`
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  z-index: 99;
`;

export const MainTitle = styled.h1`
  ${HeadingOne}
  color: #FFFFFF;
`;

export const SecondTitle = styled.h2`
  ${Body}
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Description = styled.p`
  ${Subtitle}
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
