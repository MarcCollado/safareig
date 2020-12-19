import styled from 'styled-components';

import { fluid } from '../utils/fluid';

// LAYOUT BLOCKS

export const FlexCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

// CARD COMPONENT

// Contains the SVG icon and the h2
export const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;
  margin-block-end: -6px; // Reset default p block-start margin

  & svg {
    width: 28px;
    // separate icon from the h2
    margin-inline-end: 12px;
  }

  @media (min-width: 768px) {
    // display svg on top of h2
    flex-flow: column nowrap;
    align-items: flex-start;

    & svg {
      width: ${fluid(28, 36)};
      margin-block-end: ${fluid(16, 20)};
    }
  }
`;

export const InnerCardContainer = styled.div`
  margin: 1.5rem;

  @media (min-width: 768px) {
    margin: ${fluid(24, 36)};
  }
`;

// CARD CONTAINER
// Used by subscribe, follow, *start*
export const CardContainer = styled(FlexCenter)`
  width: clamp(272px, 100%, 455px);
  border-radius: ${fluid(24, 32)};
  margin-block-end: 1.5rem;
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};
  box-shadow: ${(props) =>
    props.flat || props.down
      ? 'none'
      : '2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)'};
  position: ${(props) => (props.flat || props.down ? 'static' : 'relative')};
  z-index: ${(props) => (props.flat || props.down ? 1 : 999)};
  transition: all 300ms ease;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    margin-block-end: ${fluid(24, 48)};
  }
`;

// CARD FEATURED
// Used by share, press
export const CardRegular = styled(CardContainer)`
  background-color: var(--gray);
  box-shadow: none;

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--white);

      & div svg:last-child {
        transform: translate3d(4px, 0px, 0px);
      }
    }
  }
`;

// CARD START
// Used by start, *episode*
export const CardStart = styled(CardContainer)`
  @media (min-width: 768px) {
    width: clamp(400px, 100%, 780px);
  }
`;
