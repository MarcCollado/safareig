import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { CallToAction } from "./styled";
import { rhythm } from "../utils/typography";
import ChevronRightCta from "../../content/assets/chevron-right-cta.svg";

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

  const BioContainer = styled.div`
    /* Display & Box Model */
    margin: 1.5rem auto;
    padding: 0rem 1rem;
  `;
  const ActionContainer = styled.div`
    /* Display & Box Model */

    /* Flex */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;

    p {
      &:last-of-type {
        margin-inline-start: 1.5rem;
      }
    }
  `;

  const StyledChevron = styled(ChevronRightCta)`
    /* Display & Box Model */
    max-height: 0.75rem;
    margin-inline-start: 0.5rem;
  `;

  return (
    <BioContainer>
      <h1>{author?.name}</h1>
      <p>{description}</p>
      <ActionContainer>
        <CallToAction>Segueix-nos</CallToAction>
        <StyledChevron />
        <CallToAction>Fes Safareig</CallToAction>
        <StyledChevron />
      </ActionContainer>
    </BioContainer>
  );
};

export default Bio;
