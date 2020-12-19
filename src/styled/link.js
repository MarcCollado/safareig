import React from 'react';
import styled from 'styled-components';

import Chevron from '../styled/chevron';
import { fluid } from '../utils/fluid';

// Blue links w/ SVG arrows
export const SimpleLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  & > svg {
    height: auto;
    width: 5px;
    margin-block-start: 2px;
    margin-inline-start: ${fluid(8, 12)};
    transition: all 250ms ease-in-out;

    path {
      stroke-width: 4;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 6px;
    }

    // Animations inside cards are controlled in the Card component
    &:hover > svg {
      transform: translate3d(4px, 0px, 0px);
    }
  }
`;

// Text inside SimpleLinkContainer
export const SimpleLink = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  color: var(--darkBlue);

  @media (min-width: 768px) {
    font-size: ${fluid(16, 20)};
  }
`;

// Special CTAs for cards — separated from main content
export const CardLinkContainer = styled(SimpleLinkContainer)`
  padding-block-start: ${fluid(12, 16)};
`;

export const SimpleLinkComposer = ({ href, text }) => {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      <SimpleLinkContainer>
        <SimpleLink>{text}</SimpleLink>
        <Chevron color="blue" />
      </SimpleLinkContainer>
    </a>
  ) : (
    <CardLinkContainer>
      <SimpleLink>{text}</SimpleLink>
      <Chevron color="blue" />
    </CardLinkContainer>
  );
};

export const composeFeaturedLink = (image = false) => {};
