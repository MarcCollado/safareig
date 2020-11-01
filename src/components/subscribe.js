import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer, CardTitle } from './styled';
import SubscribeSvg from '../../content/assets/subscribe.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const PodcastItemContainer = styled.div`
  width: 90%;
  height: 4rem;
  padding-inline-start: 0.25rem;
  padding-inline-end: 0.25rem;
  border-radius: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 250ms ease-in-out;

  & p {
    margin-inline-start: 1.5rem;
  }

  &:last-child {
    margin-block-end: 1rem;
  }

  &:hover {
    background-color: var(--white);
  }

  @media (min-width: 768px) {
    margin-inline-end: 0.25rem;
  }
`;

const StyledImage = styled(Img)`
  width: 2.75rem;
  margin-inline-start: 0.5rem;

  @media (min-width: 576px) {
    width: 3rem;
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.5rem;
  margin-inline-start: auto;
`;

// Main components

const PodcastLink = (id, art, link, name) => {
  return (
    <PodcastItemContainer key={id}>
      <StyledImage fluid={art}></StyledImage>
      <p href={link}>{name}</p>
      <StyledChevron />
    </PodcastItemContainer>
  );
};

const Subscribe = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      allSanityPlayer(sort: { fields: sort, order: ASC }) {
        nodes {
          id
          name
          url
          icon {
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
  const generatePodcastList = data.allSanityPlayer?.nodes.map((p) =>
    PodcastLink(p.id, p.icon.asset.fluid, p.url, p.name)
  );
  return (
    <CardContainer flexFlow="column nowrap" flat>
      <CardTitle>
        <SubscribeSvg />
        <h2>Subscriu-te</h2>
      </CardTitle>
      {generatePodcastList}
    </CardContainer>
  );
};

export default Subscribe;
