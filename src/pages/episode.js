import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
// import Loader from 'react-loader-spinner';

import Cover from '../components/cover';
import Episode from '../components/episode';
import Follow from '../components/follow';
import Footer from '../components/footer';
import Press from '../components/press';
// import SEO from '../components/seo';
import Share from '../components/share';
import Start from '../components/start';
import Subscribe from '../components/subscribe';
import {
  GlobalContainer,
  // HeaderContainer,
  MainContainer,
  LeftPanelContainer,
  EpisodesContainer,
} from '../utils/containers';

const EpisodePage = ({ data, location }) => {
  const [expandedEpisodeRef, setExpandedEpisodeRef] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => setIsReady(true), []);

  const siteTitle =
    data.site.siteMetadata?.title || `Safareig | El teu podcast en català`;
  const episodes = data.allFeedSafareigFm?.nodes;
  // const totalCount = data.allFeedSafareigFm?.totalCount;
  const episode = episodes.filter(
    (e) => e.itunes.episode == location.state.episode
  );
  const renderEpisode = (episode) => {
    const {
      title,
      content: descriptionHtml,
      contentSnippet: description,
      isoDate: date,
      itunes: { episode: episodeNumber },
      enclosure: { url: audioFile },
    } = episode[0];
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
  };

  const renderResponsiveUI = (isDesktop) => {
    return isDesktop ? (
      <>
        <LeftPanelContainer>
          <Cover />
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <EpisodesContainer>
          <p>{`Ramon, ets a la pàgina: ${location.href} ✌️`}</p>
          {renderEpisode(episode)}
          <Start
            down={expandedEpisodeRef !== 0}
            setExpandedEpisodeRef={(number) => {
              setExpandedEpisodeRef(number);
            }}
          />
        </EpisodesContainer>
      </>
    ) : (
      <>
        <LeftPanelContainer>
          <Cover />
          <p>{`Ramon, ets a la pàgina: ${location.href} ✌️`}</p>
          <EpisodesContainer>
            {renderEpisode(episode)}
            <Start
              down={expandedEpisodeRef !== 0}
              setExpandedEpisodeRef={(number) => {
                setExpandedEpisodeRef(number);
              }}
            />
          </EpisodesContainer>
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
      </>
    );
  };

  return (
    <GlobalContainer>
      {/* <SEO location={location} pageTitle={siteTitle} />
      <HeaderContainer>
        <Bio />
      </HeaderContainer> */}
      <MainContainer>{isReady && renderResponsiveUI(isDesktop)}</MainContainer>
      {isReady && <Footer />}
    </GlobalContainer>
  );
};

export default EpisodePage;

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
