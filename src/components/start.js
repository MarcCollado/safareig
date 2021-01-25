import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as EpisodeName, RichLinkComposer } from '../styled/link';

import StartHereSvg from '../../content/assets/start-here.svg';

// Main components

const StartHere = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query StartHereQuery {
      allFeedSafareigFm(
        # Modify this array with the start episodes
        filter: { itunes: { episode: { in: ["7", "13", "15"] } } }
      ) {
        nodes {
          title
          itunes {
            episode
          }
        }
      }
    }
  `);

  const generateFeaturedEpisodesList = data.allFeedSafareigFm?.nodes.map(
    (e) => {
      return (
        <Link to={`/${e.itunes.episode}`} key={e.id}>
          <RichLinkComposer>
            <EpisodeName>{`${e.itunes.episode}: ${e.title}`}</EpisodeName>
          </RichLinkComposer>
        </Link>
      );
    }
  );

  return (
    <EpisodeCard>
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
