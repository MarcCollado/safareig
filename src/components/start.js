import React from 'react';
import { Link } from 'gatsby';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as EpisodeName, RichLinkComposer } from '../styled/link';

import StartHereSvg from '../../content/assets/start-here.svg';

// Main components

const StartHere = ({ startEpisodes }) => {
  const generateFeaturedEpisodesList = startEpisodes
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
    .map((e) => {
      return (
        <Link to={`/${e.episodeNumber}`} key={e.episodeNumber}>
          <RichLinkComposer>
            <EpisodeName>{`${e.episodeNumber}: ${e.title}`}</EpisodeName>
          </RichLinkComposer>
        </Link>
      );
    });

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
