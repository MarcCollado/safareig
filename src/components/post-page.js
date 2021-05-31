import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Seo from '../components/seo';
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
  max-width: 455px;
  margin-block-end: 24px;
  align-items: flex-start;

  & > p > h2 {
    margin-block-start: 48px;
  }

  // Links
  & > p a {
    font-weight: 600;
    color: var(--darkBlue);
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

    & > p > h2 {
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
`;

const Subtitle = styled.p`
  margin-block-end: 0px;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);
`;

// Page Component

const PostPage = ({ location, pageContext }) => {
  return (
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
        <p
          dangerouslySetInnerHTML={{
            __html: pageContext.html.replace(
              /href/g,
              "target='_blank' rel='noreferrer' href"
            ),
          }}
        ></p>
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
      <Footer />
    </GlobalContainer>
  );
};

export default PostPage;
