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
  width: clamp(272px, 100%, 455px);
  margin-block-end: 2rem;
  transform: scale(1) rotate(-2deg);
  animation: ${scaleAndRotate} 2s ease-in-out 0s infinite alternate;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    height: clamp(280px, 100%, 390px);
    margin-inline-start: 1rem;
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
