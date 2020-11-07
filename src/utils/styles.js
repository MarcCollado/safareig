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
    --desktop: 1024px;
  }

  html {
    width: clamp(320px, 100%, 1440px);
    font-size: 16px;
    margin: 0rem auto;
    background-color: #fafbfc;
  }

  h1, h2, h3 {
    font-family: inter, sans-serif;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);
  }

  h1 {
    font-size: 2rem;

    @media (min-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.25rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }

  h3 {
    font-size: 1rem;

    @media (min-width: 1024px) {
      font-size: 18px;
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

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: pixelated;
  } */
`;

export default GlobalStyles;
