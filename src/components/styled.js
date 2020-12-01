import styled from 'styled-components';

import { fluid } from '../utils/fluid';

// LAYOUT BLOCKS

export const FlexCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

// SIMPLE LINK

export const SimpleLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;

  & > svg {
    max-height: 0.75rem;
    margin-block-start: 2px;
    margin-inline-start: 0.5rem;
    transition: all 250ms ease-in-out;
  }

  &:hover > svg {
    transform: translateX(0.25rem);
  }

  @media (min-width: 768px) {
    & > svg {
      margin-inline-start: ${fluid(8, 16)};
    }
  }
`;

export const SimpleLink = styled.p`
  margin: 0rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--darkBlue);

  @media (min-width: 768px) {
    font-size: ${fluid(16, 20)};
  }
`;

// CARD COMPONENT

export const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;

  & svg {
    width: 2rem;
    // separate icon from the h2
    margin-inline-end: 0.75rem;
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
// Used by subscribe, follow, start
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
  transition: all 400ms ease-in-out;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    margin-block-end: ${fluid(24, 48)};
  }
`;

// CARD FEATURED
// Used by share, press
export const CardFeatured = styled(CardContainer)`
  &:hover {
    box-shadow: none;
    background-color: var(--white);

    & div svg:last-child {
      transform: translateX(0.25rem);
    }
  }
`;

// CARD START
// start.js
export const CardStart = styled(CardContainer)`
  @media (min-width: 768px) {
    width: clamp(400px, 100%, 780px);
  }
`;
