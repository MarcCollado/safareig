import React from "react";
import styled from "styled-components";
import "normalize.css";

import GlobalStyles from "../utils/styles";

const GlobalContainer = styled.div`
  margin: 1.5rem auto;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  if (location.pathname === rootPath) {
    // Actions for the home page
  } else {
    // Actions for the rest of pages
  }
  return (
    <GlobalContainer>
      <GlobalStyles />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </GlobalContainer>
  );
};

export default Layout;
