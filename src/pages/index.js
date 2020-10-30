import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/bio';
import Cover from '../components/cover';
import Episode from '../components/episode';
import Footer from '../components/footer';
import Press from '../components/press';
import SEO from '../components/seo';
import Share from '../components/share';
import Start from '../components/start';
import Subscribe from '../components/subscribe';

const HeaderContainer = styled.div`
  margin-block-end: 1.5rem;

  @media (min-width: 576px) {
    margin-block-end: 2rem;
  }

  @media (min-width: 768px) {
    margin: 1rem 1rem 2rem;
    display: flex;
    flex-flow: row-reverse nowrap;
  }

  @media (min-width: 1024px) {
    margin: 2rem;
  }
`;

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const episodes = data.allSanityEpisode?.nodes;

  return (
    <>
      <SEO location={location} title={siteTitle} />
      <HeaderContainer>
        <Cover />
        <Bio />
      </HeaderContainer>
      <Subscribe />
      <Start />
      {episodes.map((episode) => {
        const {
          id,
          episodeNumber,
          title,
          description,
          releaseDate: date,
        } = episode;
        // const path = episode.path.current;
        return (
          <Episode
            key={id}
            date={date}
            episodeNumber={episodeNumber}
            title={title}
            description={description}
          />
        );
      })}
      <Share />
      <Press />
      <Footer />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allSanityEpisode {
      nodes {
        id
        releaseDate
        episodeNumber
        title
        description
        isFeatured
        path {
          current
        }
      }
    }
  }
`;
