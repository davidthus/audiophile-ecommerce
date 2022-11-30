import styled from "styled-components";
import { HeadingSix, Overline, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  position: absolute;
  top: 69px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 31px;
  background: #ffffff;
  border-radius: 8px;
  width: 377px;
  z-index: 99;

  @media (max-width: 690px) {
    top: 82px;
    width: calc(100vw - 48px);
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;

export const TotalQuantity = styled.h6`
  color: #000;
  ${HeadingSix}
`;

export const RemoveAll = styled.button`
  color: #000000;
  ${Subtitle}
  mix-blend-mode: normal;
  opacity: 0.5;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }
`;

export const ItemsStackWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;
  width: 100%;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
`;

export const TotalPrice = styled.h6`
  ${HeadingSix}
  color: #000;
`;

export const TotalText = styled.p`
  color: #000000;
  ${Subtitle}
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const StackItemWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  flex: 1;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #000;
`;

export const ProductPrice = styled.p`
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const ChangeQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 96px;
  height: 32px;
  justify-content: center;
  background-color: #f1f1f1;
  ${Overline}
  color: #000;
  gap: 12px;
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

export const Button = styled.button`
  ${Overline}
  padding: .8rem 2rem;
  width: 100%;
  background-color: #d87d4a;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #fbaf85;
  }
`;
