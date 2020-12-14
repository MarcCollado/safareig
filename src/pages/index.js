import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

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
  EpisodesContainer,
  MobileEpisodesContainer,
  DesktopEpisodesContainer,
} from '../utils/containers';

const IndexPage = ({ data, location }) => {
  const [expandedEpisodeRef, setExpandedEpisodeRef] = useState(0);
  const isDesktop = useMediaQuery({ minDeviceWidth: 768 });
  const siteTitle =
    data.site.siteMetadata?.title || `Safareig | El teu podcast en català`;
  const episodes = data.allFeedSafareigFm?.nodes;
  // const totalCount = data.allFeedSafareigFm?.totalCount;

  useEffect(() => {
    renderPage(isDesktop);
  }, [isDesktop]);

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

  const renderResponsivePage = (isDesktop) => {
    return isDesktop ? (
      <MainContainer>
        <LeftPanelContainer>
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <EpisodesContainer>
          <Start
            down={expandedEpisodeRef !== 0}
            setExpandedEpisodeRef={(number) => {
              setExpandedEpisodeRef(number);
            }}
          />
          {renderEpisodes(episodes)}
        </EpisodesContainer>
      </MainContainer>
    ) : (
      <MainContainer>
        <LeftPanelContainer>
          <Subscribe />
          <EpisodesContainer>
            <Start
              down={expandedEpisodeRef !== 0}
              setExpandedEpisodeRef={(number) => {
                setExpandedEpisodeRef(number);
              }}
            />
            {renderEpisodes(episodes)}
          </EpisodesContainer>
          )
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
      </MainContainer>
    );
  };

  return (
    <GlobalContainer>
      <SEO location={location} pageTitle={siteTitle} />
      <HeaderContainer>
        <Cover />
        <Bio />
      </HeaderContainer>
      {renderResponsivePage(isDesktop)}
      <Footer />
    </GlobalContainer>
    // <GlobalContainer>
    //   <SEO location={location} pageTitle={siteTitle} />
    //   <HeaderContainer>
    //     <Cover />
    //     <Bio />
    //   </HeaderContainer>
    //   <MainContainer>
    //     <LeftPanelContainer>
    //       <Subscribe />
    //       <MobileEpisodesContainer>
    //         <Start
    //           down={expandedEpisodeRef !== 0}
    //           setExpandedEpisodeRef={(number) => {
    //             setExpandedEpisodeRef(number);
    //           }}
    //         />
    //         {renderEpisodes(episodes)}
    //       </MobileEpisodesContainer>
    //       <Share />
    //       <Follow />
    //       <Press />
    //     </LeftPanelContainer>
    //     <DesktopEpisodesContainer>
    //       <Start
    //         down={expandedEpisodeRef !== 0}
    //         setExpandedEpisodeRef={(number) => {
    //           setExpandedEpisodeRef(number);
    //         }}
    //       />
    //       {renderEpisodes(episodes)}
    //     </DesktopEpisodesContainer>
    //   </MainContainer>
    //   <Footer />
    // </GlobalContainer>
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
