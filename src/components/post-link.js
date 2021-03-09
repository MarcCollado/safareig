import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { CardTitle, InnerCardContainer, PostLinkCard } from '../styled/cards';
import { Meta } from '../styled/text';
import { fluid } from '../utils/fluid';
import PostIcon from '../../content/assets/post.svg';

// Styled Components

const MetaItems = styled.div`
  margin-block-start: 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;

  & p:first-child {
    margin-block-end: 8px;
  }

  @media (min-width: 768px) {
    margin-block-start: ${fluid(32, 48)};
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    & p:first-child {
      margin-block-end: 0px;
    }
  }
`;

const PostMeta = styled(Meta)`
  font-weight: 500;
  letter-spacing: 0px;
`;

// Main Component

const PostLink = ({
  authorName,
  date,
  excerpt,
  path,
  primaryTag,
  readingTime,
  title,
}) => {
  return (
    <PostLinkCard>
      <Link to={`/bugada/${path}`}>
        <InnerCardContainer>
          <CardTitle>
            <PostIcon />
            <h2>{title}</h2>
          </CardTitle>
          <p>{excerpt}</p>
          <MetaItems>
            <PostMeta>{authorName}</PostMeta>
            <PostMeta>{`${date} · ${readingTime}min · ${primaryTag}`}</PostMeta>
          </MetaItems>
        </InnerCardContainer>
      </Link>
    </PostLinkCard>
  );
};

export default PostLink;
