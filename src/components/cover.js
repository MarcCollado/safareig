import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const CardContainer = styled.div`
  /* Display & Box Model */
  overflow: hidden;
  width: 20rem;
  height: 14.75rem;
  margin: 0rem auto;
  border-radius: 1.5rem;
  box-shadow: 2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18);
  /* Flex */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Other */
  transition: box-shadow 0.3s ease;
`;

const ImageContainer = styled.div`
  /* Display & Box Model */
  width: 100%;
  height: 100%;
}
`;

const StyledImage = styled(Img)`
  /* Display & Box Model */
  width: 100%;
  height: 100%;
`;

const Cover = ({ data }) => {
  const coverImage = data.coverImage.childImageSharp.fluid;
  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage alt="Safareig cover art" fluid={coverImage} />
      </ImageContainer>
    </CardContainer>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query CoverImageQuery {
        coverImage: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Cover data={data} {...props} />}
  />
);
