import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import SEO from '../components/seo';
import {
  FlexCenter,
  GlobalContainer,
  MainContainer,
} from '../utils/containers';
import { fluid } from '../utils/fluid';

// Styled Components

const HeaderContainer = styled(FlexCenter)`
  width: clamp(272px, 100%, 455px);
  text-align: center;

  @media (min-width: 768px) {
    width: clamp(455px, 100%, 664px);
  }
`;

const PostContainer = styled(MainContainer)`
  & > p > h2 {
    margin-block-start: 48px;
  }

  @media (min-width: 768px) {
    width: clamp(528px, 100%, 708px);
  }

  & > p > h2 {
    margin-block-start: ${fluid(48, 64)};
  }
`;

const Subtitle = styled.p`
  margin-block-end: 0px;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: ${fluid(14, 18)};
  }
`;

// Page Component

const PostPage = ({ location, pageContext }) => {
  return (
    <GlobalContainer>
      <SEO
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
      </PostContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default PostPage;
