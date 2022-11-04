import { createGlobalStyle } from "styled-components";

export const theme = {
  black: "#000",
  white: "#FFF",
  grey: "#F1F1F1",
  lightGrey: "#FAFAFA",
  secondaryBlack: "#101010",
  lightOrange: "#FBAF85",
  orange: "#D87D4A",
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
