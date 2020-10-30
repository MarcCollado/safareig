import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #333333;
    --gray: #F0F5F7;
    --yellow: #FFBD01;
    --blue: #32C5FF;
    --darkBlue: #002CFC;
    --cardSizeXS: 15.5rem;
    --cardSizeS: 17rem;
    --cardSizeM: 20rem;
    --cardSizeL: 25rem;
    --cardSizeXL: 37.5rem;
    --mobile: 576px;
    --tablet: 768px;
    --desktop: 1024px;
  }

  html {
    /* Display & Box Model */
    min-width: 320px;
    max-width: 1280px;
    /* Text */
    font-size: 16px;
    background-color: #fafbfc;
  }

  body {
    font-size: 1rem;
  }

  h1, h2, h3 {
    font-family: --apple-system, sans-serif;
    font-weight: 900;
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
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-family: --apple-system, sans-serif;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);
  }

  @media (min-width: 576px) {
    html {
    margin: auto;
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
