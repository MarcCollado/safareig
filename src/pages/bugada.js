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
  margin-block-end: 24px;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

// Page Component

const BugadaPage = ({ data, location }) => {
  const posts = data.allGhostPost?.nodes;

  const renderPosts = (posts) => {
    return posts.map((post, i) => {
      const {
        authors,
        excerpt,
        id,
        primary_tag,
        published_at,
        reading_time,
        slug,
        title,
      } = post;

      return (
        <PostLink
          key={id}
          authorName={authors[0].name}
          // authorImage={authors[0].cover_image}
          date={published_at}
          excerpt={excerpt}
          path={slug}
          primaryTag={primary_tag.name}
          readingTime={reading_time}
          title={title}
        />
      );
    });
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
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      nodes {
        id
        authors {
          cover_image
          name
        }
        excerpt
        primary_tag {
          name
        }
        published_at(formatString: "YYYY / MM / DD")
        reading_time
        slug
        title
      }
    }
  }
`;
