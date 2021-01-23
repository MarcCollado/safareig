import styled from 'styled-components';

import { FlexCenter } from '../utils/containers';
import { fluid } from '../utils/fluid';

export const InnerCardContainer = styled.div`
  margin: 24px;

  @media (min-width: 768px) {
    margin: ${fluid(24, 36)};
  }
`;

export const Card = styled(FlexCenter)`
  margin-block-end: 24px;
  border-radius: ${fluid(24, 32)};
  background-color: var(--gray);
  transition: all 300ms ease;

  // Sets its own width >576px
  @media (min-width: 768px) {
    min-width: 270px;
    width: 100%;
    max-width: 409px;
    margin-block-end: ${fluid(24, 48)};
  }
`;

// Used by share.js, press.js
export const FlatCard = styled(Card)`
  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);

      // Controls the arrow link
      & div svg:last-child {
        transform: translate3d(4px, 0px, 0px);
      }
    }
  }
`;

export const EpisodeCard = styled(Card)`
  background-color: var(--white);

  // Sets its own width >576px
  @media (min-width: 768px) {
    min-width: 410px;
    width: 100%;
    max-width: 726px;
  }
`;

export const EpisodeLinkCard = styled(EpisodeCard)`
  background-color: var(--gray);

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);

      // Controls the arrow link
      & div svg:last-child {
        transform: translate3d(4px, 0px, 0px);
      }
    }
  }
`;

// Contains the SVG icon and the h2
export const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;
  margin-block-end: -6px; // Reset default p block-start margin

  & svg {
    width: 28px;
    margin-inline-end: 12px; // Separate icon from the h2
  }

  @media (min-width: 768px) {
    flex-flow: column nowrap; // Display icon on top of h2
    align-items: flex-start;

    & svg {
      width: ${fluid(28, 36)};
      margin-block-end: ${fluid(16, 20)};
    }
  }
`;

// Titles for the EpisodeCard
export const EpisodeDate = styled.p`
  margin: 0px;
  font-weight: 700;
  letter-spacing: -1px;
  opacity: 0.5;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: ${fluid(14, 18)};
  }
`;

export const EpisodeTitle = styled.h2`
  margin-block-start: 16px;
  margin-block-end: -6px; // Reset default p block-start margin
`;
