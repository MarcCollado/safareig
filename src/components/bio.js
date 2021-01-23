import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  FeaturedLinkComposer,
  InLineLinksContainer,
  PillLinkComposer,
} from '../styled/link';
import { BioContainer } from '../utils/containers';
import { fluid } from '../utils/fluid';
import { getRandom } from '../utils/random';

// Styled components

const Description = styled.p`
  // correct for <p> default block margin
  margin-block-start: 12px;
  font-size: ${fluid(17, 28, 576)};
  line-height: 1.67;

  @media (min-width: 768px) {
    padding-inline-end: ${fluid(0, 24, 1080)};
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
