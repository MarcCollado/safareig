import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  FeaturedLinkComposer,
  InLineLinksContainer,
  PillLinkComposer,
} from '../styled/link';
import { BioContainer } from '../utils/containers';
import { getRandom } from '../utils/random';

// Styled components

const Description = styled.p`
  // correct for <p> default block margin
  margin-block-start: 12px;
  margin-block-end: 24px;
  font-size: 17px;

  @media (min-width: 576px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
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
          social {
            twitter
            email
          }
        }
      }
      allFeedSafareigFm {
        totalCount
      }
    }
  `);

  const header = data.site.siteMetadata?.header;
  const twitter = data.site.siteMetadata?.social.twitter;
  const totalCount = data.allFeedSafareigFm?.totalCount;
  const randomEspisode = getRandom(1, totalCount);

  return (
    <BioContainer>
      <h1>{header}</h1>
      <Description>
        El teu aperitiu setmanal on analitzem com la tecnologia està canviant la
        societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament
        en&nbsp;català.
      </Description>
      <InLineLinksContainer>
        <Link to={`/${randomEspisode}`}>
          <PillLinkComposer text="Escolta'ns" />
        </Link>
        <FeaturedLinkComposer color="black" href={twitter} text="Segueix-nos" />
      </InLineLinksContainer>
    </BioContainer>
  );
};

export default Bio;
