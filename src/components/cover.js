import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { CardCover } from "./styled";

// Styled components

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
    }
  `);

  const coverImage = data.file.childImageSharp.fluid;

  return (
    <CardCover width={20} height={12}>
      <ImageContainer>
        <StyledImage alt="Safareig cover art" fluid={coverImage} />
      </ImageContainer>
    </CardCover>
  );
};

export default Cover;
