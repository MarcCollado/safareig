import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Cover from '../components/cover';
import Episode from '../components/episode';
import Follow from '../components/follow';
import Footer from '../components/footer';
import Press from '../components/press';
import SEO from '../components/seo';
import Share from '../components/share';
import Related from '../components/related';
import Subscribe from '../components/subscribe';
import {
  GlobalContainer,
  MainContainer,
  LeftPanelContainer,
  EpisodesContainer,
} from '../utils/containers';

const EpisodePage = ({ location, pageContext }) => {
  const [isReady, setIsReady] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => setIsReady(true), []);

  const renderEpisode = (e = pageContext) => {
    return (
      <Episode
        audioFile={e.audioFile}
        date={e.date}
        episodeNumber={e.episodeNumber}
        showDescription={e.showDescription}
        showNotes={e.showNotes}
        title={e.title}
        url={location.href}
      />
    );
  };

  const renderResponsiveUI = (isDesktop) => {
    return isDesktop ? (
      <>
        <LeftPanelContainer>
          <Cover location={location.pathname} />
          <Subscribe />
          <Share />
          <Follow />
          <Press />
        </LeftPanelContainer>
        <EpisodesContainer>
          {renderEpisode()}
          <Related
            episodeTitle={pageContext.title}
            relatedEpisodes={pageContext.relatedEpisodes}
          />
        </EpisodesContainer>
      </>
    ) : (
      <>
        <LeftPanelContainer>
          <Cover location={location.pathname} />
          <EpisodesContainer>
            {renderEpisode()}
            <Related
              episodeTitle={pageContext.title}
              relatedEpisodes={pageContext.relatedEpisodes}
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
      <SEO
        location={location}
        pageTitle={pageContext.title}
        pageDescription={pageContext.showDescription}
      />
      <MainContainer>{isReady && renderResponsiveUI(isDesktop)}</MainContainer>
      {isReady && <Footer />}
    </GlobalContainer>
  );
};

export default EpisodePage;
