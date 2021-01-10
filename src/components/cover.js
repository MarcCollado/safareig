import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';

import { fluid } from '../utils/fluid';

// Styled components

const scaleAndRotate = keyframes`
  0% {
    transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -2deg);
  }
  100% {
    transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 3deg);
  }
`;

export const CardCover = styled.div`
  width: clamp(270px, 100%, 430px);
  // space from BioContainer below
  margin-block-end: 32px;
  border-radius: ${fluid(24, 32)};
  overflow: hidden;
  box-shadow: ${(props) => (props.float ? 'var(--boxShadow)' : 'none')};
  position: ${(props) => (props.float ? 'relative' : 'static')};
  z-index: ${(props) => (props.float ? 999 : 1)};

  transition: ${(props) => (props.float ? 'all 300ms ease' : 'none')};

  transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -2deg);
  animation: ${scaleAndRotate} 4s ease-in-out 0s infinite alternate;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    height: clamp(280px, 100%, 390px);
    // BioContainer is no longer below
    margin-block-start: 0px;
    // 1/2 inner space from BioContainer
    margin-inline-start: ${fluid(16, 32)};
  }
`;

// Main components

const Cover = ({ float }) => {
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
    <CardCover float={float}>
      <Link to="/">
        <Img
          fluid={sources}
          alt="Safareig cover image"
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
    </CardCover>
  );
};

export default Cover;
