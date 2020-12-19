import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { SimpleLinkComposer } from '../styled/link';
import { BioContainer } from '../utils/containers';
import { fluid } from '../utils/fluid';

// Styled components

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  // add space when there are two link items inline
  & a:last-child {
    margin-inline-start: 24px;
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
          header
          description
          social {
            twitter
            email
          }
        }
      }
    }
  `);

  const header = data.site.siteMetadata?.header;
  const description = data.site.siteMetadata?.description;
  const twitter = data.site.siteMetadata?.social.twitter;
  const email = data.site.siteMetadata?.social.email;
  return (
    <BioContainer>
      <h1>{header}</h1>
      <Description>{description}</Description>
      <LinksContainer>
        <SimpleLinkComposer href={twitter} text="Segueix-nos" />
        <SimpleLinkComposer href={`mailto:${email}`} text="Contacta'ns" />
      </LinksContainer>
    </BioContainer>
  );
};

export default Bio;
