import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

/* font-weight
  800: <h1/>
  700: <h2/>, Meta.p
  600: buttons, links, and blue links inside text
  500: RichLink.p, PostMeta.Meta (post-link), Subtitle.p (post-page)
  400: p, a, button, input
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
    width: clamp(375px, 100%, 1440px);
    margin: 0px auto;
    font-family: inter, sans-serif;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    background-color: #fafbfc;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2 {
    // Reset default margins
    margin: 0px;
    line-height: 1.5;
    color: var(--black);
  }

  h1 {
    font-size: 32px;
    font-weight: 800;

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

  li, p, a, button, input {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--black);

    &:focus {
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

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

  input {
    background-color: var(--gray);
    text-decoration: none;
  }
`;

export default GlobalStyles;
