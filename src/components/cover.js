import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
  overflow: hidden;

  // Safari compatibility
  & img {
    border-radius: ${fluid(24, 32)};
  }

  @media (min-width: 768px) {
    min-width: 260px;
    width: 100%;
    max-width: 408px;
    margin-block-end: ${fluid(24, 40)};

    // Safari compatibility
    & img {
      border-radius: ${fluid(32, 48)};
    }
  }
`;

const HomeCover = styled(EpisodeCover)`
  // Mobile: add space from BioContainer below
  margin-block-end: 32px;
  box-shadow: var(--boxShadow);
  border-radius: ${fluid(24, 32)};
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
    border-radius: ${fluid(32, 48)};
  }
`;

// Main components

const Cover = ({ location }) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query CoverImageQuery {
      homeCover: allFile(
        filter: { absolutePath: { regex: "/assets/home-cover.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      episodeCover: allFile(
        filter: { absolutePath: { regex: "/assets/episode-cover.jpg/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const homeCover = data.homeCover.nodes[0].childImageSharp.gatsbyImageData;
  const episodeCover =
    data.episodeCover.nodes[0].childImageSharp.gatsbyImageData;

  return location === '/' ? (
    <HomeCover>
      <GatsbyImage
        image={homeCover}
        alt="Safareig cover image"
        style={{ width: '100%', height: '100%' }}
      />
    </HomeCover>
  ) : (
    <EpisodeCover>
      <Link to="/">
        <GatsbyImage
          image={episodeCover}
          alt="Safareig episode cover image"
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
    </EpisodeCover>
  );
};

export default Cover;
