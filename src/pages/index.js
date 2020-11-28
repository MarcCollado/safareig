import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/bio';
import Cover from '../components/cover';
import Episode from '../components/episode';
import Follow from '../components/follow';
import Footer from '../components/footer';
import Press from '../components/press';
import SEO from '../components/seo';
import Share from '../components/share';
import Start from '../components/start';
import Subscribe from '../components/subscribe';
import { fluid } from '../utils/fluid';

const GlobalContainer = styled.div`
  max-width: 1180px;
  margin: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin: ${fluid(32, 112)};
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
    min-width: 280px;
    // 1/2 space from DesktopEpisodeContainer
    margin-inline-end: ${fluid(12, 22)};
    display: block;
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
    min-width: 400px;
    // 1/2 inner space from LeftPanelContainer
    margin-inline-start: ${fluid(12, 22)};
    display: block;
  }
`;

const IndexPage = ({ data, location }) => {
  const [expandedEpisodeRef, setExpandedEpisodeRef] = useState(0);

  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const episodes = data.allFeedSafareigFm?.nodes;
  // const totalCount = data.allFeedSafareigFm?.totalCount;

  const renderEpisodes = (episodes) => {
    return episodes.map((episode, i) => {
      // const episodeNumber = totalCount - i;
      const {
        title,
        content: descriptionHtml,
        contentSnippet: description,
        isoDate: date,
        itunes: { episode: episodeNumber },
        enclosure: { url: audioFile },
      } = episode;

      const descriptionIndex = description.indexOf('Show notes:');
      const showDescription = description.substring(0, descriptionIndex - 1);
      const showNotesIndex = descriptionHtml.indexOf('<p><strong>Show');
      const showNotes = descriptionHtml.substring(showNotesIndex);

      return (
        <Episode
          key={episodeNumber}
          date={date}
          episodeNumber={episodeNumber}
          title={title}
          description={showDescription}
          audioFile={audioFile}
          showNotes={showNotes}
          expandedEpisodeRef={expandedEpisodeRef}
          setExpandedEpisodeRef={(number) => {
            setExpandedEpisodeRef(number);
          }}
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
          <Follow />
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
    # Episodes
    allFeedSafareigFm(sort: { order: DESC, fields: isoDate }) {
      nodes {
        title
        content
        contentSnippet
        isoDate(formatString: "YYYY / MM / DD")
        itunes {
          episode
        }
        enclosure {
          url
        }
      }
      totalCount
    }
    # Podcast
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
