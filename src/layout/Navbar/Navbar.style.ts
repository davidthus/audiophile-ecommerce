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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
