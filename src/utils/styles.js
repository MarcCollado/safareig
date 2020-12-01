import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #333333;
    --gray: #F0F5F7;
    --yellow: #FFBD01;
    --blue: #32C5FF;
    --darkBlue: #002CFC;
    --mobile: 576px;
    --tablet: 768px;
    --desktop: 1080px;
  }

  html {
    width: clamp(320px, 100%, 1440px);
    font-size: 16px;
    margin: 0rem auto;
    background-color: #fafbfc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    // reset default margins
    margin: 0rem;
    font-family: inter, sans-serif;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);
  }

  h1 {
    font-size: 1.75rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1080px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1080px) {
      font-size: 20px;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1080px) {
      font-size: 20px;
    }
  }

  p {
    font-family: inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);

    @media (min-width: 1080px) {
      font-size: 1.25rem;
    }
  }

  a {
    font-family: inter, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);
    text-decoration: none;

    @media (min-width: 1080px) {
      font-size: 1.25rem;
    }
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: pixelated;
  } */
`;

export default GlobalStyles;
