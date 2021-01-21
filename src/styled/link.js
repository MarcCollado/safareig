import React from 'react';
import styled from 'styled-components';

import Chevron from '../styled/chevron';
import { fluid } from '../utils/fluid';

// Blue links w/ SVG arrows
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

    // Animations inside cards are controlled in the Card component
    &:hover > svg {
      transform: translate3d(4px, 0px, 0px);
    }
  }
`;

// Featured links inside cards
const CardLinkContainer = styled(FeaturedLinkContainer)`
  padding-block-start: ${fluid(12, 16)};
`;

// Text inside FeaturedLinkContainer
export const FeaturedLinkText = styled.p`
  margin: 0px;
  font-weight: 600;
  color: var(--darkBlue);
`;

export const FeaturedLinkComposer = ({ href, text }) => {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      <FeaturedLinkContainer>
        <FeaturedLinkText>{text}</FeaturedLinkText>
        <Chevron color="blue" />
      </FeaturedLinkContainer>
    </a>
  ) : (
    <CardLinkContainer>
      <FeaturedLinkText>{text}</FeaturedLinkText>
      <Chevron color="blue" />
    </CardLinkContainer>
  );
};

const RichLinkContainer = styled.div`
  margin: 12px 0px;
  margin-block-start: ${(props) => (props.flat ? '12px' : '24px')};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-block-end: 0px;
  }

  & p {
    margin: 0px 0px 0px 16px;
    margin-inline-start: ${(props) => (props.flat ? '16px' : '0px')};
    margin-inline-end: ${(props) => (props.flat ? '0px' : '4px')};
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

export const RichLinkComposer = ({ children, flat }) => (
  <RichLinkContainer flat={flat}>
    {children}
    <Chevron color="gray" />
  </RichLinkContainer>
);

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

export const PillLinkComposer = ({ href, text }) => <PillText>{text}</PillText>;
