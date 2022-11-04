import styled from "styled-components";
import { themeType } from "../types/themeTypes";
import { Overline } from "./typography";

export const Button1 = styled.button`
  ${Overline}
  padding: 1rem 2rem;
  background-color: ${({ theme }: themeType) => theme.orange};
  color: ${({ theme }: themeType) => theme.white};
  border: none;

  &:hover {
    background-color: ${({ theme }: themeType) => theme.lightOrange};
  }
`;
export const Button2 = styled.button`
  ${Overline}
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }: themeType) => theme.black};
  background-color: ${({ theme }: themeType) => theme.white};
  color: ${({ theme }: themeType) => theme.black};
  border: none;

  &:hover {
    background-color: ${({ theme }: themeType) => theme.black};
    color: ${({ theme }: themeType) => theme.white};
  }
`;
export const Button3 = styled.button`
  ${Overline}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${({ theme }: themeType) => theme.black};
  border: none;

  &:hover {
    color: ${({ theme }: themeType) => theme.orange};
  }
`;
