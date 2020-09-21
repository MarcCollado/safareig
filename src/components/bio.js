import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          description
          social {
            twitter
          }
        }
      }
    }
  `);

  // Sourced from "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  const description = data.site.siteMetadata?.description;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  const BioContainer = styled.div``;
  const Title = styled.h1``;
  const Description = styled.p``;
  const ActionContainer = styled.div``;

  return (
    <BioContainer>
      <Title>{author?.name}</Title>
      <Description>{description}</Description>
      <ActionContainer>
        <a>Segueix-nos</a>
        <a>Fes Safareig</a>
      </ActionContainer>
    </BioContainer>
  );
};

export default Bio;
