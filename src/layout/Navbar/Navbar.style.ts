import styled from "styled-components";
import { Overline } from "../../shared/typography";

export const Container = styled.header`
  position: relative;
  width: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 2rem;

  @media (max-width: 1240px) {
    padding-inline: 40px;
  }
  @media (max-width: 690px) {
    padding-inline: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid rgba(255 255 255 / 0.2);
  border-width: ${(props: { page: boolean }) => (props.page ? "1px" : 0)};
  padding: 2rem 0;

  @media (max-width: 1240px) {
    gap: 42px;
    justify-content: flex-start;
  }
  @media (max-width: 690px) {
    max-width: auto;
    padding-inline: 24px;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1240px) {
    display: flex;
  }
`;

export const NavLink = styled.p`
  ${Overline}
  color: ${(props: { active: boolean }) => (props.active ? "#D87D4A" : "#FFF")};
  transition: 0.4s;

  &:hover {
    color: #d87d4a;
  }
`;

export const NavLinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1240px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  @media (max-width: 1240px) {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 690px) {
    justify-content: center;
  }
`;

export const CartWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TotalSpan = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.6rem;
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #d87d4a;
  font-size: 0.8125rem;
  border-radius: 50%;
  color: #fff;
  top: -0.375rem;
  right: -0.75rem;
`;

export const PageOverlay = styled.div`
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
  position: absolute;
  z-index: 50;
  right: 0;
  height: 100vh;
  left: 0;
  top: 85px;
`;

export const MobileMenuWrapper = styled.section`
  background-color: #fff;
  height: 340px;
  width: 100%;
  position: absolute;
  display: flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  padding-top: 56px;
  padding-bottom: 67px;
  padding-inline: 35px;
  top: 86px;
  left: 0;
  right: 0;
  z-index: 150;
  @media (max-width: 690px) {
    padding-inline: 24px;
    padding-top: 32px;
    padding-bottom: 35px;
    height: fit-content;
  }
`;
