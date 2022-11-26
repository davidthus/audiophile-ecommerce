import styled from "styled-components";
import { HeadingSix } from "../../shared/typography";

export const Container = styled.nav`
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template: 1fr / 1fr 1fr 1fr;
  height: ${({ sm }: { sm: boolean }) => (sm ? "216px" : "284px")};

  @media (max-width: 1240px) {
    gap: 10px;
  }
`;

export const MobileContainer = styled.nav`
  gap: 16px;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
  height: 683px;
  width: 100%;
`;

export const LinkContainer = styled.div`
  align-self: end;
  border-radius: 8px;
  height: ${({ sm }: { sm: boolean }) => (sm ? "165px" : "204px")};
  background-color: #f1f1f1;
  display: grid;
  grid-template: ${({ sm }: { sm: boolean }) =>
    sm ? "98px 20px 35px / 100%" : "115px 30px 35px / 100%"};
  padding-bottom: ${({ sm }: { sm: boolean }) => (sm ? "22px" : "2rem")};
`;

export const MobileLinkContainer = styled.div`
  height: 217px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const MobileWrapper = styled.div`
  display: grid;
  height: 165px;
  padding-bottom: 22px;
  background-color: #f1f1f1;
  border-radius: 8px;
  grid-template: 121px 0px 27px / 1fr;
  width: 100%;
`;

export const LinkHeading = styled.h6`
  ${HeadingSix}
  color: #000;
  text-align: center;
  align-self: start;
`;

export const MobileLinkHeading = styled.h6`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  color: #000;
  text-align: center;
  align-self: end;
  justify-self: center;
`;

export const LinkImg = styled.img`
  height: 180px;
  width: auto;
  align-self: end;
  justify-self: center;
`;
