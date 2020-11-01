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
  margin-block-end: 2rem; // Set some room below
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin: 1rem 1rem 2rem;
    flex-flow: row-reverse nowrap;
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    /* margin: 2rem; */
  }
`;

const MainContainer = styled.div`
  @media (min-width: 768px) {
    margin: 0rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

const LeftColumn = styled.div``;

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

  return (
    <GlobalContainer>
      <SEO location={location} title={siteTitle} />
      <HeaderContainer>
        <Cover />
        <Bio />
      </HeaderContainer>
      {/* <MainContainer>
        <LeftColumn>
          <Subscribe />
          <MobileEpisodesContainer>
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
          </MobileEpisodesContainer>
          <Share />
          <Press />
        </LeftColumn>
        <DesktopEpisodesContainer>
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
        </DesktopEpisodesContainer>
        <Footer />
      </MainContainer> */}
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
