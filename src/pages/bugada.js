import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Footer from '../components/footer';
import PostLink from '../components/post-link';
import Seo from '../components/seo';
import SubscribeButlleti from '../components/subscribe-butlleti';

import { HeaderDescription } from '../styled/text';
import {
  FlexCenter,
  GlobalContainer,
  MainContainer,
} from '../utils/containers';
import { fluid } from '../utils/fluid';

// Styled Components

const HeaderContainer = styled(FlexCenter)`
  max-width: 455px;
  margin-block-end: 24px;
  text-align: center;

  @media (min-width: 768px) {
    width: 75%;
    max-width: 664px;
    margin-block-end: ${fluid(32, 48)};
  }
`;

const BugadaContainer = styled(MainContainer)`
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

// Page Component

const BugadaPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark?.edges;

  const renderPosts = (posts) => {
    return posts
      .filter(
        (post) =>
          !!post.node.frontmatter?.date && !!post.node.frontmatter?.published
      )
      .map((post) => (
        <PostLink
          key={post.node.id}
          authorName={post.node.frontmatter?.author}
          // authorImage
          date={post.node.frontmatter?.date}
          excerpt={post.node.frontmatter?.meta}
          // image
          path={post.node.frontmatter?.path}
          primaryTag={post.node.frontmatter?.tags[0]}
          timeToRead={post.node.timeToRead}
          title={post.node.frontmatter?.title}
        />
      ));
  };

  return (
    <GlobalContainer>
      <Seo location={location} pageTitle="La Bugada" />
      <HeaderContainer>
        <h1>La Bugada</h1>
        <HeaderDescription>
          El recull d'escrits, reflexions, i pensaments de Safareig. Cada
          dimecres, en 500 paraules, i exclusivament en català.
        </HeaderDescription>
      </HeaderContainer>
      <BugadaContainer>{renderPosts(posts)}</BugadaContainer>
      <SubscribeButlleti />
      <Footer />
    </GlobalContainer>
  );
};

export default BugadaPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            date(formatString: "YYYY / MM / DD")
            featured
            meta
            path
            published
            tags
            title
          }
          html
          id
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`;
