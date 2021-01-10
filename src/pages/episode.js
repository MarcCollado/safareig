import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

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
  MainContainer,
  LeftPanelContainer,
  EpisodesContainer,
} from '../utils/containers';

const EpisodePage = ({ pageContext, location }) => {
  const [isReady, setIsReady] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => setIsReady(true), []);

  const renderEpisode = (e) => {
    const descriptionIndex = e.description.indexOf('Show notes:');
    const showDescription = e.description.substring(0, descriptionIndex - 1);
    const showNotesIndex = e.descriptionHtml.indexOf('<p><strong>Show');
    const showNotes = e.descriptionHtml.substring(showNotesIndex);

    return (
      <Episode
        date={e.date}
        episodeNumber={e.episodeNumber}
        title={e.title}
        description={showDescription}
        audioFile={e.audioFile}
        showNotes={showNotes}
      />
    );
  };

  const renderResponsiveUI = (isDesktop) => {
    return isDesktop ? (
      <>
        <LeftPanelContainer>
          <Cover float={false} />
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <EpisodesContainer>
          {renderEpisode(pageContext)}
          <Start />
        </EpisodesContainer>
      </>
    ) : (
      <>
        <LeftPanelContainer>
          <Cover float={false} />
          <EpisodesContainer>
            {renderEpisode(pageContext)}
            <Start />
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
      <SEO location={location} pageTitle={pageContext.title} />
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
  }
`;
