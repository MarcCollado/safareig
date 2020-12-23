import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import {
  FeaturedLink as EpisodeName,
  ComposeFeaturedLink,
} from '../styled/link';

import StartHereSvg from '../../content/assets/start-here.svg';

// Main components

const StartHere = ({ down, setExpandedEpisodeRef }) => {
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
      <a
        href={'/'}
        key={e.id}
        onClick={(el) => handleOnClick(el, e.episodeNumber)}
      >
        <ComposeFeaturedLink>
          <EpisodeName>{`${e.episodeNumber}: ${e.title}`}</EpisodeName>
        </ComposeFeaturedLink>
      </a>
    );
  });

  const handleOnClick = (e, n) => {
    e.preventDefault();
    setExpandedEpisodeRef(parseInt(n));
  };

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <EpisodeCard down={down}>
      <InnerCardContainer>
        <CardTitle>
          <StartHereSvg />
          <h2>
            {isDesktop ? `Comença Escoltant Aquests Capítols` : `Comença Aquí`}
          </h2>
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
