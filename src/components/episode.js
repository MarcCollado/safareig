import React from 'react';
import styled from 'styled-components';

import {
  CardEpisode,
  InnerCardContainer,
  SimpleLinkContainer,
  SimpleLink,
} from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';

// Styled Components

export const EpisodeDate = styled.p`
  margin: 0rem;
  font-weight: bold;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const EpisodeTitle = styled.h3`
  margin-block-start: 1rem;
  margin-block-end: -0.25rem;
`;

// Components

const Episode = ({ id, date, episodeNumber, title, description }) => (
  <CardEpisode flexFlow="column nowrap" alignItems="flex-start" flat>
    <InnerCardContainer>
      <EpisodeDate>{date}</EpisodeDate>
      <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
      <p>{description}</p>
      <SimpleLinkContainer>
        <SimpleLink>Escolta Episodi</SimpleLink>
        <Chevron />
      </SimpleLinkContainer>
    </InnerCardContainer>
  </CardEpisode>
);

export default Episode;
