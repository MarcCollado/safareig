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

const EpisodeCover = styled.div`
  // Shares CSS properties with Cards
  width: 100%;
  margin-block-end: 24px;
  border-radius: ${fluid(24, 32)};
  overflow: hidden;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(24, 48)};
    border-radius: ${fluid(32, 48)};
  }
`;

const HomeCover = styled(EpisodeCover)`
  // Mobile: add space from BioContainer below
  margin-block-end: 32px;
  box-shadow: var(--boxShadow);

  transition: all 300ms ease;

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

const Cover = ({ location }) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query CoverImageQuery {
      homeMobileCover: file(relativePath: { eq: "home-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeDesktopCover: file(relativePath: { eq: "home-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      episodeMobileCover: file(relativePath: { eq: "episode-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      episodeDesktopCover: file(relativePath: { eq: "episode-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const homeSources = [
    data.homeMobileCover.childImageSharp.fluid,
    {
      ...data.homeDesktopCover.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  const espisodeSources = [
    data.episodeMobileCover.childImageSharp.fluid,
    {
      ...data.episodeDesktopCover.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  return location === '/' ? (
    <HomeCover>
      <Img
        fluid={homeSources}
        alt="Safareig cover image"
        style={{ width: '100%', height: '100%' }}
      />
    </HomeCover>
  ) : (
    <EpisodeCover>
      <Link to="/">
        <Img
          fluid={espisodeSources}
          alt="Safareig episode cover image"
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
    </EpisodeCover>
  );
};

export default Cover;
