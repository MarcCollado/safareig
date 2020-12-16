import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { CardStart, CardTitle, InnerCardContainer } from './styled';
import { FeaturedLinkContainer } from '../utils/containers';
import StartHereSvg from '../../content/assets/start-here.svg';
import ChevronRight from '../../content/assets/chevron-right.svg';

// Styled components

const StyledChevron = styled(ChevronRight)`
  width: 1.75rem;
  // float right
  margin-inline-start: auto;
  margin-inline-end: -0.25rem;
`;

// Main components

const StartHere = ({ down, setExpandedEpisodeRef }) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query StartHereQuery {
      allSanityEpisode(
        filter: { isFeatured: { eq: true } }
        sort: { fields: episodeNumber, order: DESC }
        limit: 3
      ) {
        nodes {
          id
          episodeNumber
          title
          path {
            current
          }
        }
      }
    }
  `);

  const generateFeaturedEpisodesList = data.allSanityEpisode?.nodes.map((e) => {
    return (
      <Link to={'/'} key={e.id} onClick={() => handleOnClick(e.episodeNumber)}>
        <FeaturedLinkContainer>
          <p>{`${e.episodeNumber}: ${e.title}`}</p>
          <StyledChevron />
        </FeaturedLinkContainer>
      </Link>
    );
  });

  const handleOnClick = (n) => setExpandedEpisodeRef(parseInt(n));

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <CardStart down={down}>
      <InnerCardContainer>
        <CardTitle>
          <StartHereSvg />
          <h2>
            {isDesktop ? `Comença Escoltant Aquests Capítols` : `Comença Aquí`}
          </h2>
        </CardTitle>
        <p>
          És difícil començar a escoltar un podcast, i sempre hi ha capítols que
          són més bons. Nosaltres et recomanem aquests:
        </p>
        {generateFeaturedEpisodesList}
      </InnerCardContainer>
    </CardStart>
  );
};

export default StartHere;
