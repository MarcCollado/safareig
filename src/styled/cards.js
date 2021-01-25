import styled from 'styled-components';

import { FlexCenter } from '../utils/containers';
import { fluid } from '../utils/fluid';

export const FullPageCard = styled(FlexCenter)`
  margin-block-end: 24px;
  border-radius: ${fluid(24, 32)};
  background-color: var(--white);
  transition: all 300ms ease;

  // Sets its own width >576px
  @media (min-width: 768px) {
    width: 100%;
    margin-block-end: ${fluid(24, 48)};
    border-radius: ${fluid(24, 40)};
  }
`;

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
    min-width: 260px;
    width: 100%;
    max-width: 408px;
    margin-block-end: ${fluid(24, 40)};
    border-radius: ${fluid(24, 40)};
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
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};

  // Sets its own width >576px
  @media (min-width: 768px) {
    min-width: 436px;
    width: 100%;
    max-width: 728px;
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

  & svg {
    width: 28px;
    margin-inline-end: 12px; // Separate svg from the h2
  }

  @media (min-width: 768px) {
    & svg {
      width: ${fluid(28, 36)};
      margin-inline-end: ${fluid(12, 16)};
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
