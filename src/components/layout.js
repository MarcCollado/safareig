import React from "react";
import styled from "styled-components";
import "normalize.css";

import GlobalStyles from "../utils/styles";

const GlobalContainer = styled.main`
  margin: 1.5rem auto;
  /* Flex */
  // display: flex;
  // flex-flow: column nowrap;
  // justify-content: flex-start;
  // align-items: flex-start;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  if (location.pathname === rootPath) {
    // Actions for the home page
  } else {
    // Actions for the rest of pages
  }
  return (
    <>
      <GlobalStyles />
      <GlobalContainer>{children}</GlobalContainer>
    </>
  );
};

export default Layout;
