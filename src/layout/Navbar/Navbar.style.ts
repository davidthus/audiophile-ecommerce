import styled from "styled-components";
import { Overline } from "../../shared/typography";

export const Container = styled.header`
  width: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 2rem;
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
  position: fixed;
  z-index: 50;
  right: 0;
  height: 100vh;
  left: 0;
  top: 85px;
`;
