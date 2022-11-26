import styled from "styled-components";
import heroDesktopImgSrc from "../../assets/home/desktop/image-hero.jpg";
import heroTabletImgSrc from "../../assets/home/tablet/image-header.jpg";
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
    background: url(${heroDesktopImgSrc}) center top 3rem / contain no-repeat;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1240px) {
    &::after {
      background: url(${heroTabletImgSrc}) center top 3rem / contain no-repeat;
    }
  }

  @media (max-width: 680px) {
    &::after {
      background-size: 586px;
      mix-blend-mode: normal;
      background-position: center top 6rem;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1240px) {
    justify-content: center;
  }
`;

export const ArticleWrapper = styled.article`
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  z-index: 30;

  @media (max-width: 1240px) {
    max-width: 396px;
    align-items: center;
  }
  @media (max-width: 690px) {
    max-width: 328px;
    gap: 0;
  }
`;

export const MainTitle = styled.h1`
  ${HeadingOne}
  color: #FFFFFF;
  @media (max-width: 1240px) {
    text-align: center;
  }
  @media (max-width: 690px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 24px;
  }
`;

export const SecondTitle = styled.h2`
  ${Body}
  color: #FFFFFF;
  mix-blend-mode: normal;
  @media (max-width: 1240px) {
    text-align: center;
  }
  opacity: 0.5;
`;

export const Description = styled.p`
  ${Subtitle}
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;
  @media (max-width: 1240px) {
    max-width: 349px;
    text-align: center;
  }
  @media (max-width: 690px) {
    margin-bottom: 28px;
  }
`;
