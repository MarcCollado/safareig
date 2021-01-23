import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Card, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as HostName, RichLinkComposer } from '../styled/link';
import { fluid } from '../utils/fluid';

import FollowSvg from '../../content/assets/follow.svg';

// Styled components

const StyledAvatar = styled(Img)`
  width: 50px;
  border-radius: 50px;

  @media (min-width: 768px) {
    width: ${fluid(50, 64)};
    border-radius: ${fluid(50, 64)};
  }
`;

const TwitterHandle = styled.p`
  opacity: 0.6;
`;

// Main components

const TwitterLink = (id, avatar, twitterHandle, name) => {
  return (
    <a
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noreferrer"
      key={id}
    >
      <RichLinkComposer flat>
        <StyledAvatar fluid={avatar}></StyledAvatar>
        <div>
          <HostName>{name}</HostName>
          <TwitterHandle>{`@${twitterHandle.toLowerCase()}`}</TwitterHandle>
        </div>
      </RichLinkComposer>
    </a>
  );
};

const Follow = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      allSanityHost(sort: { fields: name, order: ASC }, limit: 3) {
        nodes {
          id
          name
          twitterHandle
          avatar {
            asset {
              fluid {
                sizes
                src
                srcSet
                base64
                aspectRatio
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    }
  `);

  const generateHostsList = data.allSanityHost?.nodes.map((p) =>
    TwitterLink(p.id, p.avatar.asset.fluid, p.twitterHandle, p.name)
  );
  return (
    <Card>
      <InnerCardContainer>
        <CardTitle>
          <FollowSvg />
          <h2>Segueix-nos</h2>
        </CardTitle>
        <p>No siguis tímid, connecta amb nosaltres i fem Safareig.</p>
        {generateHostsList}
      </InnerCardContainer>
    </Card>
  );
};

export default Follow;
