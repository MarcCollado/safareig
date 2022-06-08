import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';
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
  margin-block-end: 24px;
  border-radius: ${fluid(24, 32)};
  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 260px;
    width: 100%;
    max-width: 408px;
    margin-block-end: ${fluid(24, 40)};
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
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  // GraphQL
  const data = useStaticQuery(graphql`
    query CoverImageQuery {
      homeMobileCover: allFile(
        filter: { absolutePath: { regex: "/assets/home-mobile.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      homeDesktopCover: allFile(
        filter: { absolutePath: { regex: "/assets/home-desktop.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      episodeMobileCover: allFile(
        filter: { absolutePath: { regex: "/assets/episode-mobile.jpg/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      episodeDesktopCover: allFile(
        filter: { absolutePath: { regex: "/assets/episode-desktop.jpg/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const homeDesktopCover =
    data.homeDesktopCover.nodes[0].childImageSharp.gatsbyImageData;
  const homeMobileCover =
    data.homeMobileCover.nodes[0].childImageSharp.gatsbyImageData;
  const episodeDesktopCover =
    data.episodeDesktopCover.nodes[0].childImageSharp.gatsbyImageData;
  const episodeMobileCover =
    data.episodeMobileCover.nodes[0].childImageSharp.gatsbyImageData;

  return location === '/' ? (
    <HomeCover>
      <GatsbyImage
        image={isDesktop ? homeDesktopCover : homeMobileCover}
        alt="Safareig cover image"
        style={{ width: '100%', height: '100%' }}
      />
    </HomeCover>
  ) : (
    <EpisodeCover>
      <Link to="/">
        <GatsbyImage
          image={isDesktop ? episodeDesktopCover : episodeMobileCover}
          alt="Safareig episode cover image"
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
    </EpisodeCover>
  );
};

export default Cover;
