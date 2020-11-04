import styled from 'styled-components';

export const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-self: flex-start;

  & svg {
    margin-inline-end: 0.75rem; // separate from the h2
  }

  @media (min-width: 1024px) {
    margin-block-end: -0.75rem; // correct h2 margin
    flex-flow: column nowrap; // display svg on top of h2
    align-items: flex-start;
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
// subscribe.js, follow.js, and *start.js*
export const CardContainer = styled.div`
  /* Display & Box Model */
  width: clamp(calc(320px - 6rem), 77vw, calc(450px - 3rem));
  padding: 1rem 1.5rem 1.5rem 1.5rem;
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

  @media (min-width: 576px) {
    & > p {
      max-width: 97.5%;
    }
  }

  @media (min-width: 768px) {
    width: clamp(225px, 29.5vw, 300px);
    margin-block-end: 1.75rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
    width: clamp(280px, 22.5vw, 350px);
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
    width: clamp(350px, 45vw, 500px);
  }

  @media (min-width: 1024px) {
    width: clamp(450px, 42.5vw, 700px);
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
