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

const GlobalContainer = styled.div`
  margin: 2.5rem auto; // Move down and center the content

  @media (min-width: 576px) {
    margin: 3rem auto;
  }

  @media (min-width: 1024px) {
    margin: 3.5rem auto;
  }

  @media (min-width: 1024px) {
    margin: 5rem auto;
  }
`;

const HeaderContainer = styled.div`
  margin-block-end: 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    flex-flow: row-reverse nowrap;
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    margin-inline-start: 2rem;
    margin-inline-end: 2.5rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    margin-inline-start: 2.5rem;
    margin-inline-end: 3rem;
  }

  @media (min-width: 1280px) {
    margin-inline-start: 4rem;
    margin-inline-end: 5rem;
  }
`;

const MobileEpisodesContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopEpisodesContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const episodes = data.allSanityEpisode?.nodes;

  const renderEpisodes = (episodes) => {
    return episodes.map((episode) => {
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
    });
  };

  return (
    <GlobalContainer>
      <SEO location={location} title={siteTitle} />
      <HeaderContainer>
        <Cover />
        <Bio />
      </HeaderContainer>
      <MainContainer>
        <div>
          <Subscribe />
          <MobileEpisodesContainer>
            <Start />
            {renderEpisodes(episodes)}
          </MobileEpisodesContainer>
          <Share />
          <Press />
        </div>
        <DesktopEpisodesContainer>
          <Start />
          {renderEpisodes(episodes)}
        </DesktopEpisodesContainer>
        <Footer />
      </MainContainer>
    </GlobalContainer>
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
