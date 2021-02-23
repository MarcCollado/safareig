import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Card, CardTitle, InnerCardContainer } from '../styled/cards';
import {
  RichLinkText as PodcastProvider,
  RichLinkComposer,
} from '../styled/link';
import { podcasts } from '../utils/composers';
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

const PodcastLink = (icon, url, name) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" key={name}>
      <RichLinkComposer flat withImage>
        <StyledImage alt={name} fluid={icon}></StyledImage>
        <PodcastProvider>{name}</PodcastProvider>
      </RichLinkComposer>
    </a>
  );
};

const Subscribe = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      ApplePodcasts: allFile(
        filter: {
          absolutePath: { regex: "/assets/podcasts/apple-podcasts.png/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      GooglePodcasts: allFile(
        filter: {
          absolutePath: { regex: "/assets/podcasts/google-podcasts.png/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Overcast: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/overcast.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      PocketCasts: allFile(
        filter: {
          absolutePath: { regex: "/assets/podcasts/pocket-casts.png/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Castro: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/castro.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      RSS: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/rss.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const generatePodcastList = podcasts.map((p) => {
    let icon = data[p.id].nodes[0].childImageSharp.fluid;
    return PodcastLink(icon, p.url, p.name);
  });

  return (
    <Card>
      <InnerCardContainer>
        <CardTitle>
          <SubscribeSvg />
          <h2>Subscriu-te</h2>
        </CardTitle>
        <p>Des d'allà on siguis, sigues el primer en escoltar-nos.</p>
        {generatePodcastList}
      </InnerCardContainer>
    </Card>
  );
};

export default Subscribe;
