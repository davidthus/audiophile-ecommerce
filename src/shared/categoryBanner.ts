import styled from "styled-components";
import { HeadingFour, HeadingTwo } from "./typography";

export const CategoryBanner = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding-top: 97px;
  padding-bottom: 97px;

  @media (max-width: 1240px) {
    padding-top: 105px;
  }
  @media (max-width: 690px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const BannerHeading = styled.h1`
  ${HeadingTwo};
  color: #fff;

  @media (max-width: 690px) {
    ${HeadingFour};
  }
`;
