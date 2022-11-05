import styled from "styled-components";
import speaker7Src from "../../assets/home/desktop/image-speaker-zx7.jpg";
import speaker9Src from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../../assets/home/desktop/pattern-circles.svg";
import {
  HeadingFour,
  HeadingOne,
  Overline,
  Subtitle,
} from "../../shared/typography";

export const Container = styled.section`
  display: grid;
  width: 100%;
  grid-template: 560px 320px 320px / 1fr 1fr;
  margin-top: 168px;
  column-gap: 30px;
  row-gap: 48px;
  margin-bottom: 200px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3%;
  grid-area: 1 / 1 / span 1 / -1;
  background-color: #d87d4a;
  background-image: url(${speaker9Src}), url(${circlePattern});
  background-repeat: no-repeat;
  background-size: 35%, 90%;
  background-position: bottom -1rem left 20%, left -10rem bottom -28rem;
  border-radius: 8px;
`;

export const TopSectionArticle = styled.article`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MiddleSectionArticle = styled.section`
  border-radius: 8px;
  grid-area: 2 / 1 / span 1 / -1;
  display: flex;
  flex-direction: column;
  padding-left: 9%;
  justify-content: center;
  background-image: url(${speaker7Src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
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
`;

export const Description = styled.p`
  ${Subtitle}
  color: #fff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-bottom: 40px;
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

export const BottomLeft = styled.img`
  grid-area: -2 / 1 / -1 / span 1;
  border-radius: 8px;
`;

export const BottomRight = styled.article`
  border-radius: 8px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 17%;
`;
