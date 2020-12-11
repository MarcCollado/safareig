import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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

  & p {
    font-weight: 600;
  }

  &:hover {
    background-color: var(--gray);
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.75rem;
  // float right
  margin-inline-start: auto;
  margin-inline-end: -0.25rem;
`;

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
        <FeatEpisodeContainer>
          <p>{`${e.episodeNumber}: ${e.title}`}</p>
          <StyledChevron />
        </FeatEpisodeContainer>
      </Link>
    );
  });

  const handleOnClick = (n) => setExpandedEpisodeRef(parseInt(n));

  return (
    <CardStart down={down}>
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
