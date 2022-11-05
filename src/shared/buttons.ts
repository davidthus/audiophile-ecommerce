import styled from "styled-components";
import { Overline } from "./typography";

export const Button1 = styled.button`
  ${Overline}
  padding: .8rem 2rem;
  background-color: #d87d4a;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #fbaf85;
  }
`;
export const Button2 = styled.button`
  ${Overline}
  padding: 1rem 2rem;
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const Button3 = styled.button`
  ${Overline}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #d87d4a;
  }
`;
