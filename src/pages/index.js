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
  // width: 100%;
  max-width: 1180px;
  margin: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin: 2rem;
  }

  @media (min-width: 1024px) {
    margin: 4rem;
  }

  @media (min-width: 1280px) {
    margin: 7rem 8rem;
  }
`;

const HeaderContainer = styled.div`
  margin-block-end: 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const LeftPanelContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    // width: clamp(280px, 100%, 390px);
    // 1/2 space from DesktopEpisodeContainer
    margin-inline-end: 0.75rem;
    display: block;
  }

  @media (min-width: 1024px) {
    margin-inline-end: 1.375rem;
  }
`;

const MobileEpisodesContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopEpisodesContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    // width: clamp(400px, 100%, 745px);
    // 1/2 inner space from LeftPanelContainer
    margin-inline-start: 0.75rem;
    display: block;
  }

  @media (min-width: 1024px) {
    margin-inline-start: 1.375rem;
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

      const showNotesIndex = description.indexOf('Show notes:');
      const showNotes = description.substring(showNotesIndex + 12);
      const showDescription = description.substring(0, showNotesIndex - 1);

      // const path = episode.path.current;

      return (
        <Episode
          key={id}
          date={date}
          episodeNumber={episodeNumber}
          title={title}
          description={showDescription}
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
        <LeftPanelContainer>
          <Subscribe />
          <MobileEpisodesContainer>
            <Start />
            {renderEpisodes(episodes)}
          </MobileEpisodesContainer>
          <Share />
          <Press />
        </LeftPanelContainer>
        <DesktopEpisodesContainer>
          <Start />
          {renderEpisodes(episodes)}
        </DesktopEpisodesContainer>
      </MainContainer>
      <Footer />
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
