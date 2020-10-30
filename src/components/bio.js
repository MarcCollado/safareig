import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { SimpleLinkContainer, SimpleLink } from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Styled components

const BioContainer = styled.div`
  width: 20rem;
  margin: 0rem auto;

  @media (min-width: 576px) {
    width: 22.5rem;
  }

  @media (min-width: 768px) {
    width: auto;
    // The min width to fit into 5 lines
    min-width: 22.5rem;
    // The max width to fit into 4 lines
    max-width: 50%;
  }

  @media (min-width: 1024px) {
    max-width: 55.5%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  // Add some extra room in case there are two link items
  & div:last-child {
    margin-inline-start: 1.5rem;
  }
`;

const Description = styled.p`
  margin-block-start: -0.75rem; // Correct for h1' block margin
  font-size: 1.25rem;
  line-height: 1.5;

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    margin-block-start: -1rem; // Correct for h1' block margin
  }

  @media (min-width: 1024px) {
    margin-block-start: -1.5rem; // Correct for h1' block margin
    font-size: 1.75rem;
  }
`;

const StyledChevron = styled(Chevron)`
  max-height: 0.75rem;
  margin-inline-start: 0.5rem;
`;

// Main components

const Bio = () => {
  // GraphQL
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

  const title = data.site.siteMetadata?.title;
  const description = data.site.siteMetadata?.description;

  return (
    <BioContainer>
      <h1>{title}</h1>
      <Description>{description}</Description>
      <LinksContainer>
        <SimpleLinkContainer>
          <SimpleLink>Segueix-nos</SimpleLink>
          <StyledChevron />
        </SimpleLinkContainer>
        <SimpleLinkContainer>
          <SimpleLink>Contacta'ns</SimpleLink>
          <StyledChevron />
        </SimpleLinkContainer>
      </LinksContainer>
    </BioContainer>
  );
};

export default Bio;
