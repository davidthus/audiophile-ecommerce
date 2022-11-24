import styled from "styled-components";
import earphonesDesktopSrc from "../../assets/home/desktop/image-earphones-yx1.jpg";
import speaker7DesktopSrc from "../../assets/home/desktop/image-speaker-zx7.jpg";
import speaker9DesktopSrc from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../../assets/home/desktop/pattern-circles.svg";
import earphonesTabletSrc from "../../assets/home/tablet/image-earphones-yx1.jpg";
import speaker7TabletSrc from "../../assets/home/tablet/image-speaker-zx7.jpg";
import speaker9TabletSrc from "../../assets/home/tablet/image-speaker-zx9.png";
import {
  HeadingFour,
  HeadingOne,
  Overline,
  Subtitle,
} from "../../shared/typography";

export const Container = styled.section`
  display: grid;
  width: 100%;
  grid-template: 720px 320px 320px / 1fr 1fr;
  margin-top: 168px;
  column-gap: 30px;
  row-gap: 48px;
  margin-bottom: 200px;

  @media (max-width: 1240px) {
    margin-bottom: 0;
    column-gap: 11px;
    row-gap: 32px;
    margin-top: 0;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3%;
  grid-area: 1 / 1 / span 1 / -1;
  background-color: #d87d4a;
  background-image: url(${speaker9DesktopSrc}), url(${circlePattern});
  background-repeat: no-repeat;
  background-size: 35%, 90%;
  background-position: bottom -1rem left 20%, left -10rem bottom -28rem;
  border-radius: 8px;

  @media (max-width: 1240px) {
    background-image: url(${speaker9TabletSrc}), url(${circlePattern});
    background-size: 197px 237px, 944px 944px;
    background-position: top 52px center, top -21rem center;
    flex-direction: column;
    padding-bottom: 64px;
    padding-right: 0;
  }
`;

export const TopSectionArticle = styled.article`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1240px) {
    align-items: center;
  }
`;

export const MiddleSectionArticle = styled.section`
  border-radius: 8px;
  grid-area: 2 / 1 / span 1 / -1;
  display: flex;
  flex-direction: column;
  padding-left: 9%;
  justify-content: center;
  background-image: url(${speaker7DesktopSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;

  @media (max-width: 1240px) {
    background-image: url(${speaker7TabletSrc});
    background-position: left bottom -2rem;
    background-size: 761px;
  }
`;

export const SecondaryHeading = styled.h3`
  ${HeadingFour}
  color: #000;
  margin-bottom: 32px;
`;

export const Heading = styled.h2`
  ${HeadingOne}
  color: #FFF;
  margin-bottom: 24px;
  @media (max-width: 1240px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  ${Subtitle}
  color: #fff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-bottom: 40px;
  @media (max-width: 1240px) {
    text-align: center;
  }
`;

export const CTA = styled.button`
  ${Overline}
  padding: 15px 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  width: fit-content;

  &:hover {
    background-color: #4c4c4c;
    color: #fff;
  }
`;

export const BottomLeft = styled.div`
  grid-area: -2 / 1 / -1 / span 1;
  border-radius: 8px;
  background-image: url(${earphonesDesktopSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 1240px) {
    background-image: url(${earphonesTabletSrc});
  }
`;

export const BottomRight = styled.article`
  border-radius: 8px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 17%;

  @media (max-width: 1240px) {
    padding-left: 12%;
  }
`;
