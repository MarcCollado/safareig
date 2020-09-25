import React from "react";
import Layout from "./src/components/layout";

import "typeface-montserrat";
import "typeface-merriweather";
import "prismjs/themes/prism.css";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
