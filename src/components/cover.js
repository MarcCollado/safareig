import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer } from './styled';

// Styled components

export const CardCover = styled(CardContainer)`
  width: 20rem;
  padding: 0rem;

  @media (min-width: 576px) {
    width: 22.5rem;
  }

  @media (min-width: 768px) {
    // Turn it into a square
    width: 18rem;
    height: 18rem;
  }

  @media (min-width: 1024px) {
    // Turn it into a square
    width: 20rem;
    height: 20rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
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

  const coverImage = data.file.childImageSharp.fluid;

  return (
    <CardCover>
      <ImageContainer>
        <StyledImage alt="Safareig cover art" fluid={coverImage} />
      </ImageContainer>
    </CardCover>
  );
};

export default Cover;
