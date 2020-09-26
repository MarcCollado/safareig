import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { CallToAction } from "./styled";
import Chevron from "../../content/assets/chevron-right-cta.svg";

// Styled components

const BioContainer = styled.div`
  /* Mimic CardContainer properties */
  width: 20rem;
  margin: 1.5rem auto;
`;

const ActionContainer = styled.div`
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

const StyledChevron = styled(Chevron)`
  /* Display & Box Model */
  max-height: 0.75rem;
  margin-inline-start: 0.5rem;
`;

// Main components

const Bio = () => {
  // GraphQL hook
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  // Sourced from "siteMetadata" in gatsby-config.js
  const title = data.site.siteMetadata?.title;
  const description = data.site.siteMetadata?.description;

  return (
    <BioContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <ActionContainer>
        <CallToAction>Segueix-nos</CallToAction>
        <StyledChevron />
        <CallToAction>Contacta'ns</CallToAction>
        <StyledChevron />
      </ActionContainer>
    </BioContainer>
  );
};

export default Bio;
