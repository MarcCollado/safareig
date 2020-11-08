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

  @media (min-width: 768px) {
    margin: 2rem auto;
  }

  @media (min-width: 1024px) {
    margin: 4.5rem auto;
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
    margin-inline-start: 2.5rem;
    margin-inline-end: 2.5rem;
  }

  @media (min-width: 1280px) {
    margin: 4rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin-inline-start: 1.5rem;
    margin-inline-end: 1.5rem;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    margin-inline-start: 3rem;
    margin-inline-end: 2.75rem;
  }

  @media (min-width: 1280px) {
    margin-inline-start: 5rem;
    margin-inline-end: 5.5rem;
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
  const episodes = data.allFeedSafareigFm?.nodes;
  const totalCount = data.allFeedSafareigFm?.totalCount;

  const renderEpisodes = (episodes) => {
    return episodes.map((episode, i) => {
      const episodeNumber = totalCount - i;
      const {
        id,
        title,
        // content: descriptionHtml,
        contentSnippet: description,
        isoDate: date,
      } = episode;
      // const path = episode.path.current;
      return (
        <Episode
          key={id}
          date={date}
          episodeNumber={episodeNumber}
          title={title}
          description={description}
          // descriptionHtml={descriptionHtml}
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
    allFeedSafareigFm {
      nodes {
        id
        title
        content
        contentSnippet
        isoDate(formatString: "YYYY / MM / DD")
      }
      totalCount
    }
    allFeedSafareigFmMeta {
      nodes {
        id
        # title
        description
        copyright
        language
        link
        itunes {
          author
          categories
          image
          explicit
        }
        image {
          link
          # title
          url
        }
      }
    }
  }
`;
