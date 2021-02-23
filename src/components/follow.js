import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Card, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as HostName, RichLinkComposer } from '../styled/link';
import { hosts } from '../utils/composers';
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

const TwitterLink = (avatar, handle, name) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      key={name}
    >
      <RichLinkComposer flat withImage>
        <StyledAvatar alt={name} fluid={avatar}></StyledAvatar>
        <div>
          <HostName>{name}</HostName>
          <TwitterHandle>{handle}</TwitterHandle>
        </div>
      </RichLinkComposer>
    </a>
  );
};

const Follow = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      Marc: allFile(filter: { absolutePath: { regex: "/assets/marc.jpg/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Ramon: allFile(
        filter: { absolutePath: { regex: "/assets/ramon.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      favicon: allFile(
        filter: { absolutePath: { regex: "/assets/favicon.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const generateHostsList = hosts.map((h) => {
    let avatar = data[h.id].nodes[0].childImageSharp.fluid;
    return TwitterLink(avatar, h.handle, h.name);
  });

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
