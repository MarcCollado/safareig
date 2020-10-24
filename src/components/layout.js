import React from 'react';
import 'normalize.css';

import GlobalStyles from '../utils/styles';

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
      {children}
    </>
  );
};

export default Layout;
