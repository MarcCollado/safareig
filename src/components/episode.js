import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
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

// Styled Components

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

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  // add space when there are two link items inline
  & a:last-child {
    margin-inline-start: ${fluid(24, 32)};
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
  // GraphQL
  const data = useStaticQuery(graphql`
    query EpisodeQuery {
      site {
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `);

  const email = data.site.siteMetadata?.social.email;

  return (
    <EpisodeCard flexFlow="column nowrap" alignItems="flex-start">
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
        <InLineLinksContainer>
          <Link to="/">
            <PillLinkComposer text="Tornar Enrere" />
          </Link>
          <FeaturedLinkComposer
            color="black"
            href={`mailto:${email}`}
            text="Contacta'ns"
          />
        </InLineLinksContainer>
      </InnerCardContainer>
    </EpisodeCard>
  );
};

export default Episode;
