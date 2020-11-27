import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer, CardTitle, InnerCardContainer } from './styled';
import SubscribeSvg from '../../content/assets/subscribe.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';
import { fluid } from '../utils/fluid';

// Styled components

const PodcastItemContainer = styled.div`
  height: 4rem;
  // make some room at both ends for the hover
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;
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

  @media (min-width: 768px) {
    margin-block-end: ${fluid(0, 20)};
  }
`;

const StyledImage = styled(Img)`
  width: 40px;

  @media (min-width: 768px) {
    width: ${fluid(40, 56)};
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.75rem;
  // float right
  margin-inline-start: auto;
`;

// Main components

const PodcastLink = (id, art, link, name) => {
  return (
    <a href={link} key={id}>
      <PodcastItemContainer>
        <StyledImage fluid={art}></StyledImage>
        <p>{name}</p>
        <StyledChevron />
      </PodcastItemContainer>
    </a>
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
        <CardTitle>
          <SubscribeSvg />
          <h2>Subscriu-te</h2>
        </CardTitle>
        <p>
          Emporta't el Safareig allà on vulguis i no et perdis el següent
          episodi.
        </p>
        {generatePodcastList}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default Subscribe;
