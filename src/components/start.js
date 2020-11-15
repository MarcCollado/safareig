import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { CardStart, CardTitle, InnerCardContainer } from './styled';
import StartHereSvg from '../../content/assets/start-here.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const FeatEpisodeContainer = styled.div`
  height: 4rem;
  // make some room at both ends for the hover
  padding-inline-start: 0.75rem;
  padding-inline-end: 0.75rem;
  border-radius: 1rem;
  margin-inline-start: -0.75rem;
  margin-inline-end: -0.75rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--gray);
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.75rem;
  // float right
  margin-inline-start: auto;
`;

// Main components

const EpisodeLink = (episode) => {
  return (
    <a href={'#'}>
      <FeatEpisodeContainer key={episode.id}>
        <p style={{ fontWeight: 'bold' }}>
          {`${episode.episodeNumber}: ${episode.title}`}
        </p>
        <StyledChevron />
      </FeatEpisodeContainer>
    </a>
  );
};

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

  const generateFeaturedEpisodesList = data.allSanityEpisode?.nodes.map((e) =>
    EpisodeLink(e)
  );

  return (
    <CardStart flexFlow="column nowrap">
      <InnerCardContainer>
        <CardTitle>
          <StartHereSvg />
          <h2>Comença Aquí</h2>
        </CardTitle>
        <p>
          És difícil començar a escoltar un podcast, i sempre hi ha episodis que
          són més bons. Nosaltres et recomanem aquests:
        </p>
        {generateFeaturedEpisodesList}
      </InnerCardContainer>
    </CardStart>
  );
};

export default StartHere;
