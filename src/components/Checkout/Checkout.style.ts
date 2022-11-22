import styled from "styled-components";
import { HeadingSix, HeadingThree, Subtitle } from "../../shared/typography";

export const Container = styled.section`
  max-width: 540px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 48px;
  display: grid;
  z-index: 99;
  max-height: calc(100vh - (148px + 1.5rem));
  overflow-y: auto;
`;

export const PageOverlay = styled.div`
  background: #00000040;
  mix-blend-mode: normal;
  position: fixed;
  z-index: 50;
  right: 0;
  height: 100vh;
  left: 0;
  top: 85px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 59px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 33px;
`;

export const Heading = styled.h3`
  ${HeadingThree}
  color: #000;
  max-width: 284px;
  width: 100%;
  margin-bottom: 24px;
`;

export const SmallMessage = styled.p`
  ${Subtitle}
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 33px;
`;

export const MiddleSection = styled.section`
  margin-bottom: 46px;
  border-radius: 8px;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr 45%;
  min-height: 140px;
`;

export const RightSide = styled.article`
  background-color: #000;
  border-radius: 0px 8px 8px 0px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-left: 16%;
  padding-bottom: 41px;
  height: 100%;
`;

export const GrandTotalText = styled.p`
  ${Subtitle}
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-align: left;
  width: 100%;
`;

export const GrandTotalPrice = styled.p`
  color: #ffffff;
  ${HeadingSix}
  text-align: left;
  width: 100%;
`;

export const LeftSide = styled.section`
  padding: 24px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px 0px 0px 8px;
  height: fit-content;
`;

export const ShowMoreToggle = styled.p`
  padding-top: 12px;
  width: 100%;
  border-top: 1px solid #00000080;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: #000000;
  mix-blend-mode: normal;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
`;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
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

export const StackWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;
