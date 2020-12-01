import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { SimpleLinkContainer, SimpleLink } from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';
import { fluid } from '../utils/fluid';

// Styled components

const BioContainer = styled.div`
  width: clamp(272px, 100%, 455px);

  @media (min-width: 768px) {
    width: clamp(400px, 100%, 730px);
    // 1/2 inner space from CardCover
    margin-inline-end: ${fluid(16, 32)};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  // add space when there are two link items
  & a:last-child {
    margin-inline-start: 1.5rem;
  }

  & svg {
    width: 4px;
  }

  & svg path {
    stroke-width: 4;
  }

  @media (min-width: 1080px) {
    & svg {
      width: 5px;
    }
  }
`;

const Description = styled.p`
  // correct for <p> default block margin
  margin-block-start: 0.75rem;
  font-size: ${fluid(17, 28, 576)};
  line-height: 1.67;

  @media (min-width: 768px) {
    line-height: 1.5;
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
        <a href={'https://twitter.com/safareigfm'}>
          <SimpleLinkContainer>
            <SimpleLink>Segueix-nos</SimpleLink>
            <Chevron />
          </SimpleLinkContainer>
        </a>
        <a href={'mailto:fes@safareig.fm'}>
          <SimpleLinkContainer>
            <SimpleLink>Contacta'ns</SimpleLink>
            <Chevron />
          </SimpleLinkContainer>
        </a>
      </LinksContainer>
    </BioContainer>
  );
};

export default Bio;
