import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { CardContainer, CardTitle } from "./styled";
import StartHereSvg from "../../content/assets/start-here.svg";
import ChevronRight from "../../content/assets/chevron-right.svg";

// Styled components

const FeatEpisodeContainer = styled.div`
  /* Display & Box Model */
  width: 100%;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-block-end: 1rem;
  }

  & h3 {
    padding-inline-start: 1.5rem;
  }

  & :last-child {
    padding-inline-end: 1.5rem;
  }
`;

const StyledChevron = styled(ChevronRight)`
  width: 1.5rem;
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
    <CardContainer width={20} flexFlow="column nowrap" color="var(--white)">
      <CardTitle>
        <StartHereSvg />
        <h2>Comença Aquí</h2>
      </CardTitle>
      <p>
        És difícil començar a escoltar un podcast, i sempre hi ha episodis que
        són més bons. Nosaltres et recomanem aquests:
      </p>
      {featuredEpisodes.map((episode) => (
        <FeatEpisodeContainer>
          <h3>{`${episode.episodeNumber}: ${episode.title}`}</h3>
          <StyledChevron />
        </FeatEpisodeContainer>
      ))}
    </CardContainer>
  );
};

export default StartHere;
