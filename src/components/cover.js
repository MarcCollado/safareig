import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { CardContainer } from './styled';

// Styled components

const scaleAndRotate = keyframes`
  0% {
    transform: scale(1) rotate(-2deg);
  }
  100% {
    transform: scale(1.05) rotate(3deg);
  }
`;

export const CardCover = styled(CardContainer)`
  width: 20rem;
  padding: 0rem;
  background-color: var(--blue);
  transform: scale(1) rotate(-2deg);
  animation: ${scaleAndRotate} 2s ease-in-out 0s infinite alternate;

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
      file(relativePath: { eq: "cover-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopCover: file(relativePath: { eq: "cover-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
