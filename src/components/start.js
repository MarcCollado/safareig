import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { CardStart, CardTitle, InnerCardContainer } from './styled';
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
      <Link to={'/'} key={e.id} onClick={() => handleOnClick(e.episodeNumber)}>
        <ComposeFeaturedLink>
          <EpisodeName>{`${e.episodeNumber}: ${e.title}`}</EpisodeName>
        </ComposeFeaturedLink>
      </Link>
    );
  });

  const handleOnClick = (n) => setExpandedEpisodeRef(parseInt(n));

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <CardStart down={down}>
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
    </CardStart>
  );
};

export default StartHere;
