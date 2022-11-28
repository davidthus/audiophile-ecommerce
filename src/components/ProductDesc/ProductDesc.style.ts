import styled from "styled-components";
import { HeadingThree, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 125px;
  justify-content: space-between;

  @media (max-width: 1240px) {
    flex-direction: column;
    gap: 120px;
  }
  @media (max-width: 690px) {
    gap: 88px;
  }
`;

export const FeaturesWrapper = styled.article`
  max-width: 57%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    max-width: unset;
  }
`;

export const ItemsContainer = styled.article`
  max-width: 31.5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1240px) {
    max-width: unset;
    flex-direction: row;
    gap: 11px;
  }
  @media (max-width: 690px) {
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Heading = styled.h3`
  ${HeadingThree}
  margin-bottom: 32px;
  color: #000;
  @media (max-width: 1240px) {
    width: 339px;
  }
  @media (max-width: 690px) {
    width: auto;
  }
`;

export const Text = styled.p`
  color: #000000;
  ${Subtitle}
  mix-blend-mode: normal;
  opacity: 0.5;
  white-space: pre-wrap;
`;

export const StackWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 690px) {
    margin-bottom: 88px;
  }
`;

export const StackRow = styled.li`
  display: flex;
  gap: 24px;
`;

export const ItemQuantity = styled.b`
  ${Subtitle}
  color: #D87D4A;
`;
