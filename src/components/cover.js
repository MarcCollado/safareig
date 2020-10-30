import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer } from './styled';

// Styled components

export const CardCover = styled(CardContainer)`
  width: 20rem;
  padding: 0rem;
  background-color: var(--blue);

  @media (min-width: 576px) {
    width: 22.5rem;
  }

  @media (min-width: 768px) {
    width: 17.5rem; // Turn it into a square
    height: 16rem;
    padding-top: 1.5rem; // Move it dow
  }
`;

// Main components

const Cover = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query CoverImageQuery {
      file(relativePath: { eq: "cover-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      # desktopCover: file(relativePath: { eq: "cover-desktop.png" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 1024) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `);

  return (
    <CardCover>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Safareig cover image"
        style={{ width: '100%', height: '100%' }}
      />
    </CardCover>
  );
};

export default Cover;
