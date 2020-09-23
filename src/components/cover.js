import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { CardContainer } from "./styled";

// Styled

const ImageContainer = styled.div`
  /* Display & Box Model */
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Img)`
  /* Display & Box Model */
  width: 100%;
  height: 100%;
`;

// Components

const Cover = ({ data }) => {
  const coverImage = data.coverImage.childImageSharp.fluid;
  return (
    <CardContainer width={20} height={12}>
      <ImageContainer>
        <StyledImage alt="Safareig cover art" fluid={coverImage} />
      </ImageContainer>
    </CardContainer>
  );
};

// GraphQL

export default (props) => (
  <StaticQuery
    query={graphql`
      query CoverImageQuery {
        coverImage: file(relativePath: { eq: "cover-mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Cover data={data} {...props} />}
  />
);
