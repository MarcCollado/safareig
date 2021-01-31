import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  CardTitle,
  EpisodeCard,
  EpisodeDate,
  EpisodeTitle,
  InnerCardContainer,
} from '../styled/cards';
import {
  FeaturedLinkComposer,
  InLineLinksContainer,
  PillLinkComposer,
} from '../styled/link';
import { fluid } from '../utils/fluid';

import BookmarkSvg from '../../content/assets/bookmark.svg';

// Styled Components

const Audio = styled.audio`
  width: 100%;
  margin-block-start: 24px;
  margin-block-end: 36px;

  @media (min-width: 768px) {
    margin-block-start: ${fluid(24, 36)};
    margin-block-end: ${fluid(36, 48)};
  }
`;

const ShowNotes = styled.div`
  margin-block-start: 24px;
  margin-block-end: 36px;

  @media (min-width: 768px) {
    margin-block-start: ${fluid(24, 36)};
    margin-block-end: ${fluid(36, 48)};
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
  audioFile,
  date,
  episodeNumber,
  showDescription,
  showNotes,
  title,
  url,
}) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query EpisodeQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `);

  const twitter = data.site.siteMetadata?.social.twitter;

  return (
    <EpisodeCard flexFlow="column nowrap" alignItems="flex-start">
      <InnerCardContainer>
        <EpisodeDate>{date}</EpisodeDate>
        <EpisodeTitle>
          <big>{`${episodeNumber}: ${title}`}</big>
        </EpisodeTitle>
        <p>{showDescription}</p>
        <Audio
          controls
          src={audioFile}
          type="audio/mpeg"
          preload="none"
        ></Audio>
        <CardTitle>
          <BookmarkSvg />
          <h2>Notes del Capítol</h2>
        </CardTitle>
        <ShowNotes
          dangerouslySetInnerHTML={{
            __html: showNotes.replace(
              /href/g,
              "target='_blank' rel='noreferrer' href"
            ),
          }}
        ></ShowNotes>
        <InLineLinksContainer>
          <PillLinkComposer
            href={`https://twitter.com/intent/tweet?text=Escolta ${title} a ${url}`}
            text="Comparteix"
          />
          <FeaturedLinkComposer
            color="black"
            href={twitter}
            text="Segueix-nos"
          />
        </InLineLinksContainer>
      </InnerCardContainer>
    </EpisodeCard>
  );
};

export default Episode;
