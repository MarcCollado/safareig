import React from "react";
import { Link } from "gatsby";
import "normalize.css";

import GlobalStyles from "../utils/styles";
import { rhythm, scale } from "../utils/typography";

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
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <header>{header}</header> */}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
