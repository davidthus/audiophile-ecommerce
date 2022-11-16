import styled from "styled-components";

export const Container = styled.section`
  max-width: 540px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const PageOverlay = styled.div`
  background: #00000040;
  mix-blend-mode: normal;
  position: fixed;
  z-index: 50;
  right: 0;
  height: 100vh;
  left: 0;
  top: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-bottom: 33px;
`;
