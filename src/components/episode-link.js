import React from 'react';
import { Link } from 'gatsby';

import {
  EpisodeDate,
  EpisodeLinkCard,
  EpisodeTitle,
  InnerCardContainer,
} from '../styled/cards';
import { FeaturedLinkComposer } from '../styled/link';

// Components

const EpisodeLink = ({ date, episodeNumber, title, description }) => {
  return (
    <Link to={`/${episodeNumber}`}>
      <EpisodeLinkCard>
        <InnerCardContainer>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
          <FeaturedLinkComposer color="blue" text={`Escoltar Capítol`} />
        </InnerCardContainer>
      </EpisodeLinkCard>
    </Link>
  );
};

export default EpisodeLink;
