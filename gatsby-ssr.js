import React from 'react';
import Layout from './src/components/layout';

// Wrap all pages with a default Layout
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
