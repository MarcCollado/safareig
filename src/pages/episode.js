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

  const renderEpisode = (e) => {
    const descriptionIndex = e.description.indexOf('Show notes:');
    const showDescription = e.description.substring(0, descriptionIndex - 1);
    const showNotesIndex = e.descriptionHtml.indexOf('notes:</strong></p>');
    const showNotes = e.descriptionHtml.substring(showNotesIndex + 19);

    return (
      <Episode
        date={e.date}
        episodeNumber={e.episodeNumber}
        title={e.title}
        description={showDescription}
        audioFile={e.audioFile}
        showNotes={showNotes}
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
          {renderEpisode(pageContext)}
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
            {renderEpisode(pageContext)}
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
      <SEO location={location} pageTitle={pageContext.title} />
      <MainContainer>{isReady && renderResponsiveUI(isDesktop)}</MainContainer>
      {isReady && <Footer />}
    </GlobalContainer>
  );
};

export default EpisodePage;
