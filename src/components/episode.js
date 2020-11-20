import React, { useState } from 'react';
import { Link } from 'gatsby';
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

  @media (min-width: 1080px) {
    font-size: 18px;
  }
`;

export const EpisodeTitle = styled.h3`
  margin-block-start: 1rem;
  margin-block-end: -0.25rem;
`;

export const ShowNotes = styled.div`
  margin-block-end: 2rem;
  display: ${(props) => (props.hideShowNotes ? 'none' : 'block')};

  @media (min-width: 1080px) {
    margin-block-end: 3rem;
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
  id,
  date,
  episodeNumber,
  title,
  description,
  showNotes,
}) => {
  const [folded, setFolded] = useState(true);
  return (
    <CardEpisode flexFlow="column nowrap" alignItems="flex-start" flat={folded}>
      <Link to={'/'} onClick={() => setFolded(!folded)}>
        <InnerCardContainer>
          <EpisodeDate>{date}</EpisodeDate>
          <EpisodeTitle>{`${episodeNumber}: ${title}`}</EpisodeTitle>
          <p>{description}</p>
          <ShowNotes
            hideShowNotes={folded}
            dangerouslySetInnerHTML={{ __html: showNotes }}
          ></ShowNotes>
          <SimpleLinkContainer>
            <SimpleLink>Escolta Episodi</SimpleLink>
            <Chevron />
          </SimpleLinkContainer>
        </InnerCardContainer>
      </Link>
    </CardEpisode>
  );
};

export default Episode;
