import styled from "styled-components";
import bestGearTabletSrc from "../../assets/shared/tablet/image-best-gear.jpg";
import { HeadingTwo, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    gap: 63px;
    justify-content: flex-start;
  }
`;

export const DesktopImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 8px;
`;

export const TabletImage = styled.div`
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  background-image: url(${bestGearTabletSrc});
  width: 100%;
  height: 300px;
`;

export const Heading = styled.h2`
  ${HeadingTwo}
  color: #000;

  @media (max-width: 1240px) {
    text-align: center;
  }
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
  @media (max-width: 1240px) {
    text-align: center;
  }
`;

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 40%;

  @media (max-width: 1240px) {
    align-items: center;
    width: 100%;
    max-width: 573px;
  }
`;
