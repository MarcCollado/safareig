import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { CardContainer, CardTitle } from "./styled";
import StartHereSvg from "../../content/assets/start-here.svg";

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
        <p>{`${episode.episodeNumber}: ${episode.title}`}</p>
      ))}
    </CardContainer>
  );
};

export default StartHere;
