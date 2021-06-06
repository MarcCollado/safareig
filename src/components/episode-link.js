import React from 'react';
import { Link } from 'gatsby';

import {
  EpisodeLinkCard,
  EpisodeTitle,
  InnerCardContainer,
} from '../styled/cards';
import { Meta } from '../styled/text';
import { FeaturedLinkComposer } from '../styled/link';

// Components

const EpisodeLink = ({ date, episodeNumber, title, showDescription }) => {
  return (
    <Link to={`/${episodeNumber}`}>
      <EpisodeLinkCard>
        <InnerCardContainer>
          <Meta>{date}</Meta>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{showDescription}</p>
          <FeaturedLinkComposer color="blue" text={`Escoltar Capítol`} />
        </InnerCardContainer>
      </EpisodeLinkCard>
    </Link>
  );
};

export default EpisodeLink;
