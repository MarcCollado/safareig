import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer, CardTitle, InnerCardContainer } from './styled';
import SubscribeSvg from '../../content/assets/subscribe.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const SubscribeTitle = styled(CardTitle)`
  // space from podcast items since there is no <p> block margin
  margin-block-end: 1rem;
`;

const PodcastItemContainer = styled.div`
  height: 4rem;
  // make some room at both ends for the hover
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;
  border-radius: 1rem;
  margin-inline-start: -0.75rem;
  margin-inline-end: -0.75rem;
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  transition: all 250ms ease-in-out;

  & p {
    margin-inline-start: 1.25rem;
  }

  &:hover {
    background-color: var(--white);
  }
`;

const StyledImage = styled(Img)`
  width: 40px;
  margin-inline-start: 0.25rem; // indent

  @media (min-width: 576px) {
    width: 3rem;
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.5rem;
  margin-inline-start: auto; // float right
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
      <InnerCardContainer>
        <SubscribeTitle>
          <SubscribeSvg />
          <h2>Subscriu-te</h2>
        </SubscribeTitle>
        {generatePodcastList}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default Subscribe;
