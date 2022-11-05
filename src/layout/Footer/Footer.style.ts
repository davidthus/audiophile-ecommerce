import styled from "styled-components";
import { Overline, Subtitle } from "../../shared/typography";

export const Container = styled.footer`
  width: 100%;
  background-color: #101010;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: clamp(36px, 2vw, 60px);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  display: grid;
  grid-template: 80px 60px 90px 80px / 1fr;
`;

export const NavLink = styled.p`
  ${Overline}
  color: #FFF;

  &:hover {
    transition: 0.4s;
    color: #d87d4a;
  }
`;

export const NavLinksWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const About = styled.p`
  ${Subtitle}
  color: #FFFFFF;

  mix-blend-mode: normal;
  opacity: 0.5;
  width: 100%;
  max-width: 540px;
`;

export const FooterBarWrapper = styled.div`
  grid-area: 1 / span 1 / 2 / span 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FooterBar = styled.div`
  width: 101px;
  height: 4px;
  background-color: #d87d4a;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AboutWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  height: 100%;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CopyrightText = styled.p`
  ${Subtitle}
  color: #FFF;
  opacity: 0.5;
  mix-blend-mode: normal;
  font-weight: 700;
`;

export const SocialsSvg = styled.svg`
  cursor: pointer;

  &:hover path {
    fill: #d87d4a;
  }
`;
