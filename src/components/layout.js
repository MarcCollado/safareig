import React from "react";
import { Link } from "gatsby";
import "normalize.css";

import GlobalStyles from "../utils/styles";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  // let header;

  if (location.pathname === rootPath) {
    // Actions for the home page
  } else {
    // Actions for the rest of pages
  }
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;
