import styled from 'styled-components';

export const CardTitle = styled.div`
  & svg {
    margin: 1.5rem 0.75rem 1.5rem 1.5rem;
  }
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;

  @media (min-width: 1024px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    & h2 {
      margin: 0rem 0rem 1.25rem 3rem;
    }

    & svg {
      margin: 2rem 0rem 1.5rem 3rem;
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
  // SVG Chevron imported in the rendered component
  & > svg {
    transition: all 250ms ease-in-out;
  }

  &:hover > svg {
    transform: translateX(0.25rem);
  }
`;

export const SimpleLink = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--darkBlue);
  /* Reset default agent margin */
  margin: 0rem;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

// CARD CONTAINER
// subscribe.js, follow.js, and *start.js*
export const CardContainer = styled.div`
  /* Display & Box Model */
  width: clamp(calc(320px - 3rem), 77vw, 450px);
  border-radius: 1.5rem;
  margin-block-end: 1.5rem;
  box-shadow: ${(props) =>
    props.flat ? 'none' : '2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)'};
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

  & > p {
    margin: 0rem 1.5rem 1rem;
  }

  @media (min-width: 576px) {
    & > p {
      max-width: 90%;
    }
  }

  @media (min-width: 768px) {
    width: clamp(280px, 32vw, 390px);
    margin-block-end: 1.75rem;
  }

  @media (min-width: 1024px) {
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
    width: clamp(400px, 52.5vw, 540px);
  }

  @media (min-width: 1024px) {
    width: clamp(500px, 55vw, 790px);
  }
`;

// CARD EPISODE
// episode.js
export const CardEpisode = styled(CardStart)`
  &:hover {
    box-shadow: none;
    background-color: var(--white);

    & div svg:last-child {
      transform: rotate(90deg);
    }
  }
`;
