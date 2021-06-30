import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AdjacentPosts from '../components/adjacent-posts';
import Footer from '../components/footer';
import Seo from '../components/seo';
import SubscribeButlleti from './subscribe-butlleti';
import {
  FeaturedLinkComposer,
  InLineLinksContainer,
  PillLinkComposer,
} from '../styled/link';
import { FlexCenter, GlobalContainer } from '../utils/containers';
import { fluid } from '../utils/fluid';

// Styled Components

const HeaderContainer = styled(FlexCenter)`
  max-width: 455px;
  text-align: center;

  @media (min-width: 768px) {
    width: 75%;
    max-width: 664px;
  }
`;

const PostContainer = styled(FlexCenter)`
  margin-block-start: 16px;
  margin-block-end: 36px;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-block-end: ${fluid(36, 64)};
  }
`;

const TextContainer = styled.div`
  max-width: 455px;
  margin-block-end: 32px;

  & > p > p {
    line-height: 1.55;
  }

  // Titles inside the post
  & > p > h2 {
    margin-block-start: 48px;
  }

  // Links
  & > p a {
    font-weight: 600;
    color: var(--darkBlue);
  }

  // Lists
  & > p > ul > li {
    margin-block-end: 1em;
  }

  // Quotes
  & > p > blockquote {
    margin-inline-start: 16px;
    padding-inline-start: 16px;
    border-inline-start: 3px solid var(--darkBlue);
    opacity: 0.75;
  }

  // Embed media
  & > p > figure {
    text-align: center;
    margin: 16px 0px;
  }

  & > p > figure > iframe {
    width: 87vw;
    height: calc(87vw / 1.77);
    max-width: 455px;
    max-height: calc(455px / 1.77);
  }

  @media (min-width: 768px) {
    width: 75vw;
    max-width: 708px;
    margin-block-end: ${fluid(32, 48)};

    & > p > p {
      line-height: 1.6;
    }

    // Titles inside the post
    & > p > h2 {
      font-size: 24px;
      margin-block-start: ${fluid(48, 64)};
    }

    // Quotes
    & > p > blockquote {
      margin-inline-start: ${fluid(16, 24)};
      padding-inline-start: ${fluid(16, 24)};
      border-inline-start: 3px solid var(--darkBlue);
      opacity: 0.75;
    }

    // Embed media
    & > p > figure {
      margin: ${fluid(24, 32)} 0px;
    }

    & > p > figure > iframe {
      max-width: ${fluid(530, 670)};
      max-height: calc(${fluid(530, 670)} / 1.77);
    }
  }

  @media (min-width: 1024px) {
    & > p > p {
      line-height: 1.7;
    }
    // Titles inside the post
    & > p > h2 {
      font-size: 28px;
    }
  }

  @media (min-width: 1280px) {
    // Titles inside the post
    & > p > h2 {
      font-size: 32px;
    }
  }
`;

const Subtitle = styled.p`
  margin-block-end: 0px;
  font-weight: 500;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);
`;

// Page Component

const PostPage = ({ location, pageContext }) => {
  const [isReady, setIsReady] = useState(false);
  const { next, previous } = pageContext;

  useEffect(() => setIsReady(true), []);

  return (
    isReady && (
      <GlobalContainer>
        <Seo
          location={location}
          pageTitle={pageContext.title}
          pageDescription={pageContext.excerpt}
        />
        <HeaderContainer>
          <h1>{pageContext.title}</h1>
          <Subtitle>{pageContext.published_at}</Subtitle>
        </HeaderContainer>
        <PostContainer>
          <TextContainer>
            <p
              dangerouslySetInnerHTML={{
                __html: pageContext.html
                  .replace(/https:\/\/www.safareig.fm/g, '')
                  .replace(/https:\/\/safareig.fm/g, '')
                  .replace(
                    /href="h/g,
                    `target="_blank" rel="noreferrer" href="h`
                  ),
              }}
            ></p>
          </TextContainer>
          <InLineLinksContainer>
            <PillLinkComposer
              href={`https://twitter.com/intent/tweet?text=Llegeix ${pageContext.title} a ${location.href}`}
              text="Comparteix"
            />
            <FeaturedLinkComposer
              color="black"
              href={`https://twitter.com/safareigfm`}
              text="Segueix-nos"
            />
          </InLineLinksContainer>
        </PostContainer>
        <AdjacentPosts nextPost={next} previousPost={previous} />
        <SubscribeButlleti />
        <Footer />
      </GlobalContainer>
    )
  );
};

export default PostPage;
