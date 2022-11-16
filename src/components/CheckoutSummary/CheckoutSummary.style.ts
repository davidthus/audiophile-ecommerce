import styled from "styled-components";
import { HeadingSix, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  border-radius: 8px;
  padding: 32px 33px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 350px;
  width: 100%;
  height: min-content;
`;

export const ItemListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Heading = styled.h6`
  color: #000;
  ${HeadingSix}
  width: 100%;
  text-align: left;
`;

export const PricesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const PricesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceText = styled.p`
  color: #000;
  ${Subtitle}
  text-transform: uppercase;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Price = styled.b`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #000;
`;

export const GrandTotal = styled.b`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #d87d4a;
`;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemName = styled.b`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
`;

export const ItemPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const ItemQuantity = styled.p`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
