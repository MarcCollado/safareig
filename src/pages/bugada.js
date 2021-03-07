import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Footer from '../components/footer';
import PostLink from '../components/post-link';
import SEO from '../components/seo';
import { HeaderDescription } from '../styled/text';
import {
  FlexCenter,
  GlobalContainer,
  MainContainer,
} from '../utils/containers';

// Styled Components

const HeaderContainer = styled(FlexCenter)`
  width: clamp(272px, 100%, 455px);
  text-align: center;
  margin-block-end: 32px;

  @media (min-width: 768px) {
    width: clamp(455px, 100%, 700px);
  }
`;

const BugadaContainer = styled(MainContainer)`
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
      <SEO location={location} pageTitle="La Bugada" />
      <HeaderContainer>
        <h1>La Bugada</h1>
        <HeaderDescription>
          Lorem ipsum... el recull d'escrits, reflexions i pensaments, o l'espai
          sobre tecnologia en català.
        </HeaderDescription>
      </HeaderContainer>
      <BugadaContainer>{renderPosts(posts)}</BugadaContainer>
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
