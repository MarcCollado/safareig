import React from 'react';
import styled from 'styled-components';

import PostLink from '../components/post-link';
import { MainContainer } from '../utils/containers';
import { fluid } from '../utils/fluid';

const AdjacentContainer = styled(MainContainer)`
  margin-block-start: 24px;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    margin-block-start: ${fluid(32, 64)};
  }
`;

const AdjacentPosts = ({ nextPost, previousPost }) => (
  <AdjacentContainer>
    {nextPost && (
      <PostLink
        key={nextPost.id}
        authorName={nextPost.authors[0].name}
        // authorImage={authors[0].cover_image}
        date={nextPost.published_at}
        excerpt={nextPost.excerpt}
        path={nextPost.slug}
        primaryTag={nextPost.primary_tag.name}
        readingTime={nextPost.reading_time}
        title={nextPost.title}
      />
    )}
    {previousPost && (
      <PostLink
        key={previousPost.id}
        authorName={previousPost.authors[0].name}
        // authorImage={authors[0].cover_image}
        date={previousPost.published_at}
        excerpt={previousPost.excerpt}
        path={previousPost.slug}
        primaryTag={previousPost.primary_tag.name}
        readingTime={previousPost.reading_time}
        title={previousPost.title}
      />
    )}
  </AdjacentContainer>
);

export default AdjacentPosts;
