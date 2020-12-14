import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';

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
  box-shadow: ${(props) =>
    props.expand
      ? '2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)'
      : 'none'};
  position: ${(props) => (props.expand ? 'relative' : 'static')};
  z-index: ${(props) => (props.expand ? '999' : '1')};

  & div svg:last-child {
    transform: rotate(${(props) => (props.expand ? '-90deg' : '0deg')});
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);
      position: relative;
      z-index: 998;

      & div svg:last-child {
        transform: rotate(${(props) => (props.expand ? '-90deg' : '90deg')});
      }
    }
  }
`;

const EpisodeDate = styled.p`
  margin: 0rem;
  font-weight: 700;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: ${fluid(14, 18)};
  }
`;

const EpisodeTitle = styled.h2`
  margin-block-start: 1rem;
  margin-block-end: -6px; // Reset default p block-start margin
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
  const episodeRef = useRef();

  useEffect(() => {
    const thisEpNum = parseInt(episodeNumber);
    const expEpRef = expandedEpisodeRef;
    if (!expand && expEpRef === thisEpNum) {
      setExpand(true);
      handleScroll();
    } else if (expEpRef !== thisEpNum) {
      setExpand(false);
    }
  }, [expandedEpisodeRef, expand]);

  const handleScroll = (duration = 1000, offset = -16) => {
    const ref = episodeRef.current;
    return setTimeout(() => {
      scrollToElement(ref, {
        offset: offset,
        // ease options: https://github.com/component/ease
        ease: 'inOutCube',
        duration: duration,
      });
    }, 10);
  };

  const handleOnClick = (n = episodeNumber) => {
    if (!expand) {
      setExpandedEpisodeRef(parseInt(n));
    } else {
      setExpandedEpisodeRef(parseInt(0));
    }
    handleScroll();
  };

  return (
    <CardEpisode
      flexFlow="column nowrap"
      alignItems="flex-start"
      flat={!expand}
      expand={expand}
      ref={episodeRef}
    >
      <InnerCardContainer>
        <Link to={'/'} onClick={() => handleOnClick()}>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
        </Link>
        <Audio
          hide={!expand}
          controls
          src={audioFile}
          type="audio/mpeg"
          preload="none"
        ></Audio>
        <ShowNotes
          hide={!expand}
          dangerouslySetInnerHTML={{
            __html: showNotes.replace(
              /href/g,
              "target='_blank' rel='noreferrer' href"
            ),
          }}
        ></ShowNotes>
        <Link to={'/'} onClick={() => handleOnClick()}>
          <SimpleLinkContainer>
            <SimpleLink>
              {!expand ? `Escoltar Capítol` : `Tancar Capítol`}
            </SimpleLink>
            <Chevron />
          </SimpleLinkContainer>
        </Link>
      </InnerCardContainer>
    </CardEpisode>
  );
};

export default Episode;
