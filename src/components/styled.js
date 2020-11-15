import styled from 'styled-components';

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
      width: 1.75rem;
      margin-block-end: 1rem;
    }
  }

  @media (min-width: 768px) {
    & svg {
      width: 2.25rem;
      margin-block-end: 1.25rem;
    }
  }
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

  @media (min-width: 1024px) {
    & > svg {
      margin-inline-start: 1rem;
    }
  }
`;

export const SimpleLink = styled.p`
  margin: 0rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--darkBlue);

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

// CARD CONTAINER

export const InnerCardContainer = styled.div`
  margin: 1.5rem;

  @media (min-width: 1024px) {
    margin: 2.25rem 2.5rem;
  }
`;

// subscribe.js, follow.js, and *start.js*
export const CardContainer = styled.div`
  /* Display & Box Model */
  width: clamp(272px, 100%, 455px);
  border-radius: 1.5rem;
  // space between cards
  margin-block-end: 1.5rem;
  box-shadow: ${(props) =>
    props.flat ? 'none' : '2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)'};
  overflow: hidden;
  position: ${(props) => (props.flat ? 'static' : 'relative')};
  z-index: ${(props) => (props.flat ? 1 : 999)};
  /* Flex */
  display: flex;
  flex-flow: ${(props) => props.flexFlow ?? 'row nowrap'};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-items: ${(props) => props.alignItems ?? 'center'};
  /* Color */
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};
  /* Other */
  transition: all 250ms ease-in-out;

  @media (min-width: 768px) {
    width: clamp(280px, 100%, 390px);
    margin-block-end: 1.75rem;
  }

  @media (min-width: 1024px) {
    margin-block-end: 3rem;
  }
`;

// CARD FEATURED
// share.js and press.js
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
    width: clamp(400px, 100%, 745px);
  }
`;

// CARD EPISODE
// episode.js
export const CardEpisode = styled(CardStart)`
  position: static;
  z-index: 1;

  &:hover {
    box-shadow: none;
    background-color: var(--white);
    box-shadow: 2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18);
    position: relative;
    z-index: 999;

    & div svg:last-child {
      transform: rotate(90deg);
    }
  }
`;
