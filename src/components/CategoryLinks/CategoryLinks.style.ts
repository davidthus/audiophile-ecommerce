import styled from "styled-components";
import { HeadingSix } from "../../shared/typography";

export const Container = styled.nav`
  display: grid;
  width: 100%;
  gap: clamp(10px, 5%, 30px);
  grid-template: 1fr / 1fr 1fr 1fr;
  height: ${({ sm }: { sm: boolean }) => (sm ? "216px" : "284px")};
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

export const LinkHeading = styled.h6`
  ${HeadingSix}
  color: #000;
  text-align: center;
  align-self: start;
`;

export const LinkImg = styled.img`
  height: 180px;
  width: auto;
  align-self: end;
  justify-self: center;
`;
