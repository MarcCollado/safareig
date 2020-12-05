import React, { useState } from 'react';
import { graphql } from 'gatsby';

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
import {
  GlobalContainer,
  HeaderContainer,
  MainContainer,
  LeftPanelContainer,
  MobileEpisodesContainer,
  DesktopEpisodesContainer,
} from '../utils/containers';

const IndexPage = ({ data, location }) => {
  const [expandedEpisodeRef, setExpandedEpisodeRef] = useState(0);

  const siteTitle =
    data.site.siteMetadata?.title || `Safareig | El teu podcast en català`;
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
            <Start down={expandedEpisodeRef !== 0} />
            {renderEpisodes(episodes)}
          </MobileEpisodesContainer>
          <Share down={expandedEpisodeRef !== 0} />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <DesktopEpisodesContainer>
          <Start down={expandedEpisodeRef !== 0} />
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
