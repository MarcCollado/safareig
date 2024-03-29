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
  & > p ul > li {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  // Quotes
  & > p > blockquote {
    margin-inline-start: 16px;
    padding-inline-start: 16px;
    border-inline-start: 3px solid var(--darkBlue);
    opacity: 0.75;
  }

  // Footnotes
  // HRs
  & > p > div > hr {
    display: none;
  }

  // Back references
  & > p sup > a {
    font-size: smaller;
    color: var(--black);
  }

  & > p div.footnotes a.footnote-backref {
    font-size: smaller;
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
  const {
    // author,
    date,
    // featured,
    html,
    meta,
    next,
    prev,
    // published,
    rdm,
    // tags,
    // timeToRead,
    title,
  } = pageContext;

  useEffect(() => setIsReady(true), []);

  return (
    isReady && (
      <GlobalContainer>
        <Seo pageTitle={title} pageDescription={meta} pageUrl={location.href} />
        <HeaderContainer>
          <h1>{title}</h1>
          <Subtitle>{date}</Subtitle>
        </HeaderContainer>
        <PostContainer>
          <TextContainer>
            <p
              dangerouslySetInnerHTML={{
                __html: html
                  .replace(/https:\/\/www.safareig.fm/g, '')
                  .replace(/https:\/\/safareig.netlify.app/g, '')
                  .replace(
                    /href="h/g,
                    `target="_blank" rel="noreferrer" href="h`,
                  ),
              }}
            ></p>
          </TextContainer>
          <InLineLinksContainer>
            <PillLinkComposer
              href={`https://twitter.com/intent/tweet?text=Llegeix ${title} a ${location.href}`}
              text="Comparteix"
            />
            <FeaturedLinkComposer
              color="black"
              href={`https://twitter.com/safareigfm`}
              text="Segueix-nos"
            />
          </InLineLinksContainer>
        </PostContainer>
        <AdjacentPosts
          nextPost={title === next.frontmatter.title ? rdm : next}
          previousPost={prev}
        />
        <SubscribeButlleti />
        <Footer />
      </GlobalContainer>
    )
  );
};

export default PostPage;
