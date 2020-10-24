import styled from 'styled-components';

export const CardTitle = styled.div`
  /* Display & Box Model */
  & h2 {
    margin-inline-start: 1rem;
  }
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

// SIMPLE LINK

export const SimpleLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  // SVG Chevron imported in the rendered component
  & > svg {
    transition: all 250ms ease-in-out;
  }

  &:hover > svg {
    transform: translateX(0.25rem);
  }
`;

export const SimpleLink = styled.p`
  font-weight: 600;
  color: var(--darkBlue);
  /* Reset default agent margin */
  margin: 0rem;
`;

// CARD CONTAINER
// subscribe.js, follow.js, and *start.js*
export const CardContainer = styled.div`
  /* Display & Box Model */
  width: ${(props) =>
    props.width ? `${props.width}rem` : 'var(--cardSizeSmall)'};
  height: ${(props) => props.height}rem;
  margin: 1rem auto;
  border-radius: 1.5rem;
  box-shadow: ${(props) =>
    props.flat ? 'none' : '2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)'};
  padding: 1rem 1.5rem 1.5rem;
  overflow: hidden;
  /* Flex */
  display: flex;
  flex-flow: ${(props) => props.flexFlow ?? 'row nowrap'};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-items: ${(props) => props.alignItems ?? 'center'};
  /* Color */
  background-color: ${(props) => (props.flat ? 'var(--gray)' : 'var(--white)')};
  /* Other */
  transition: all 250ms ease-in-out;

  @media (min-width: 576px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeMedium)'};
  }

  @media (min-width: 768px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeSmall)'};
  }

  @media (min-width: 1024px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeMedium)'};
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
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeMedium)'};
  }

  @media (min-width: 1024px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeLarge)'};
  }
`;

// CARD EPISODE
// episode.js
export const CardEpisode = styled(CardContainer)`
  &:hover {
    box-shadow: none;
    background-color: var(--white);

    & div svg:last-child {
      transform: rotate(90deg);
    }
  }

  @media (min-width: 768px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeMedium)'};
  }

  @media (min-width: 1024px) {
    width: ${(props) =>
      props.width ? `${props.width}rem` : 'var(--cardSizeLarge)'};
  }
`;
