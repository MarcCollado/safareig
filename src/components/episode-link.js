import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { EpisodeCard, InnerCardContainer } from '../styled/cards';
import { SimpleLinkComposer } from '../styled/link';
import { fluid } from '../utils/fluid';

// Styled Components

const CardEpisode = styled(EpisodeCard)`
  background-color: ${(props) =>
    props.expand ? 'var(--white)' : 'var(--gray)'};
  box-shadow: ${(props) => (props.expand ? 'var(--boxShadow)' : 'none')};
  position: ${(props) => (props.expand ? 'relative' : 'static')};
  z-index: ${(props) => (props.expand ? '999' : '1')};

  & div svg:last-child {
    transform: rotate3d(
      0,
      0,
      1,
      ${(props) => (props.expand ? '-90deg' : '0deg')}
    );
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);
      position: relative;
      z-index: 998;

      & div svg:last-child {
        transform: rotate3d(
          0,
          0,
          1,
          ${(props) => (props.expand ? '-90deg' : '90deg')}
        );
      }
    }
  }
`;

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
      <CardEpisode flexFlow="column nowrap" alignItems="flex-start">
        <InnerCardContainer>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
          <SimpleLinkComposer text={`Escoltar Capítol`} />
        </InnerCardContainer>
      </CardEpisode>
    </Link>
  );
};

export default EpisodeLink;
