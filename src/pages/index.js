import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from '@reach/router';

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
} from '../utils/containers';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const IndexPage = ({ data }) => {
  const [expandedEpisodeRef, setExpandedEpisodeRef] = useState(0);
  const location = useLocation();
  const prevLocation = usePrevious(location);

  // useEffect(() => {
  //   if (location !== prevLocation) {
  //     console.log(location.hash);
  //   }
  // }, [location, prevLocation]);

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
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
      <SEO location={location} pageTitle={siteTitle} />
      <HeaderContainer>
        <Cover />
        <Bio />
      </HeaderContainer>
      <MainContainer>
        <LeftPanelContainer>
          <Subscribe />
          {!isDesktop && (
            <EpisodesContainer>
              <Start
                down={expandedEpisodeRef !== 0}
                setExpandedEpisodeRef={(number) => {
                  setExpandedEpisodeRef(number);
                }}
              />
              {renderEpisodes(episodes)}
            </EpisodesContainer>
          )}
          <Share down={expandedEpisodeRef !== 0} />
          <Follow />
          <Press />
        </LeftPanelContainer>
        {isDesktop && (
          <EpisodesContainer>
            <Start
              down={expandedEpisodeRef !== 0}
              setExpandedEpisodeRef={(number) => {
                setExpandedEpisodeRef(number);
              }}
            />
            {renderEpisodes(episodes)}
          </EpisodesContainer>
        )}
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
