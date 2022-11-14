import styled from "styled-components";
import { Subtitle } from "./typography";

export const PageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #fafafa;
`;

export const HomeContentWrapper = styled.section`
  display: flex;
  max-width: 1110px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;
  padding-bottom: 200px;
`;

export const ContentWrapper = styled.section`
  display: flex;
  max-width: 1110px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding-top: 160px;
  padding-bottom: 160px;
`;

export const ProductContentWrapper = styled.section`
  display: flex;
  max-width: 1110px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding-top: 79px;
  padding-bottom: 160px;
`;

export const CheckoutWrapper = styled.section`
  display: flex;
  max-width: 1110px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;
  padding-top: 79px;
  padding-bottom: 141px;
`;

export const BackLink = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #d87d4a;
  }
`;
