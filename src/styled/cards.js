import styled from 'styled-components';

import { FlexCenter } from '../utils/containers';
import { fluid } from '../utils/fluid';

// Shared w/ 404.js
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

// Shared w/ follow.js && subscribe.js
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

// Shared w/ press.js && share.js
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

// Shared w/ related.js && start.js
export const EpisodeCard = styled(Card)`
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};

  // Sets its own width >768px
  @media (min-width: 768px) {
    min-width: 436px;
    width: 100%;
    max-width: 728px;
  }
`;

// Shared w/ episode-link.js
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

// Shared w/ post-link.js
export const PostLinkCard = styled(Card)`
  @media (min-width: 768px) {
    min-width: 348px;
    width: 100%;
    max-width: 568px;

    &:hover {
      background-color: var(--white);
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

export const EpisodeTitle = styled.h2`
  margin-block-start: 16px;
  margin-block-end: -6px; // Reset default p block-start margin
`;

// Mobile Navbar Menu
export const MobileMenuCard = styled.div`
  width: 100%;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: absolute;
  top: ${(props) => (props.show ? '0px' : '-600px')};
  z-index: -1;
  backdrop-filter: blur(48px);
  background-color: var(--white);

  transition: all 500ms ease;

  & > * {
    margin-block-start: 16px;
    margin-block-end: 16px;
  }

  & > a:first-child {
    // Correct for navbar height
    margin-block-start: 100px;
  }

  & > a:last-child {
    margin-block-start: 32px;
    margin-block-end: 48px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
