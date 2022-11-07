import styled from "styled-components";
import { HeadingSix, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 56px;
`;

export const BackLink = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: pointer;
`;

export const Price = styled.h6`
  ${HeadingSix}
  color: #000;
  margin-bottom: 47px;
`;
