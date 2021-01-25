import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { EpisodeCard, CardTitle, InnerCardContainer } from '../styled/cards';
import { RichLinkText as EpisodeName, RichLinkComposer } from '../styled/link';

import RelatedSVG from '../../content/assets/related.svg';

// Main components

const RelatedEpisodes = ({ episodeTitle }) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query RelatedEpisodesQuery {
      allFeedSafareigFm(
        # Modify this array with the start episodes
        filter: { itunes: { episode: { in: ["4", "7", "9"] } } }
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

  const generateRelatedEpisodesList = data.allFeedSafareigFm?.nodes.map((e) => {
    return (
      <Link to={`/${e.itunes.episode}`} key={e.id}>
        <RichLinkComposer flat>
          <EpisodeName>{`${e.itunes.episode}: ${e.title}`}</EpisodeName>
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
          Si t'ha agradat <em>{episodeTitle}</em>, et recomanem que segueixis
          amb algun d'aquests:
        </p>
        {generateRelatedEpisodesList}
      </InnerCardContainer>
    </EpisodeCard>
  );
};

export default RelatedEpisodes;
