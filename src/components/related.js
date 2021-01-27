import React from 'react';
import { Link } from 'gatsby';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as EpisodeName, RichLinkComposer } from '../styled/link';

import RelatedSVG from '../../content/assets/related.svg';

// Main components

const RelatedEpisodes = ({ episodeTitle, relatedEpisodes }) => {
  const generateRelatedEpisodesList = relatedEpisodes
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
    .map((e) => {
      return (
        <Link to={`/${e.episodeNumber}`} key={e.episodeNumber}>
          <RichLinkComposer flat>
            <EpisodeName>{`${e.episodeNumber}: ${e.title}`}</EpisodeName>
          </RichLinkComposer>
        </Link>
      );
    });

  return (
    <EpisodeCard flat>
      <InnerCardContainer>
        <CardTitle>
          <RelatedSVG />
          <h2>Capítols Relacionats</h2>
        </CardTitle>
        <p>
          Si t'ha agradat {episodeTitle}, et recomanem que segueixis amb algun
          d'aquests:
        </p>
        {generateRelatedEpisodesList}
      </InnerCardContainer>
    </EpisodeCard>
  );
};

export default RelatedEpisodes;
