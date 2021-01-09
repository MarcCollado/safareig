import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';

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

  const handleScroll = (duration = 1500, offset = -16) => {
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

  const handleOnClick = (e, n = episodeNumber) => {
    e.preventDefault();
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
        {/* <a href={'/'} onClick={(e) => handleOnClick(e)}> */}
        <EpisodeDate>{date}</EpisodeDate>
        <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
        <p>{description}</p>
        {/* </a> */}
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
        {/* <a href={'/'} onClick={(e) => handleOnClick(e)}> */}
        <SimpleLinkComposer text={!expand ? `Escoltar Capítol` : `Tancar`} />
        {/* </a> */}
      </InnerCardContainer>
    </CardEpisode>
  );
};

export default Episode;
