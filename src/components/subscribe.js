import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { CardContainer, CardTitle, InnerCardContainer } from './styled';
import {
  FeaturedLink as PodcastProvider,
  ComposeFeaturedLink,
} from '../styled/link';
import { fluid } from '../utils/fluid';

import SubscribeSvg from '../../content/assets/subscribe.svg';

// Styled components

const StyledImage = styled(Img)`
  width: 40px;

  @media (min-width: 768px) {
    width: ${fluid(40, 56)};
  }
`;

// Main components

const PodcastLink = (id, art, link, name) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" key={id}>
      <ComposeFeaturedLink flat>
        <StyledImage fluid={art}></StyledImage>
        <PodcastProvider>{name}</PodcastProvider>
      </ComposeFeaturedLink>
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

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <CardContainer flat>
      <InnerCardContainer>
        <CardTitle>
          <SubscribeSvg />
          <h2>{isDesktop ? `Subscriu-te a Safareig` : `Subscriu-te`}</h2>
        </CardTitle>
        <p>Des d'allà on siguis, sigues el primer en escoltar-nos.</p>
        {generatePodcastList}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default Subscribe;
