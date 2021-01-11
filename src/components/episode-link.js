import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { EpisodeLinkCard, InnerCardContainer } from '../styled/cards';
import { SimpleLinkComposer } from '../styled/link';
import { fluid } from '../utils/fluid';

// Styled Components

const EpisodeDate = styled.p`
  margin: 0px;
  font-weight: 700;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: ${fluid(14, 18)};
  }
`;

const EpisodeTitle = styled.h2`
  margin-block-start: 16px;
  margin-block-end: -6px; // Reset default p block-start margin
`;

// Components

const EpisodeLink = ({ date, episodeNumber, title, description }) => {
  return (
    <Link to={`/${episodeNumber}`}>
      <EpisodeLinkCard>
        <InnerCardContainer>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
          <SimpleLinkComposer text={`Escoltar Capítol`} />
        </InnerCardContainer>
      </EpisodeLinkCard>
    </Link>
  );
};

export default EpisodeLink;
