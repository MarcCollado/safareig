import React from 'react';
import styled from 'styled-components';

import { CardEpisode, SimpleLinkContainer, SimpleLink } from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Styled Components

export const EpisodeDate = styled.p`
  font-weight: 600;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);
  /* Reset default agent margin */
  margin-block-end: -0.5rem;
`;

const EpisodeTitle = styled.h2`
  /* Reset default agent margin */
  margin-block-end: 0rem;
`;

// Components

const Episode = ({ id, date, episodeNumber, title, description }) => (
  <CardEpisode flexFlow="column nowrap" alignItems="flex-start">
    <EpisodeDate>{date.replace(/-/g, ' / ')}</EpisodeDate>
    <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
    <p>{description}</p>
    <SimpleLinkContainer>
      <SimpleLink>Escolta Episodi</SimpleLink>
      <Chevron />
    </SimpleLinkContainer>
  </CardEpisode>
);

export default Episode;
