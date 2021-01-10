import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

import Bio from '../components/bio';
import Cover from '../components/cover';
import EpisodeLink from '../components/episode-link';
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

const IndexPage = ({ data, location }) => {
  const [isReady, setIsReady] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => setIsReady(true), []);

  const siteTitle =
    data.site.siteMetadata?.title || `Safareig | El teu podcast en català`;
  const episodes = data.allFeedSafareigFm?.nodes;

  const renderEpisodes = (episodes) => {
    return episodes.map((episode, i) => {
      const {
        title,
        contentSnippet: description,
        isoDate: date,
        itunes: { episode: episodeNumber },
      } = episode;

      const descriptionIndex = description.indexOf('Show notes:');
      const showDescription = description.substring(0, descriptionIndex - 1);

      return (
        <EpisodeLink
          key={episodeNumber}
          date={date}
          episodeNumber={episodeNumber}
          title={title}
          description={showDescription}
        />
      );
    });
  };

  const renderResponsiveUI = (isDesktop) => {
    return isDesktop ? (
      <>
        <LeftPanelContainer>
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <EpisodesContainer>
          <Start />
          {renderEpisodes(episodes)}
        </EpisodesContainer>
      </>
    ) : (
      <>
        <LeftPanelContainer>
          <Subscribe />
          <EpisodesContainer>
            <Start />
            {renderEpisodes(episodes)}
          </EpisodesContainer>
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
      </>
    );
  };

  return (
    <GlobalContainer>
      <SEO location={location} pageTitle={siteTitle} />
      <HeaderContainer>
        <Cover float={true} />
        <Bio />
      </HeaderContainer>
      <MainContainer>{isReady && renderResponsiveUI(isDesktop)}</MainContainer>
      {isReady && <Footer />}
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

        contentSnippet
        isoDate(formatString: "YYYY / MM / DD")
        itunes {
          episode
        }
      }
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
