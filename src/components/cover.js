import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { fluid } from '../utils/fluid';

// Styled components

const scaleAndRotate = keyframes`
  0% {
    transform: scale(1) rotate(-2deg);
  }
  100% {
    transform: scale(1.05) rotate(3deg);
  }
`;

export const CardCover = styled.div`
  width: clamp(270px, 100%, 430px);
  // space from BioContainer below
  margin-block-end: 2rem;
  border-radius: ${fluid(24, 32)};
  overflow: hidden;
  box-shadow: 2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18);
  position: relative;
  z-index: 1000;
  transition: all 300ms ease;

  transform: scale(1) rotate(-2deg);
  animation: ${scaleAndRotate} 2s ease-in-out 0s infinite alternate;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    height: clamp(280px, 100%, 390px);
    // BioContainer is no longer below
    margin-block-start: 0rem;
    // 1/2 inner space from BioContainer
    margin-inline-start: ${fluid(16, 32)};
  }
`;

// Main components

const Cover = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query CoverImageQuery {
      mobileCover: file(relativePath: { eq: "cover-mobile.jpg" }) {
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
  const sources = [
    data.mobileCover.childImageSharp.fluid,
    {
      ...data.desktopCover.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  return (
    <CardCover>
      <Img
        fluid={sources}
        alt="Safareig cover image"
        style={{ width: '100%', height: '100%' }}
      />
    </CardCover>
  );
};

export default Cover;
