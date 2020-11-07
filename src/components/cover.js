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
  width: clamp(calc(320px - 4rem), 75vw, 425px);
  padding: 0rem;
  margin-block-end: 1rem;
  transform: scale(1) rotate(-2deg);
  animation: ${scaleAndRotate} 2s ease-in-out 0s infinite alternate;

  @media (min-width: 576px) {
    margin-block-end: 2rem;
  }

  @media (min-width: 768px) {
    width: clamp(240px, 27vw, 270px);
    height: clamp(240px, 27vw, 270px);
    margin: 0rem;
  }

  @media (min-width: 1024px) {
    width: clamp(260px, 23vw, 290px);
    height: clamp(260px, 23vw, 290px);
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
