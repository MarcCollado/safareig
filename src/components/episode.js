import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  CardStart,
  InnerCardContainer,
  SimpleLinkContainer,
  SimpleLink,
} from './styled';
import Chevron from '../../content/assets/chevron-right-cta.svg';
import { fluid } from '../utils/fluid';

// Styled Components

const CardEpisode = styled(CardStart)`
  background-color: ${(props) =>
    props.expand ? 'var(--white)' : 'var(--gray)'};
  position: ${(props) => (props.expand ? 'relative' : 'static')};
  z-index: ${(props) => (props.expand ? '999' : '1')};

  & div svg:last-child {
    transform: rotate(${(props) => (props.expand ? '-90deg' : '0deg')});
  }

  &:hover {
    box-shadow: none;
    background-color: var(--white);
    box-shadow: 2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18);
    position: relative;
    z-index: 999;

    & div svg:last-child {
      transform: rotate(${(props) => (props.expand ? '-90deg' : '90deg')});
    }
  }
`;

const EpisodeDate = styled.p`
  margin: 0rem;
  font-weight: bold;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1080px) {
    font-size: 18px;
  }
`;

const EpisodeTitle = styled.h3`
  margin-block-start: 1rem;
  margin-block-end: -0.25rem;
`;

const Audio = styled.audio`
  width: 100%;
  margin-block-start: 1.5rem;
  margin-block-end: 1.5rem;
  display: ${(props) => (props.hide ? 'none' : 'block')};
`;

const ShowNotes = styled.div`
  margin-block-end: 2rem;
  display: ${(props) => (props.hide ? 'none' : 'block')};

  @media (min-width: 768px) {
    margin-block-end: ${fluid(32, 44)};
  }

  & a {
    font-weight: 600;
    color: var(--darkBlue);
  }

  & ul {
    padding-inline-start: 1.5rem;
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
  expandedEpisodeRef,
  setExpandedEpisodeRef,
}) => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (expand) {
      // episodeRef.current.scrollIntoView();
      // flag the expanded card to parent component
      setExpandedEpisodeRef(parseInt(episodeNumber));
    } else if (!expand && parseInt(episodeNumber) === expandedEpisodeRef) {
      // reset state
      setExpandedEpisodeRef(0);
    }
  }, [expand]);

  return (
    <CardEpisode
      flexFlow="column nowrap"
      alignItems="flex-start"
      flat={!expand}
      expand={expand}
    >
      <InnerCardContainer>
        <Link to={'/'} onClick={() => setExpand(!expand)}>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
        </Link>
        <Audio
          hide={!expand}
          controls
          src={audioFile}
          type="audio/mpeg"
        ></Audio>
        <ShowNotes
          hide={!expand}
          dangerouslySetInnerHTML={{ __html: showNotes }}
        ></ShowNotes>
        <Link to={'/'} onClick={() => setExpand(!expand)}>
          <SimpleLinkContainer>
            <SimpleLink>
              {!expand ? `Escolta Episodi` : `Tancar Episodi`}
            </SimpleLink>
            <Chevron />
          </SimpleLinkContainer>
        </Link>
      </InnerCardContainer>
    </CardEpisode>
  );
};

export default Episode;
