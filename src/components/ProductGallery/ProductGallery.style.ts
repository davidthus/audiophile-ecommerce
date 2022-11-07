import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 592px;
  display: grid;
  column-gap: 2%;
  row-gap: 32px;
  grid-template: 1fr 1fr / 40% 1fr;
`;

interface Props {
  background: string;
}

export const TopLeft = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;
  border-radius: 8px;
  background-image: url(${({ background }: Props) => require("../../assets/" + background)});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
`;

export const BottomLeft = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  border-radius: 8px;
  background-image: url(${({ background }: Props) => require("../../assets/" + background)});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
`;

export const Right = styled.div`
  grid-area: 1 / 2 / -1 / -1;
  border-radius: 8px;
  background-image: url(${({ background }: Props) => require("../../assets/" + background)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
