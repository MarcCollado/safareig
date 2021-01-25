import React from 'react';
import styled from 'styled-components';

import Chevron from '../styled/chevron';
import { fluid } from '../utils/fluid';

// FEATURED LINKS
// The ones w/ blue links and arrows

const FeaturedLinkContainer = styled.div`
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

    // Slides arrow on hover
    // FeaturedLinks inside cards are controlled w/ the card hover
    &:hover > svg {
      transform: translate3d(4px, 0px, 0px);
    }

    // For black FeaturedLinks, text and arrow turn blue on hover
    &:hover > p {
      color: var(--darkBlue);
    }
    &:hover > svg > path {
      stroke: var(--darkBlue);
    }
  }
`;

// Adds space to FeaturedLinks inside cards
const CardLinkContainer = styled(FeaturedLinkContainer)`
  padding-block-start: ${fluid(12, 16)};
`;

// Text inside FeaturedLinkContainer
export const FeaturedLinkText = styled.p`
  margin: 0px;
  font-weight: 600;
  color: ${(props) =>
    props.color === 'black' ? 'var(--black)' : 'var(--darkBlue)'};
`;

export const FeaturedLinkComposer = ({ color, href, text }) => {
  // color can be either 'black' or 'blue'
  // href if external link
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      <FeaturedLinkContainer>
        <FeaturedLinkText color={color}>{text}</FeaturedLinkText>
        <Chevron color={color} />
      </FeaturedLinkContainer>
    </a>
  ) : (
    <CardLinkContainer>
      <FeaturedLinkText>{text}</FeaturedLinkText>
      <Chevron color={color} />
    </CardLinkContainer>
  );
};

// RICH LINKS
// The ones images, text, and gray arrows

// props.flat => the ones w/ images
// !props.flat => the ones w/ text

const RichLinkContainer = styled.div`
  margin: 12px 0px;
  margin-block-start: ${(props) => (props.withImage ? '12px' : '24px')};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-block-end: 0px;
  }

  & p {
    margin: 0px 0px 0px 16px;
    margin-inline-start: ${(props) => (props.withImage ? '16px' : '0px')};
    margin-inline-end: ${(props) => (props.withImage ? '0px' : '4px')};
  }

  & svg {
    height: auto;
    width: 5px;
    margin-block-start: 2px;
    margin-inline-start: auto;

    path {
      stroke-width: 4;
    }
  }

  @media (min-width: 768px) {
    margin: 0px -12px;
    border-radius: 16px;
    padding: 12px 12px;

    & svg {
      width: 6px;
    }

    &:hover {
      background-color: ${(props) =>
        props.flat ? 'var(--white)' : 'var(--gray)'};
    }
  }
`;

export const RichLinkText = styled.p`
  font-weight: 500;
`;

export const RichLinkComposer = ({ children, flat, withImage }) => (
  // flat: background:gray — hover:white
  // withImage: link has image
  <RichLinkContainer flat={flat} withImage={withImage}>
    {children}
    <Chevron color="gray" />
  </RichLinkContainer>
);

// PILL LINKS

const PillText = styled.button`
  border: none;
  border-radius: 32px;
  padding: 8px 24px;
  display: inline-block;
  transition: all 250ms ease-in-out;

  @media (min-width: 768px) {
    padding: ${fluid(8, 16)} 24px;
  }
`;

export const PillLinkComposer = ({ href, text }) => {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      <PillText>{text}</PillText>
    </a>
  ) : (
    <PillText>{text}</PillText>
  );
};

// MIXING LINKS INLINE

export const InLineLinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  // add space when there are two link items inline
  & a:last-child {
    margin-inline-start: ${fluid(24, 32)};
  }
`;
