import styled from "styled-components";
import { Overline } from "../../shared/typography";
import { themeObject, themeType } from "../../types/themeTypes";

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }: themeType) => theme.secondaryBlack};
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
  border-bottom: solid ${({ theme }: themeType) => theme.grey};
  border-width: ${(props: { theme: themeObject; page: boolean }) =>
    props.page ? "1px" : 0};
  padding: 2rem 0;
`;

export const NavLink = styled.p`
  ${Overline}
  color: ${(props: { theme: themeObject; active: boolean }) =>
    props.active ? props.theme.orange : props.theme.white};
  transition: 0.4s;

  &:hover {
    color: ${({ theme }: themeType) => theme.orange};
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
