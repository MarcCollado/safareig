import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

/* font-weight
  800: <h1/>
  700: <h2>CardTitle</h2>, <p>EpisodeDate</p>
  600: <p>FeaturedLink</p>, <button>PillLink</button>, <a>ShowNotes</a>
  500: <p>RichLink</p>
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
    --boxShadow: 80px 140px 130px -60px rgba(0, 0, 0, 0.25);
    --mobile: 576px;
    --tablet: 768px;
    --desktop: 1080px;
  }

  html {
    width: clamp(320px, 100%, 1440px);
    margin: 0px auto;
    font-family: inter, sans-serif;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    background-color: #fafbfc;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2 {
    // reset default margins
    margin: 0px;
    font-weight: 800;
    line-height: 1.5;
    color: var(--black);
  }

  h1 {
    font-size: 32px;

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
    font-size: 20px;
    font-weight: 700;

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

  p, a, button {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
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
    text-decoration: none;

    @media (min-width: 768px) {
      &:hover {
        color: var(--darkBlue)
      }
    }
  }

  button {
    background-color: var(--gray);
    font-weight: 600;
    text-align: center;
    text-decoration: none;

    @media (min-width: 768px) {
      &:hover {
        background-color: var(--darkBlue);
        color: var(--white);
      }
    }
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: pixelated;
  } */
`;

export default GlobalStyles;
