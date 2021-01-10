import React from 'react';
import styled from 'styled-components';

import { EpisodeCard, InnerCardContainer } from '../styled/cards';
import { SimpleLinkComposer } from '../styled/link';
import { fluid } from '../utils/fluid';

// Styled Components

const CardEpisode = styled(EpisodeCard)`
  background-color: ${(props) =>
    props.expand ? 'var(--white)' : 'var(--gray)'};
  box-shadow: ${(props) => (props.expand ? 'var(--boxShadow)' : 'none')};

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

const Audio = styled.audio`
  width: 100%;
  margin-block-start: 24px;
  margin-block-end: 24px;
  display: ${(props) => (props.hide ? 'none' : 'block')};
`;

const ShowNotes = styled.div`
  margin-block-end: 32px;
  display: ${(props) => (props.hide ? 'none' : 'block')};

  @media (min-width: 768px) {
    margin-block-end: ${fluid(32, 44)};
  }

  & a {
    font-weight: 600;
    color: var(--darkBlue);
  }

  & ul {
    padding-inline-start: 24px;
  }
`;

// Components

const Episode = ({
  date,
  episodeNumber,
  title,
  description,
  audioFile,
  showNotes,
}) => {
  return (
    <CardEpisode
      flexFlow="column nowrap"
      alignItems="flex-start"
      flat={false}
      expand={true}
    >
      <InnerCardContainer>
        <EpisodeDate>{date}</EpisodeDate>
        <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
        <p>{description}</p>
        <Audio
          controls
          src={audioFile}
          type="audio/mpeg"
          preload="none"
        ></Audio>
        <ShowNotes
          dangerouslySetInnerHTML={{
            __html: showNotes.replace(
              /href/g,
              "target='_blank' rel='noreferrer' href"
            ),
          }}
        ></ShowNotes>

        <SimpleLinkComposer text={`Tancar`} />
      </InnerCardContainer>
    </CardEpisode>
  );
};

export default Episode;
