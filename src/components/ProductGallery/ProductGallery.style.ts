import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 592px;
  display: grid;
  column-gap: 2%;
  row-gap: 32px;
  grid-template: 1fr 1fr / 40% 1fr;
  @media (max-width: 1240px){
    row-gap: 20px;
    column-gap: 18px;
    grid-template: 1fr 1fr / 1fr 57%;
    height: 368px;
  }
  @media (max-width: 690px){
    grid-template: 174px 174px 368px / 1fr;
    margin-bottom: 120px;
    height: auto;
  }
`;

interface Props {
  desktop: string;
  tablet: string;
  mobile: string;
}

export const TopLeft = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;
  border-radius: 8px;
  background-image: url(${({ desktop }: Props) => require("../../assets/" + desktop)});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  @media (max-width: 1240px){
    background-position: center;
    background-image: url(${({ tablet }: Props) => require("../../assets/" + tablet)});
  }
  @media (max-width: 690px){
    background-image: url(${({ mobile }: Props) => require("../../assets/" + mobile)});
  }
  `;

export const BottomLeft = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  border-radius: 8px;
  background-image: url(${({ desktop }: Props) => require("../../assets/" + desktop)});
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  @media (max-width: 1240px){
    background-position: center;
    background-image: url(${({ tablet }: Props) => require("../../assets/" + tablet)});
  }
  @media (max-width: 690px){
    background-image: url(${({ mobile }: Props) => require("../../assets/" + mobile)});
  }
  `;

export const Right = styled.div`
  grid-area: 1 / 2 / -1 / -1;
  border-radius: 8px;
  background-image: url(${({ desktop }: Props) => require("../../assets/" + desktop)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1240px){
    background-image: url(${({ tablet }: Props) => require("../../assets/" + tablet)});
  }
  @media (max-width: 690px){
    grid-area: 3 / 1 / -1 / span 1;
    background-image: url(${({ mobile }: Props) => require("../../assets/" + mobile)});
  }
`;
