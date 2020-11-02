import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { CardStart, CardTitle } from './styled';
import StartHereSvg from '../../content/assets/start-here.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const FeatEpisodeContainer = styled.div`
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

  & h3 {
    margin-inline-start: 0.25rem;
  }

  &:last-child {
    margin-block-end: 1rem;
  }

  &:hover {
    background-color: var(--gray);
  }

  @media (min-width: 768px) {
    margin-inline-end: 0.25rem;
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.5rem;
  margin-inline-start: auto;
`;

// Components

const StartHere = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query StartHereQuery {
      allSanityEpisode(filter: { isFeatured: { eq: true } }, limit: 3) {
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

  const featuredEpisodes = data.allSanityEpisode?.nodes;

  return (
    <CardStart flexFlow="column nowrap">
      <CardTitle>
        <StartHereSvg />
        <h2>Comença Aquí</h2>
      </CardTitle>
      <p>
        És difícil començar a escoltar un podcast, i sempre hi ha episodis que
        són més bons. Nosaltres et recomanem aquests:
      </p>
      {featuredEpisodes.map((episode) => (
        <FeatEpisodeContainer key={episode.id}>
          <h3>{`${episode.episodeNumber}: ${episode.title}`}</h3>
          <StyledChevron />
        </FeatEpisodeContainer>
      ))}
    </CardStart>
  );
};

export default StartHere;
