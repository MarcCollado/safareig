import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #333333;
    --gray: #F0F5F7;
    --yellow: #FFBD01;
    --blue: #32C5FF;
    --darkBlue: #002CFC;
  }

  html {
    /* Display & Box Model */
    min-width: 320px;
    max-width: 1440px;
    /* Text */
    font-size: 16px;
  }

  body {
    font-size: 1rem;
  }

  @media (min-width: 576px) {
  html {
    /* Text */
    font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    html {
      /* Text */
      font-size: 17px;
    }
  }

  @media (min-width: 1024px) {
    html {
      /* Text */
      font-size: 17px;
    }
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: pixelated;
  } */
`;

export default GlobalStyles;
