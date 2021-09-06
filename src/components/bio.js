import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import {
  FeaturedLinkComposer,
  InLineLinksContainer,
  PillLinkComposer,
} from '../styled/link';
import { HeaderDescription } from '../styled/text';
import { BioContainer } from '../utils/containers';
import { getRandom } from '../utils/random';

// Main Components

const Bio = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          header
          social {
            twitter
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
      <HeaderDescription>
        El teu aperitiu setmanal on analitzem com la tecnologia està canviant la
        societat que ens envolta. Cada dilluns, en 20 minuts, i exclusivament
        en&nbsp;català.
      </HeaderDescription>
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
