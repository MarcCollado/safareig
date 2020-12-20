import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

/* font-weight
  800: <h1/>
  700: <h2>CardTitle</h2>, <p>EpisodeDate</p>
  600: <p>SimpleLink</p>, <a>ShowNotes</a>
  500: <p>FeaturedLink</p>
  400: <a/>, <p/>
*/

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #333333;
    --gray: #F0F5F7;
    --yellow: #FFBD01;
    --blue: #32C5FF;
    --darkBlue: #002CFC;
    --boxShadow: 32px 100px 60px -52px rgba(0, 0, 0, 0.18);
    --mobile: 576px;
    --tablet: 768px;
    --desktop: 1080px;
  }

  html {
    width: clamp(320px, 100%, 1440px);
    font-size: 16px;
    margin: 0px auto;
    background-color: #fafbfc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2 {
    // reset default margins
    margin: 0px;
    font-family: inter, sans-serif;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--black);
  }

  h1 {
    font-size: 28px;

    @media (min-width: 768px) {
      font-size: 32px;
    }

    @media (min-width: 1024px) {
      font-size: 42px;
    }

    @media (min-width: 1280px) {
      font-size: 56px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }

    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  p {
    font-family: inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }

    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  a {
    font-family: inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--black);
    text-decoration: none;

    @media (min-width: 768px) {
      font-size: 16px;

      &:hover {
        color: var(--darkBlue)
      }
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }

    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }
  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: pixelated;
  } */
`;

export default GlobalStyles;
