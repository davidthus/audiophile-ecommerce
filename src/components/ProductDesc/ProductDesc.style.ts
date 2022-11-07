import styled from "styled-components";
import { HeadingThree, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 125px;
  justify-content: space-between;
`;

export const FeaturesWrapper = styled.article`
  max-width: 57%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemsContainer = styled.article`
  max-width: 31.5%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h3`
  ${HeadingThree}
  margin-bottom: 32px;
  color: #000;
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
`;

export const StackRow = styled.li`
  display: flex;
  gap: 24px;
`;

export const ItemQuantity = styled.b`
  ${Subtitle}
  color: #D87D4A;
`;
