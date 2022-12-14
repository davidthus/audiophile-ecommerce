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

  @media (max-width: 1240px) {
    padding-top: 96px;
    padding-bottom: 96px;
    padding-inline: 39px;
    gap: 96px;
  }

  @media (max-width: 690px) {
    padding-top: 40px;
    padding-bottom: 120px;
    padding-inline: 24px;
    gap: 120px;
  }
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
  @media (max-width: 1240px) {
    padding-inline: 40px;
    padding-top: 120px;
    padding-bottom: 120px;
    gap: 120px;
  }
  @media (max-width: 690px) {
    padding-top: 64px;
    padding-inline: 24px;
  }
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
  @media (max-width: 1240px) {
    padding-inline: 39px;
    padding-top: 33px;
    padding-bottom: 120px;
    gap: 120px;
  }
  @media (max-width: 690px) {
    padding-inline: 24px;
    padding-top: 16px;
    gap: 0;
  }
`;

export const Seperator = styled.div`
  width: 100%;
  margin-bottom: 120px;
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
  @media (max-width: 1240px) {
    padding-top: 48px;
    padding-bottom: 116px;
    padding-inline: 39px;
    gap: 24px;
  }
  @media (max-width: 690px) {
    padding-top: 16px;
    padding-bottom: 97px;
    padding-inline: 24px;
  }
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
