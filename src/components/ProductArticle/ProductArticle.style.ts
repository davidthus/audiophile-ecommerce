import styled from "styled-components";
import { HeadingSix, Overline, Subtitle } from "../../shared/typography";

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

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ChangeQuantityWrapper = styled.div`
  display: flex;
  background-color: #f1f1f1;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 120px;
  height: 48px;
  ${Overline}
  color: #000;
`;

export const IconWrapper = styled.button`
  color: #000000;
  ${Overline}
  mix-blend-mode: normal;
  opacity: 0.25;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }
`;
