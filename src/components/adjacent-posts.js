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
        authorName={nextPost.frontmatter?.author}
        // authorImage
        date={nextPost.frontmatter?.date}
        excerpt={nextPost.frontmatter?.meta}
        // image
        path={nextPost.frontmatter?.path}
        primaryTag={nextPost.frontmatter?.tags[0]}
        timeToRead={nextPost.timeToRead}
        title={nextPost.frontmatter?.title}
      />
    )}
    {previousPost && (
      <PostLink
        key={previousPost.id}
        authorName={previousPost.frontmatter?.author}
        // authorImage
        date={previousPost.frontmatter?.date}
        excerpt={previousPost.frontmatter?.meta}
        // image
        path={previousPost.frontmatter?.path}
        primaryTag={previousPost.frontmatter?.tags[0]}
        timeToRead={previousPost.timeToRead}
        title={previousPost.frontmatter?.title}
      />
    )}
  </AdjacentContainer>
);

export default AdjacentPosts;
