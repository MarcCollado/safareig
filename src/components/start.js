import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import {
  FeaturedLink as EpisodeName,
  ComposeFeaturedLink,
} from '../styled/link';

import StartHereSvg from '../../content/assets/start-here.svg';

// Main components

const StartHere = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query StartHereQuery {
      allSanityEpisode(
        filter: { isFeatured: { eq: true } }
        sort: { fields: episodeNumber, order: DESC }
        limit: 3
      ) {
        nodes {
          id
          episodeNumber
          title
          path {
            current
          }
        }
      }
    }
  `);

  const generateFeaturedEpisodesList = data.allSanityEpisode?.nodes.map((e) => {
    return (
      <Link to={`/${e.episodeNumber}`} key={e.id}>
        <ComposeFeaturedLink>
          <EpisodeName>{`${e.episodeNumber}: ${e.title}`}</EpisodeName>
        </ComposeFeaturedLink>
      </Link>
    );
  });

  return (
    <EpisodeCard featured={true}>
      <InnerCardContainer>
        <CardTitle>
          <StartHereSvg />
          <h2>Comença Aquí</h2>
        </CardTitle>
        <p>
          És difícil començar a escoltar un podcast, i sempre hi ha capítols que
          són més bons. Nosaltres et recomanem aquests:
        </p>
        {generateFeaturedEpisodesList}
      </InnerCardContainer>
    </EpisodeCard>
  );
};

export default StartHere;
