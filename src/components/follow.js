import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer, CardTitle, InnerCardContainer } from './styled';
import FollowSvg from '../../content/assets/follow.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const TwitterItemContainer = styled.div`
  height: 4rem;
  // make some room at both ends for the hover
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin: -0.15rem -0.75rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 250ms ease-in-out;

  & p {
    margin-inline-start: 1rem;
  }

  &:hover {
    background-color: var(--white);
  }

  @media (min-width: 1080px) {
    margin-block-end: 1.25rem;
    padding: 0.5rem 0.75rem;
  }
`;

const StyledAvatar = styled(Img)`
  width: 50px;
  border-radius: 50px;

  @media (min-width: 1080px) {
    width: 64px;
    border-radius: 64px;
  }
`;

const TwitterHandle = styled.p`
  margin-block-start: -1rem;
  font-size: smaller;
  opacity: 0.6;
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.75rem;
  // float right
  margin-inline-start: auto;
`;

// Main components

const TwitterLink = (id, avatar, twitterHandle, name) => {
  return (
    <a href={`https://twitter.com/${twitterHandle}`} key={id}>
      <TwitterItemContainer>
        <StyledAvatar fluid={avatar}></StyledAvatar>
        <div>
          <p>{name}</p>
          <TwitterHandle>{twitterHandle}</TwitterHandle>
        </div>
        <StyledChevron />
      </TwitterItemContainer>
    </a>
  );
};

const Follow = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      allSanityHost {
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
    <CardContainer flexFlow="column nowrap" flat>
      <InnerCardContainer>
        <CardTitle>
          <FollowSvg />
          <h2>Segueix als Hosts</h2>
        </CardTitle>
        <p>
          Nos siguis tímid, connecta amb nosaltres, i fem Safareig tots plegats.
        </p>
        {generateHostsList}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default Follow;