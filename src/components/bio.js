import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { SimpleLinkContainer, SimpleLink } from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Styled components

const BioContainer = styled.div`
  width: clamp(272px, 100%, 455px);

  @media (min-width: 768px) {
    width: clamp(400px, 100%, 710px);
    margin-inline-end: 1rem;
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
  margin-block-start: 0.75rem; // Correct <p> default block margin
  font-size: 1.125rem;
  line-height: 1.67;

  @media (min-width: 576px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
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
          <Chevron />
        </SimpleLinkContainer>
        <SimpleLinkContainer>
          <SimpleLink>Contacta'ns</SimpleLink>
          <Chevron />
        </SimpleLinkContainer>
      </LinksContainer>
    </BioContainer>
  );
};

export default Bio;
